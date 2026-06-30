import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  BadgePercent,
  Clock,
  Rocket,
  FileCheck,
  UserCheck,
  Send,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureList from "@/components/FeatureList";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Loans",
  description:
    "Quick, affordable, low interest loans to boost your business or meet urgent needs, no unnecessary delays.",
};

const benefits = [
  {
    icon: Zap,
    title: "Quick Access",
    description: "Fast approvals so you can act when opportunity knocks.",
  },
  {
    icon: BadgePercent,
    title: "Affordable Rates",
    description: "Genuinely low interest, set with members in mind.",
  },
  {
    icon: Clock,
    title: "No Unnecessary Delays",
    description: "A simple process without endless back and forth.",
  },
  {
    icon: Rocket,
    title: "Boosts Your Business",
    description: "Capital to grow stock, expand, or steady your cash flow.",
  },
];

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Become a Member",
    description:
      "Join AMCS and maintain an active savings record with us.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Submit Your Request",
    description:
      "Tell us how much you need and what it's for. We keep paperwork minimal.",
  },
  {
    icon: Send,
    step: "03",
    title: "Get Funded",
    description:
      "Once approved, funds are disbursed quickly so you can put them to work.",
  },
];

export default function LoansPage() {
  return (
    <>
      <PageHero
        eyebrow="Loans"
        title="Low interest rate loans available"
        description="Get quick, affordable loans to boost your business or meet urgent needs, with no unnecessary delays."
        image="/images/handshake.jpg"
      />

      {/* Flagship: Business Loans */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light p-8 text-white shadow-card sm:p-12 lg:p-14">
              <div
                className="absolute inset-0 bg-[url('/brand-motif.svg')] bg-cover bg-center"
                aria-hidden
              />
              <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
              <div
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-gold/25 blur-3xl"
                aria-hidden
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-green-dark">
                    <Briefcase className="h-3.5 w-3.5" strokeWidth={2.6} />
                    Flagship Product
                  </span>
                  <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                    Business Loans
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-cream/90">
                    Get the capital your business needs to grow, fast approval,
                    low interest, flexible repayment.
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-cream/90">
                    {[
                      "Fast approval",
                      "Low interest",
                      "Flexible repayment",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Link href="/contact" className="btn-gold">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-brand-green-dark">
                      <Briefcase className="h-7 w-7" strokeWidth={2.2} />
                    </span>
                    <p className="mt-5 font-heading text-lg font-bold">
                      Built to fund growth
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-cream/80">
                      Whether you&apos;re restocking, expanding, or steadying your
                      cash flow, our business loans put working capital within
                      reach, without the usual delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature section */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light p-8 text-white shadow-card sm:p-10">
              <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-green-dark">
                  Member Exclusive
                </span>
                <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight sm:text-3xl">
                  Affordable capital, when you actually need it
                </h3>
                <p className="mt-4 text-brand-cream/85">
                  Our loans are designed to keep your business moving, fair
                  rates, fast decisions, and a team that understands the realities
                  of running a hustle in Nigeria.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-heading text-3xl font-extrabold text-brand-gold">
                      48hrs
                    </p>
                    <p className="text-sm text-brand-cream/75">
                      Typical approval time
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-extrabold text-brand-gold">
                      Low
                    </p>
                    <p className="text-sm text-brand-cream/75">
                      Member interest rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Loan Benefits"
              title="Built to move your business forward"
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-brand-green/10 bg-white p-6 shadow-soft">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                      <b.icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h4 className="mt-4 font-heading text-base font-bold text-brand-green-dark">
                      {b.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                      {b.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Eligibility"
              title="Who can apply?"
              description="Loan eligibility is built on your membership and savings history with AMCS."
            />
            <Reveal>
              <FeatureList
                className="mt-8"
                items={[
                  "Be a registered member of AMCS",
                  "Maintain an active savings account with consistent deposits",
                  "Provide a valid means of identification",
                  "Provide a guarantor where required",
                  "A clear record of any previous repayments",
                ]}
              />
            </Reveal>
            <p className="mt-6 text-xs italic text-foreground/50">
              * Requirements shown are placeholders and may vary. Contact us for
              the current loan terms.
            </p>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="How to Apply"
              title="Three simple steps"
            />
            <div className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-brand-green/10 bg-brand-cream p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
                      <step.icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-sm font-bold text-brand-gold-dark">
                          {step.step}
                        </span>
                        <h4 className="font-heading text-base font-bold text-brand-green-dark">
                          {step.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need capital to grow your business?"
        description="Join AMCS, build your savings, and unlock affordable loans when you need them."
        secondaryHref="/savings"
        secondaryLabel="View Savings Plans"
      />
    </>
  );
}
