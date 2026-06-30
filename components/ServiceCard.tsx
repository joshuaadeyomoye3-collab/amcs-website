import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
}: ServiceCardProps) {
  return (
    <div className="card group h-full hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-card">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold text-brand-green-dark">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-dark transition-colors hover:text-brand-green"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
