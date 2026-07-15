import type { ReactNode } from "react";

import { SectionContainer } from "@/components/section-container";

type GuideStageProps = {
  children: ReactNode;
  marker: "explorer" | "guide" | "steward" | "keeper";
  name: string;
  number: string;
  supportingLine: string;
  tone?: "light" | "dark" | "warm";
};

export function GuideStage({
  children,
  marker,
  name,
  number,
  supportingLine,
  tone = "light",
}: GuideStageProps) {
  const headingId = `guide-stage-${marker}-title`;

  return (
    <section
      aria-labelledby={headingId}
      className={`guide-stage guide-stage-${tone}`}
    >
      <SectionContainer className="guide-stage-layout py-20 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className={`guide-stage-study guide-stage-study-${marker}`}
        >
          <span className="guide-stage-number">{number}</span>
          <span className="guide-stage-orbit" />
          <span className="guide-stage-symbol" />
        </div>

        <div className="guide-stage-copy">
          <p className="guide-field-label">Circle position {number}</p>
          <h2 className="guide-page-heading mt-4" id={headingId}>
            {name}
          </h2>
          <p className="mt-5 font-display text-2xl leading-9 text-current sm:text-[1.75rem] sm:leading-10">
            {supportingLine}
          </p>
          <div className="guide-stage-body mt-7">{children}</div>
        </div>
      </SectionContainer>
    </section>
  );
}
