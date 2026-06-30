import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

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
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
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
