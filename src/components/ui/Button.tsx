type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/**
 * IAM Button — renders as <a> (for links) or <button> (for actions).
 *
 * Variants:
 *   primary   → solid accent bg, white text (default)
 *   secondary → outlined, accent border + text
 *   ghost     → transparent, light text, for dark sections
 *
 * Sizes:
 *   sm → text-sm, smaller padding
 *   md → text-base, default
 *   lg → text-lg, larger
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseClasses = [
    "inline-flex items-center justify-center gap-2 font-medium leading-none",
    "transition-all duration-200",
    // Size
    size === "sm" ? "px-4 py-2 text-sm rounded" :
    size === "lg" ? "px-8 py-4 text-lg rounded" :
    "px-6 py-3 text-base rounded",
    // Variant
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5"
      : variant === "secondary"
        ? "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white hover:border-accent"
        : "border border-white/20 text-white bg-transparent hover:bg-white/10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses}>
      {children}
    </button>
  );
}
