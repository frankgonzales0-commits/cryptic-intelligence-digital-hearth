import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "accent" | "quiet";

const baseStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 py-2.5 text-sm font-semibold leading-5 transition-colors duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-midnight text-parchment hover:bg-evergreen active:bg-evergreen",
  secondary:
    "border border-border-strong bg-surface-raised text-text-primary hover:bg-surface-muted",
  accent:
    "bg-compass-gold text-midnight shadow-[var(--shadow-soft)] hover:bg-parchment active:bg-parchment",
  quiet: "text-text-primary hover:bg-surface-muted",
};

function classes(variant: Variant, className?: string) {
  return `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim();
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, type = "button", variant = "primary", ...props },
    ref,
  ) {
    return (
      <button
        className={classes(variant, className)}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={classes(variant, className)} href={href} {...props}>
      {children}
    </Link>
  );
}
