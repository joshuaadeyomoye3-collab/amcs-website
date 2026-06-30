import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AMCS. Reach us by phone, email, WhatsApp, or visit our office.",
};

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phones.join(", "),
    href: `tel:${company.phones[0]}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: company.whatsapp,
    href: company.whatsappLink,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: company.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Have a question about savings, loans, or membership? Reach out and our team will be happy to help."
        image="/images/market-stall.jpg"
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="grid gap-4">
                {details.map((d) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-brand-green/10 bg-white p-5 shadow-soft transition-colors hover:border-brand-green/25">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                        <d.icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                          {d.label}
                        </p>
                        <p className="mt-0.5 font-medium text-brand-green-dark">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a
                      key={d.label}
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        d.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}

                <div className="flex items-start gap-4 rounded-2xl border border-brand-green/10 bg-brand-cream p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-dark">
                    <Clock className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                      Office Hours
                    </p>
                    <p className="mt-0.5 font-medium text-brand-green-dark">
                      Mon to Fri: 8:00am to 5:00pm
                    </p>
                    <p className="text-sm text-foreground/60">
                      Sat: 9:00am to 1:00pm
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="pb-20 sm:pb-24">
        <div className="container-page">
          <Reveal>
            <div className="mb-6 flex flex-col gap-1 text-center sm:text-left">
              <span className="eyebrow mx-auto sm:mx-0">Find Us</span>
              <p className="font-heading text-lg font-bold text-brand-green-dark">
                {company.address}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-brand-green/10 bg-brand-green/5 shadow-soft">
              {/* branded fallback shown behind the map (visible if the embed is blocked) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-grid-faint p-6 text-center [background-size:32px_32px]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-white shadow-soft">
                  <MapPin className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <p className="font-heading text-base font-bold text-brand-green-dark">
                  {company.address}
                </p>
                <span className="text-sm text-foreground/55">
                  Use “Get Directions” below to open the map
                </span>
              </div>
              <iframe
                title={`Map showing ${company.address}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  company.mapQuery
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="relative block h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center sm:text-left">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  company.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
