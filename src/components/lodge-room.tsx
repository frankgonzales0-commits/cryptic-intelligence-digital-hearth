import type { ReactNode } from "react";

import { SectionContainer } from "@/components/section-container";
import { TextLink } from "@/components/ui/text-link";

type LodgeRoomAction = {
  href: string;
  label: string;
};

type LodgeRoomProps = {
  actions?: readonly LodgeRoomAction[];
  children: ReactNode;
  heading: string;
  motif: "hearth" | "library" | "table" | "compass" | "research" | "trail" | "quiet";
  number: string;
  supportingLine: string;
  tone?: "light" | "dark" | "warm";
};

export function LodgeRoom({
  actions = [],
  children,
  heading,
  motif,
  number,
  supportingLine,
  tone = "light",
}: LodgeRoomProps) {
  const titleId = `lodge-room-${number}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={`lodge-room lodge-room-${tone}`}
    >
      <SectionContainer className="lodge-room-layout py-20 sm:py-28 lg:py-36">
        <div aria-hidden="true" className={`lodge-room-study lodge-motif-${motif}`}>
          <span className="lodge-room-number">{number}</span>
          <span className="lodge-room-plan" />
          <span className="lodge-room-bearing" />
        </div>

        <div className="lodge-room-copy">
          <p className="lodge-field-label">Room study {number}</p>
          <h2 className="lodge-page-heading mt-4" id={titleId}>
            {heading}
          </h2>
          <p className="mt-5 font-display text-2xl leading-9 text-current sm:text-[1.75rem] sm:leading-10">
            {supportingLine}
          </p>
          <div className="lodge-room-body mt-7">{children}</div>

          {actions.length > 0 ? (
            <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {actions.map((action) => (
                <TextLink
                  className={tone === "dark" ? "lodge-link-inverse" : undefined}
                  href={action.href}
                  key={action.href}
                >
                  {action.label}
                </TextLink>
              ))}
            </div>
          ) : null}
        </div>
      </SectionContainer>
    </section>
  );
}
