import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type CTABannerProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTABanner({
  title = "Ready to grow your money? Join AMCS today.",
  description = "Become a member, start saving your way, and share in the profits when AMCS wins.",
  primaryHref = "/join",
  primaryLabel = "Join Now",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to Us",
}: CTABannerProps) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light px-6 py-14 text-center shadow-card sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 bg-[url('/brand-motif.svg')] bg-cover bg-center"
              aria-hidden
            />
            <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-gold/25 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-cream/85">
                {description}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href={primaryHref} className="btn-gold">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="btn border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
