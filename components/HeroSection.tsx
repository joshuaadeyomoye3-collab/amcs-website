"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  CalendarDays,
  CalendarRange,
  CalendarClock,
  Coins,
  Check,
} from "lucide-react";

const savingsPlans = [
  { icon: CalendarDays, label: "Daily Savings" },
  { icon: CalendarRange, label: "Weekly Savings" },
  { icon: CalendarClock, label: "Monthly Savings" },
  { icon: Coins, label: "Spontaneous Savings" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered green gradient background */}
      <div className="absolute inset-0 -z-10 bg-brand-green-dark" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url(/images/team-lagos.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-dark/85 via-brand-green/75 to-brand-green-light/65" />
      <div
        className="absolute inset-0 -z-10 bg-[url('/brand-motif.svg')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-dots-light opacity-50" aria-hidden />
      <div
        className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-24 -z-10 h-80 w-80 rounded-full bg-brand-green-light/40 blur-3xl"
        aria-hidden
      />

      <div className="container-page grid items-center gap-12 pb-28 pt-16 sm:pt-24 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-7">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Registered Cooperative &amp; Microfinance
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Do you need help to grow your business?{" "}
            <span className="text-brand-gold">AMCS</span> is here for you!
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-cream/85"
          >
            Grow your money without stress while you focus on your daily hustle.
            Save your way, borrow at low interest, and share in our profits as a
            member.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/join" className="btn-gold">
              Join Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/savings"
              className="btn border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-cream/80"
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              Secure &amp; transparent
            </li>
            <li className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-brand-gold" />
              Profit sharing
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-gold" />
              Community first
            </li>
          </motion.ul>
        </div>

        {/* Decorative savings card stack */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-sm"
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-card backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/70">
                  Savings Plans
                </span>
                <span className="rounded-full bg-brand-gold px-2.5 py-1 text-[11px] font-bold text-brand-green-dark">
                  Flexible
                </span>
              </div>
              <p className="mt-4 font-heading text-2xl font-extrabold leading-snug text-white">
                Save your way,
                <br />
                at your own pace
              </p>
              <p className="mt-1 text-xs text-brand-cream/65">
                Choose the rhythm that fits your hustle
              </p>

              <div className="mt-6 space-y-2.5">
                {savingsPlans.map((plan) => (
                  <div
                    key={plan.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-gold">
                      <plan.icon className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-sm font-medium text-white">
                      {plan.label}
                    </span>
                    <Check className="ml-auto h-4 w-4 text-brand-gold" strokeWidth={3} />
                  </div>
                ))}
              </div>

              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-brand-cream/70">
                Plus low interest loans &amp; member profit sharing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft fade into next section */}
      <div className="h-16 bg-gradient-to-b from-transparent to-brand-cream" />
    </section>
  );
}
