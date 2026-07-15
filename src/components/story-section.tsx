import type { ReactNode } from "react";

import { SectionContainer } from "@/components/section-container";
import { TextLink } from "@/components/ui/text-link";

type StorySectionProps = {
  action?: {
    href: string;
    label: string;
  };
  children: ReactNode;
  eyebrow: string;
  heading: string;
  note?: string;
  number: string;
  quotation?: ReactNode;
  tone?: "parchment" | "midnight" | "morning";
};

export function StorySection({
  action,
  children,
  eyebrow,
  heading,
  note,
  number,
  quotation,
  tone = "parchment",
}: StorySectionProps) {
  const headingId = `story-section-${number}-title`;

  return (
    <section
      aria-labelledby={headingId}
      className={`story-chapter story-chapter-${tone}`}
    >
      <div aria-hidden="true" className="story-chapter-marks">
        <span className="story-chapter-rule" />
        <span className="story-chapter-bearing" />
        <span className="story-chapter-number">{number}</span>
      </div>

      <SectionContainer className="story-chapter-layout relative z-10 py-20 sm:py-28 lg:py-36">
        <header>
          <p className="story-field-label">{eyebrow}</p>
          <h2 className="story-page-heading mt-4" id={headingId}>
            {heading}
          </h2>
        </header>

        <div className="story-chapter-copy">
          <div className="story-chapter-body">{children}</div>

          {quotation ? (
            <blockquote className="story-chapter-quotation">
              {quotation}
            </blockquote>
          ) : null}

          {note ? (
            <p className="mt-8 text-sm leading-6 text-[color:var(--story-muted)]">
              {note}
            </p>
          ) : null}

          {action ? (
            <TextLink
              className={tone === "midnight" ? "story-link-inverse" : undefined}
              href={action.href}
            >
              {action.label}
            </TextLink>
          ) : null}
        </div>
      </SectionContainer>
    </section>
  );
}
