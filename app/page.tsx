import Link from "next/link";
import {
  PiggyBank,
  Target,
  HandCoins,
  Gift,
  ShieldCheck,
  Building2,
  Users,
  UserPlus,
  Wallet,
  TrendingUp,
  Clock,
  ArrowRight,
  ShoppingBag,
  Briefcase,
  Home,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: PiggyBank,
    title: "Savings Plans",
    description:
      "Daily, weekly, monthly, or spontaneous, save in the rhythm that matches your hustle.",
    href: "/savings",
  },
  {
    icon: Target,
    title: "Target Savings",
    description:
      "Save towards land, house rent, or your children's school fees with a clear goal in sight.",
    href: "/savings",
  },
  {
    icon: HandCoins,
    title: "Low Interest Loans",
    description:
      "Quick, affordable loans to boost your business or meet urgent needs, no unnecessary delays.",
    href: "/loans",
  },
  {
    icon: Gift,
    title: "Member Benefits",
    description:
      "Share in our profits as a member. When AMCS wins, you win too.",
    href: "/join",
  },
];

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Join",
    description:
      "Register as a member in minutes and choose the savings plan that fits your lifestyle.",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Save",
    description:
      "Save little by little, every day or every month. Drop in extra cash anytime you have it.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Benefit",
    description:
      "Access low interest loans and share in the cooperative's profits as it grows.",
  },
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Registered & Secure",
    description:
      "A properly registered cooperative with transparent records you can always verify.",
  },
  {
    icon: Building2,
    title: "Built for Your Hustle",
    description:
      "Flexible plans designed around traders, salary earners, and everyday business owners.",
  },
  {
    icon: Users,
    title: "Profit Sharing",
    description:
      "We share our profits with members, your growth is the whole point of AMCS.",
  },
];

const audience = [
  {
    icon: ShoppingBag,
    title: "Market Traders",
    description:
      "Save little by little every day and build the track record to access loans that boost your stock.",
  },
  {
    icon: Briefcase,
    title: "Salary Earners",
    description:
      "Automate monthly savings, stay disciplined, and plan ahead without the stress.",
  },
  {
    icon: Home,
    title: "Parents & Families",
    description:
      "Use target savings to stay ahead of school fees, house rent, and family goals.",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description:
      "Unlock affordable business loans and grow your enterprise at your own pace.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Everything you need to grow your money"
            description="From flexible savings to fast, affordable loans, AMCS gives you the tools to build a secure financial future."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fast loan approval highlight */}
      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-green/10 bg-white p-8 shadow-soft sm:flex-row sm:gap-8 sm:p-10">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Clock className="h-8 w-8" strokeWidth={2.2} />
              </span>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-dark">
                  Loan approved
                </p>
                <h3 className="mt-1 font-heading text-2xl font-extrabold text-brand-green-dark sm:text-3xl">
                  In 48 hours
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/65">
                  Quick, affordable loans with no unnecessary delays, so you can
                  seize opportunities the moment they come.
                </p>
              </div>
              <Link href="/loans" className="btn-primary shrink-0">
                Explore Loans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Three simple steps to financial freedom"
            description="No complicated paperwork. No stress. Just a clear path to growing your money."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-brand-green/10 bg-brand-cream p-8">
                  <span className="font-heading text-5xl font-extrabold text-brand-green/15">
                    {step.step}
                  </span>
                  <span className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
                    <step.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-brand-green-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Why Choose AMCS"
            title="A cooperative you can actually trust"
            description="We built AMCS to give hardworking Nigerians a safe, transparent place to save and borrow, backed by real community and real profit sharing."
          />
          <div className="grid gap-5">
            {trust.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-brand-green/10 bg-white p-6 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-dark">
                    <item.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-green-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for every kind of hustle"
            description="Whatever your line of work, AMCS has a plan to help you save, borrow, and grow."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-brand-green/10 bg-brand-cream p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <item.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-green-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
