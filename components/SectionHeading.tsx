import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-lg text-brand-green-dark">{title}</h2>
        {description && (
          <p className="text-base leading-relaxed text-foreground/65">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
