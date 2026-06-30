import type { Metadata } from "next";
import {
  Gift,
  PiggyBank,
  HandCoins,
  ShieldCheck,
  TrendingUp,
  FileText,
  UserPlus,
  Wallet,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import MembershipForm from "@/components/MembershipForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "Become a member of AMCS. Enjoy flexible savings, low interest loans, and profit sharing, when AMCS wins, you win.",
};

const benefits = [
  {
    icon: PiggyBank,
    title: "Flexible Savings",
    description: "Save daily, weekly, monthly, or whenever you have extra cash.",
  },
  {
    icon: HandCoins,
    title: "Low Interest Loans",
    description: "Unlock affordable loans backed by your savings history.",
  },
  {
    icon: Gift,
    title: "Profit Sharing",
    description: "Earn a share of the cooperative's profits as a member.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Trust",
    description: "Your money is safe with a registered, transparent coop.",
  },
];

const faqs = [
  {
    q: "What is AMCS?",
    a: "AMCS stands for Achievers Multipurpose Cooperative Society, a registered cooperative that helps members save, access affordable loans, and grow their businesses.",
  },
  {
    q: "How much do I need to join?",
    a: "Membership is affordable and flexible. After you apply, our team will guide you through the registration fee and how to start your preferred savings plan.",
  },
  {
    q: "How soon can I get a loan after joining?",
    a: "Loan eligibility is built on an active savings record. The longer and more consistent your savings, the higher your loan eligibility.",
  },
  {
    q: "Is my money safe with AMCS?",
    a: "Yes. AMCS is a registered cooperative with transparent records you can verify at any time, and members share in the cooperative's profits.",
  },
  {
    q: "How does profit sharing work?",
    a: "As the cooperative grows and makes a profit, that profit is shared with members, when AMCS wins, you win.",
  },
];

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill the Form",
    description:
      "Complete the membership form below with your details and preferred savings plan.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Get Verified",
    description:
      "Our team confirms your details and activates your membership account.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Start Saving",
    description:
      "Begin saving towards your goals and become eligible for member benefits.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="How to Join"
        title="Become a member of AMCS"
        description="Joining is simple. Start saving your way, unlock affordable loans, and share in the profits as the cooperative grows."
        image="/images/coins.jpg"
      />

      {/* Benefits */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Membership Benefits"
            title="Why become a member?"
            description="Membership is the gateway to everything AMCS offers."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-brand-green/10 bg-white p-7 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <b.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-green-dark">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Profit sharing highlight */}
      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light px-6 py-14 text-center text-white shadow-card sm:px-12">
              <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
              <div
                className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-gold/25 blur-3xl"
                aria-hidden
              />
              <div className="relative mx-auto max-w-2xl">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-brand-green-dark">
                  <TrendingUp className="h-7 w-7" strokeWidth={2.3} />
                </span>
                <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                  When AMCS wins, <span className="text-brand-gold">YOU win</span>
                </h2>
                <p className="mt-4 text-brand-cream/85">
                  AMCS shares its profits with members. As the cooperative
                  grows and succeeds, that success flows back to you, because
                  every member is a stakeholder in what we build together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers to the things members ask us most."
          />
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`item-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps + Form */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="The Process"
              title="Join in three easy steps"
            />
            <div className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-brand-green/10 bg-white p-6 shadow-soft">
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

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="mb-5 font-heading text-2xl font-bold text-brand-green-dark">
                Membership Application
              </h3>
              <MembershipForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
