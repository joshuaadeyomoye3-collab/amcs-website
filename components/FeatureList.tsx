import { Check } from "lucide-react";

type FeatureListProps = {
  items: string[];
  className?: string;
};

export default function FeatureList({ items, className }: FeatureListProps) {
  return (
    <ul className={`space-y-3 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed text-foreground/75">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
