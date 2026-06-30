"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-green/10 bg-brand-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-brand-cream/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Sprout className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight text-brand-green-dark">
            AMCS<span className="text-brand-gold">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-brand-green"
                    : "text-foreground/70 hover:text-brand-green"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-gold" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/join" className="btn-gold">
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/15 text-brand-green lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-green/10 bg-brand-cream lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-brand-green/10 text-brand-green"
                      : "text-foreground/80 hover:bg-brand-green/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link href="/join" className="btn-gold w-full">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
