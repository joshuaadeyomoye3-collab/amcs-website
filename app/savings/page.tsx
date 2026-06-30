import type { Metadata } from "next";
import {
  CalendarDays,
  CalendarRange,
  CalendarClock,
  Coins,
  Landmark,
  Home,
  GraduationCap,
  Users,
  PartyPopper,
  Lock,
  LineChart,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureList from "@/components/FeatureList";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Savings Plans",
  description:
    "Daily, weekly, monthly, spontaneous, and target savings, plus thrifts, festive combo, fixed deposits, and investment savings designed around your hustle.",
};

const plans = [
  {
    icon: CalendarDays,
    title: "Daily Savings",
    description: "Save little by little, every day.",
    detail:
      "Perfect for market traders and daily earners. Build a strong balance one small deposit at a time.",
  },
  {
    icon: CalendarRange,
    title: "Weekly Savings",
    description: "Perfect for traders & salary earners.",
    detail:
      "Set aside a fixed amount each week and watch consistency turn into real capital.",
  },
  {
    icon: CalendarClock,
    title: "Monthly Savings",
    description: "Build steadily with discipline.",
    detail:
      "Ideal for salary earners who want a structured, effortless way to grow their savings.",
  },
  {
    icon: Coins,
    title: "Spontaneous Savings",
    description: "Drop in extra cash anytime you have it.",
    detail:
      "Had a good day at work? Top up whenever you like, every naira counts towards your goals.",
  },
];

const products = [
  {
    icon: Users,
    title: "Thrifts & Savings",
    description:
      "Regular contributions pooled with other members for collective growth.",
  },
  {
    icon: PartyPopper,
    title: "Festive Combo",
    description:
      "A seasonal plan, save towards Christmas, Eid, or any festive period and withdraw when the season comes.",
  },
  {
    icon: Lock,
    title: "Fixed Deposits",
    description:
      "Lock in your money for a fixed period and earn higher guaranteed returns.",
  },
  {
    icon: LineChart,
    title: "Investment Savings",
    description:
      "Grow your money through structured investment vehicles managed by the cooperative.",
  },
];

const targets = [
  {
    icon: Landmark,
    title: "Plan for What to Buy",
    description:
      "Save towards land, a car, or property and turn a long term dream into a clear, achievable plan.",
    image: "/images/buy-car.jpg",
  },
  {
    icon: Home,
    title: "Saving for House Rent",
    description:
      "Avoid the end of year rent panic. Spread your rent across the year, stress free.",
    image: "/images/house.jpg",
  },
  {
    icon: GraduationCap,
    title: "Children's School Fees",
    description:
      "Keep your children in school without last minute borrowing. Save ahead, term by term.",
    image: "/images/school.jpg",
  },
];

export default function SavingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Savings Plans"
        title="Save your way, at your own pace"
        description="Whether you earn daily, weekly, or monthly, AMCS has a savings plan that fits your hustle and your goals."
        image="/images/money-counting.jpg"
      />

      {/* Savings plan cards */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Flexible Plans"
            title="Choose how you want to save"
            description="Four simple plans, one shared goal, helping you grow your money without stress."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {plans.map((plan, i) => (
              <Reveal key={plan.title} delay={i * 0.08}>
                <div className="card group h-full hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                      <plan.icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-brand-green-dark">
                        {plan.title}
                      </h3>
                      <p className="text-sm font-medium text-brand-gold-dark">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                    {plan.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Savings & investment products */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="More Ways to Grow"
            title="Savings &amp; investment products"
            description="Beyond everyday savings, AMCS offers products that help your money work harder for you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.title} delay={i * 0.08}>
                <div className="card group h-full hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <product.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-green-dark">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {product.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target savings */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Target Savings"
            title="Save towards what truly matters"
            description="Set a goal, lock in a plan, and reach the milestones that move your family forward."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {targets.map((target, i) => (
              <Reveal key={target.title} delay={i * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-brand-green/10 bg-brand-cream shadow-soft transition-shadow hover:shadow-card">
                  <div className="relative h-44 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={target.image}
                      alt={target.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-green shadow-soft backdrop-blur">
                      <target.icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-lg font-bold text-brand-green-dark">
                      {target.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                      {target.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-brand-green/10 bg-brand-cream p-8">
              <h3 className="font-heading text-lg font-bold text-brand-green-dark">
                Why members love saving with AMCS
              </h3>
              <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                <FeatureList
                  items={[
                    "No stress, save in the rhythm that suits you",
                    "Transparent records you can always check",
                  ]}
                />
                <FeatureList
                  items={[
                    "Saving history that builds loan eligibility",
                    "Profit sharing as a registered member",
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Start saving towards your goals today"
        description="Join AMCS and pick the savings plan that fits your hustle."
        secondaryHref="/loans"
        secondaryLabel="Explore Loans"
      />
    </>
  );
}
