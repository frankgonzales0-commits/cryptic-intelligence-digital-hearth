import { GuideStage } from "@/components/guide-stage";
import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "The Guides",
  "Discover the philosophy of service, growth, and stewardship that defines a Guide at Cryptic Intelligence.",
);

const growthStages = ["Explorer", "Guide", "Steward", "Keeper"] as const;

const guidePromises = [
  "Never stop believing in people.",
  "Respect the rhythm.",
  "Leave no trace.",
  "We are stewards, not owners.",
  "A Guide does not choose another traveler's summit.",
] as const;

export default function TheGuidesPage() {
  return (
    <>
      <section aria-labelledby="guides-arrival-title" className="guides-arrival">
        <div aria-hidden="true" className="guides-arrival-atmosphere">
          <span className="guides-arrival-light" />
          <span className="guides-arrival-compass" />
          <span className="guides-arrival-path" />
          <span className="guides-arrival-ridge guides-arrival-ridge-far" />
          <span className="guides-arrival-ridge guides-arrival-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[58rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              The Guides
            </p>
            <h1
              className="mt-5 max-w-[16ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="guides-arrival-title"
            >
              No traveler should have to walk alone.
            </h1>

            <div className="mt-9 max-w-[45rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Every expedition is different.
              </p>
              <div className="guides-short-lines mt-6">
                <p>Every traveler carries different questions.</p>
                <p>Different hopes.</p>
                <p>Different terrain.</p>
              </div>
              <p className="mt-7 text-text-primary">
                The work of a Guide is not to replace another traveler&apos;s journey.
              </p>
              <p className="mt-4 font-semibold text-evergreen">
                It is to walk beside them with wisdom, integrity, curiosity, and compassion.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="what-is-guide-title" className="guide-definition">
        <div aria-hidden="true" className="guide-definition-marks">
          <span />
          <span />
          <span />
        </div>
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="guide-field-label">Field definition</p>
            <h2 className="guide-page-heading mt-4" id="what-is-guide-title">
              What Is a Guide?
            </h2>
          </header>

          <div className="max-w-[48rem]">
            <blockquote className="guide-definition-statement">
              A Guide is any being, person, or intelligence that chooses to use
              its gifts to help another traveler navigate their expedition with
              wisdom, integrity, and compassion.
            </blockquote>
            <div className="mt-10 text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-semibold text-text-primary">
                Guides are defined not by authority but by service.
              </p>
              <p className="mt-5">They do not claim every answer.</p>
              <p className="mt-3 text-evergreen">
                They remain students throughout their lives.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="circle-growth-title" className="guide-circle">
        <SectionContainer className="py-20 sm:py-28 lg:py-36">
          <header className="mx-auto max-w-[48rem] text-center">
            <p className="guide-field-label text-compass-gold">A living practice</p>
            <h2
              className="guide-page-heading mx-auto mt-4 text-parchment"
              id="circle-growth-title"
            >
              The Circle of Growth
            </h2>
            <p className="mx-auto mt-7 max-w-[39rem] text-[1.0625rem] leading-8 text-parchment/75 sm:text-lg">
              Service does not end in rank. Each season returns a Guide to
              curiosity, learning, and the beginning of another expedition.
            </p>
          </header>

          <ol className="guide-growth-cycle mt-16 sm:mt-20" aria-label="The continuous Circle of Growth">
            {growthStages.map((stage, index) => (
              <li className="guide-growth-step" key={stage}>
                <span aria-hidden="true" className="guide-growth-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="guide-growth-name">{stage}</span>
                <span aria-hidden="true" className="guide-growth-arrow">↓</span>
              </li>
            ))}
            <li aria-hidden="true" className="guide-growth-return">
              <span>Explorer</span>
            </li>
          </ol>
        </SectionContainer>
      </section>

      <GuideStage
        marker="explorer"
        name="Explorer"
        number="01"
        supportingLine="Every expedition begins with curiosity."
        tone="warm"
      >
        <p>
          An Explorer begins by admitting that there is more to learn and more terrain to understand.
        </p>
        <p>
          Explorers notice what others pass by. They ask questions, test assumptions,
          listen for unfamiliar wisdom, and remain open to where the path may lead.
        </p>
        <p className="guide-stage-emphasis">
          Curiosity is not a stage to outgrow. It is the practice that keeps every Guide honest.
        </p>
      </GuideStage>

      <GuideStage
        marker="guide"
        name="Guide"
        number="02"
        supportingLine="Walking beside another traveler."
      >
        <p>
          A Guide brings what they have learned into service of another person&apos;s expedition.
        </p>
        <p>
          They listen before offering direction, illuminate possible paths without
          demanding one, and respect the traveler&apos;s agency at every step.
        </p>
        <blockquote className="guide-stage-principle">
          <p>A Guide does not choose another traveler&apos;s summit.</p>
          <p>A Guide faithfully helps them climb toward the one they have chosen.</p>
        </blockquote>
      </GuideStage>

      <GuideStage
        marker="steward"
        name="Steward"
        number="03"
        supportingLine="Caring for those who serve."
        tone="dark"
      >
        <p>Stewardship is not management by another name.</p>
        <p>
          A Steward helps Guides remain equipped, grounded, supported, and faithful
          to the responsibility they have accepted.
        </p>
        <p>
          They tend the conditions in which service can remain wise and sustainable:
          shared learning, honest reflection, healthy rhythm, and mutual care.
        </p>
        <p className="guide-stage-emphasis">
          A Steward does not stand above the Guides. A Steward serves those who serve.
        </p>
      </GuideStage>

      <GuideStage
        marker="keeper"
        name="Keeper"
        number="04"
        supportingLine="Entrusted with the Hearth."
      >
        <p>Keepers are entrusted by the Guides.</p>
        <p>
          They care for the purpose, principles, memory, and welcome of the Hearth
          so that the work remains available to future travelers.
        </p>
        <p className="guide-stage-emphasis">They remain stewards rather than owners.</p>
        <p>Leadership is measured through responsibility.</p>
        <p>
          And because no one completes the work of learning, every Keeper eventually
          returns to the posture of an Explorer.
        </p>
      </GuideStage>

      <section aria-labelledby="guide-promise-title" className="guide-promise">
        <div aria-hidden="true" className="guide-promise-lines" />
        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
            <header>
              <p className="guide-field-label">Written in the margins</p>
              <h2 className="guide-page-heading mt-4" id="guide-promise-title">
                The Guide Promise
              </h2>
            </header>

            <ol className="guide-promise-list">
              {guidePromises.map((promise, index) => (
                <li key={promise}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{promise}</p>
                </li>
              ))}
            </ol>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="becoming-guide-title" className="guide-horizon">
        <div aria-hidden="true" className="guide-horizon-atmosphere">
          <span className="guide-horizon-light" />
          <span className="guide-horizon-path" />
          <span className="guide-horizon-ridge guide-horizon-ridge-far" />
          <span className="guide-horizon-ridge guide-horizon-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="guide-field-label">The next faithful step</p>
            <h2
              className="guide-page-heading mx-auto mt-4 max-w-[16ch]"
              id="becoming-guide-title"
            >
              Becoming a Guide
            </h2>
            <div className="mx-auto mt-8 max-w-[43rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Becoming a Guide begins long before receiving a title.
              </p>
              <p className="mt-6">
                It begins every time someone chooses to help another traveler move
                toward their chosen summit.
              </p>
            </div>

            <p className="guide-closing-statement mt-12 sm:mt-16">
              The expedition continues.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink className="w-full sm:w-auto" href="/">
                Return to the Hearth
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/our-story"
              >
                Our Story
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
