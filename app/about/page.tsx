import type { Metadata } from "next";
import {
  Target,
  Eye,
  ShieldCheck,
  Sprout,
  Users,
  PiggyBank,
  HandCoins,
  Gift,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AMCS, our mission, vision, core values, and the team behind a cooperative built on trust.",
};

const highlights = [
  {
    icon: PiggyBank,
    title: "Flexible Savings",
    description: "Plans built around how you earn and spend.",
  },
  {
    icon: HandCoins,
    title: "Affordable Loans",
    description: "Low interest credit to keep your business moving.",
  },
  {
    icon: Gift,
    title: "Profit Sharing",
    description: "Members share in the cooperative's success.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Secure",
    description: "Transparent records you can always verify.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We safeguard every member's money and keep our word, every single time.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear records and honest communication, no hidden charges, no surprises.",
  },
  {
    icon: Sprout,
    title: "Growth",
    description:
      "We exist to help members and their businesses grow steadily and sustainably.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "When one member rises, we all rise. We grow stronger together.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A cooperative built on trust and community"
        description="AMCS exists to help hardworking Nigerians save with confidence, borrow affordably, and grow their businesses without stress."
        image="/images/boardroom.jpg"
      />

      {/* Who we are */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="More than a coop, a partner in your progress"
              description="AMCS, Achievers Multipurpose Cooperative Society, is a registered cooperative and microfinance company serving members across Nigeria. We bring structure, security, and fairness to everyday saving and borrowing, so you can focus on your hustle while your money works for you. From the market trader saving daily to the salary earner planning for the future, our members are at the heart of everything we do."
            />
            <Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-brand-green/10 bg-white p-6 shadow-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                      <item.icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <p className="mt-4 font-heading text-lg font-bold text-brand-green-dark">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-brand-green/10 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team-lagos.jpg"
                alt="AMCS members collaborating"
                className="h-full max-h-[520px] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-green-dark/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-green/10 bg-brand-cream p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
                <Target className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-brand-green-dark">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                To empower everyday Nigerians with safe, flexible savings and
                affordable loans, helping members grow their money and their
                businesses without stress.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-brand-green/10 bg-brand-cream p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-brand-green-dark">
                <Eye className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-brand-green-dark">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                To be Nigeria's most trusted community driven cooperative, where
                every member shares in the prosperity they help create.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles that guide us"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-brand-green/10 bg-white p-7 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <value.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-brand-green-dark">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join a cooperative that puts members first"
        description="Become part of the AMCS community and grow with people who care."
      />
    </>
  );
}
