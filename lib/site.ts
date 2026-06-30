export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Savings", href: "/savings" },
  { label: "Loans", href: "/loans" },
  { label: "About", href: "/about" },
  { label: "How to Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export const company = {
  name: "AMCS",
  fullName: "Achievers Multipurpose Cooperative Society",
  tagline: "Do you need help to grow your business? AMCS is here for you!",
  subTagline:
    "Grow your money without stress while you focus on your daily hustle.",
  motto: "Together, we achieve more.",
  phones: ["09071013032", "08135387709"],
  whatsapp: "09071013032",
  whatsappLink: "https://wa.me/2349071013032",
  email: "amcs@gmail.com",
  address: "Shop 9 & 10, Block A1, GF, Kukwaba Market, Kubwa, Abuja",
  mapQuery: "Kukwaba Market, Kubwa, Abuja",
};
