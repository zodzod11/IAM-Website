type CardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  className?: string;
};

/**
 * IAM Card — used in service grids, portfolio, feature sections.
 * On dark backgrounds it lifts with a subtle border; on light bg
 * it uses a subtle shadow.
 */
export function Card({
  title,
  description,
  href,
  icon,
  className = "",
}: CardProps) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};

  return (
    <Tag
      {...linkProps}
      className={`surface-card rounded p-6 md:p-8 transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="flex flex-col gap-4">
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded bg-accent/10 text-accent">
            <span className="text-lg">{icon}</span>
          </div>
        )}
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h3>
        <p className="text-base text-zinc-600 leading-relaxed">
          {description}
        </p>
        {href && (
          <span className="mt-2 text-sm font-medium text-accent">
            Learn more →
          </span>
        )}
      </div>
    </Tag>
  );
}
