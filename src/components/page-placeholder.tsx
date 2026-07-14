import { PageIntroduction } from "@/components/page-introduction";
import { SectionContainer } from "@/components/section-container";
import type { ReactNode } from "react";

type PagePlaceholderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PagePlaceholder({
  title,
  description,
  children,
}: PagePlaceholderProps) {
  return (
    <SectionContainer className="py-16 sm:py-24 lg:py-32">
      <PageIntroduction title={title} description={description} />
      <div className="mt-12 max-w-3xl rounded-[var(--radius-panel)] border border-border-subtle bg-surface-raised p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-midnight">
          Phase One foundation
        </h2>
        <p className="mt-3 leading-7 text-text-muted">
          This route and its shared layout are established. Final page content
          and visual storytelling will be developed in a later approved phase.
        </p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </SectionContainer>
  );
}
