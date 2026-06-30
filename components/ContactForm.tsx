"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    // Honeypot: only bots fill this hidden field. Silently "succeed".
    if (formData.get("company")) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    const payload = {
      type: "contact",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      company: formData.get("company"),
      elapsedMs: Date.now() - startedAt.current,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setSubmitted(true);
      toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not send. Please try again.";
      setError(message);
      toast.error("Could not send message", { description: message });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-green/15 bg-white p-10 text-center shadow-card">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-brand-green-dark">
          Message sent!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-foreground/65">
          Thanks for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-6"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-brand-green/10 bg-white p-7 shadow-card sm:p-9"
    >
      {/* Honeypot: hidden from people, ignored by them; bots tend to fill it */}
      <div
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Full Name</Label>
          <Input
            id="c-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="c-email">Email Address</Label>
          <Input
            id="c-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="c-phone">Phone Number</Label>
        <Input
          id="c-phone"
          name="phone"
          type="tel"
          placeholder="0801 234 5678"
        />
      </div>

      <div className="mt-5">
        <Label htmlFor="c-message">Message</Label>
        <Textarea
          id="c-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
        />
      </div>

      {error && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="mt-7 w-full sm:w-auto">
        {loading ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
