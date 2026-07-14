import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export function TextLink({
  children,
  className,
  href,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center gap-1 font-semibold text-evergreen underline decoration-compass-gold decoration-2 underline-offset-4 transition-colors duration-[var(--motion-duration-fast)] hover:text-midnight ${className ?? ""}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
