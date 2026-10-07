type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  className?: string;
};

/**
 * Consistent section heading pair used across the site.
 * 'center' is default for landing sections, 'left' for interior pages.
 */
export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = alignment === "left" ? "text-left" : "text-center mx-auto";

  return (
    <header className={`max-w-2xl ${alignClasses} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
