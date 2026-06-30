type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* base green */}
      <div className="absolute inset-0 -z-10 bg-brand-green-dark" />
      {/* themed photo, blended into the green */}
      {image && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      {/* green gradient wash for depth + contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-green-dark/85 via-brand-green/75 to-brand-green-light/65" />
      <div
        className="absolute inset-0 -z-10 bg-[url('/brand-motif.svg')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-dots-light opacity-40" aria-hidden />
      <div
        className="absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"
        aria-hidden
      />
      <div className="container-page py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-cream/85">
          {description}
        </p>
      </div>
      <div className="h-12 bg-gradient-to-b from-transparent to-brand-cream" />
    </section>
  );
}
