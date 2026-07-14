import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionContainer<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: SectionContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className ?? ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}
