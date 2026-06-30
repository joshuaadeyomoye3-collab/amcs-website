import type { Metadata } from "next";
// Self-hosted fonts (bundled at build time — no network fetch, so builds never
// fail on a flaky Google Fonts request). The CSS variables they expose are
// defined in globals.css and mapped in tailwind.config.ts.
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "AMCS | Grow Your Money Without Stress",
    template: "%s | AMCS",
  },
  description:
    "AMCS is a Nigerian cooperative and microfinance company helping members save, access low interest loans, and grow their businesses with confidence.",
  keywords: [
    "AMCS",
    "cooperative",
    "microfinance",
    "savings",
    "loans",
    "Nigeria",
    "profit sharing",
  ],
  openGraph: {
    title: "AMCS | Grow Your Money Without Stress",
    description:
      "Save, access low interest loans, and grow your business with a cooperative built on trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
