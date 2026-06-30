import Link from "next/link";
import { Sprout, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { navLinks, company } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-green-dark text-brand-cream">
      <div className="absolute inset-0 bg-dots-light opacity-40" aria-hidden />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gold text-brand-green-dark">
              <Sprout className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-heading text-lg font-extrabold tracking-tight">
              AMCS<span className="text-brand-gold">.</span>
            </span>
          </Link>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
            {company.fullName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-cream/70">
            A cooperative built on trust, helping members save, borrow, and
            grow their businesses without stress.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-cream/75 transition-colors hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/75">
            <li>
              <Link href="/savings" className="transition-colors hover:text-brand-gold">
                Savings Plans
              </Link>
            </li>
            <li>
              <Link href="/savings" className="transition-colors hover:text-brand-gold">
                Target Savings
              </Link>
            </li>
            <li>
              <Link href="/loans" className="transition-colors hover:text-brand-gold">
                Low Interest Loans
              </Link>
            </li>
            <li>
              <Link href="/join" className="transition-colors hover:text-brand-gold">
                Member Benefits
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/75">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{company.phones.join(", ")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-gold"
              >
                WhatsApp: {company.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{company.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-brand-cream/60 sm:flex-row sm:text-left">
          <p>© 2025 AMCS. All rights reserved.</p>
          <p className="font-heading font-semibold text-brand-gold">
            Together, we achieve more.
          </p>
        </div>
      </div>
    </footer>
  );
}
