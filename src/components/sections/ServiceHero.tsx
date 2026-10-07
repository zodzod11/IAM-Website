type ServiceHeroProps = {
  title: string;
  tagline: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Hero section for interior service pages — dark, focused, single CTA.
 */
export function ServiceHero({
  title,
  tagline,
  ctaLabel = "Request a Quote",
  ctaHref = "/contact",
}: ServiceHeroProps) {
  return (
    <section
      className="flex items-center justify-center min-h-[50vh] bg-base px-4"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 65%)",
      }}
    >
      <div className="max-w-4xl text-center">
        <p className="text-sm font-medium text-zinc-500 mb-4 tracking-wider uppercase">
          Impact - Audio &amp; Media
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
          {tagline}
        </p>
        <div className="mt-10">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
