import { PiggyBank, HandCoins, Gift, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: PiggyBank,
    title: "Flexible Savings",
    description: "Daily, weekly, monthly or anytime",
  },
  {
    icon: HandCoins,
    title: "Low Interest Loans",
    description: "Quick and affordable",
  },
  {
    icon: Gift,
    title: "Profit Sharing",
    description: "When AMCS wins, you win",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Secure",
    description: "Transparent and trusted",
  },
];

export default function StatsBar() {
  return (
    <section className="relative -mt-10 sm:-mt-14">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 divide-y divide-brand-green/10 rounded-2xl border border-brand-green/10 bg-white shadow-card sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center gap-2 px-4 py-7 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <pillar.icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span className="font-heading text-base font-bold text-brand-green-dark">
                  {pillar.title}
                </span>
                <span className="text-xs font-medium text-foreground/55">
                  {pillar.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
