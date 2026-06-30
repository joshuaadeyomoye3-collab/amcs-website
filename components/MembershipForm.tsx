"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const plans = [
  "Daily Savings",
  "Weekly Savings",
  "Monthly Savings",
  "Spontaneous Savings",
  "Target Savings",
  "Not sure yet, advise me",
];

export default function MembershipForm() {
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
      type: "membership",
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      plan: formData.get("plan"),
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
      toast.success("Application received!", {
        description: "Our team will reach out to you shortly.",
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not submit. Please try again.";
      setError(message);
      toast.error("Submission failed", { description: message });
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
          Application received!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-foreground/65">
          Thank you for your interest in AMCS. Our team will reach out to you
          shortly to complete your membership.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-6"
        >
          Submit another response
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
        <label htmlFor="mf-company">Company</label>
        <input
          id="mf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Adaeze Okonkwo"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. 0801 234 5678"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Label htmlFor="plan">Preferred Savings Plan</Label>
          <select id="plan" name="plan" required className="input" defaultValue="">
            <option value="" disabled>
              Select a plan
            </option>
            {plans.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your goals…"
        />
      </div>

      {error && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="mt-7 w-full sm:w-auto">
        {loading ? "Submitting…" : "Submit Application"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
