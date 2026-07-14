import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "The Expedition",
  "Discover the philosophy of the traveler, the Guide, and the connected Cryptic Intelligence ecosystem.",
);

const ecosystemElements = [
  {
    name: "The Traveler",
    description:
      "The person or organization carrying a question, purpose, challenge, or summit.",
    className: "expedition-ecosystem-traveler",
  },
  {
    name: "The Guide",
    description:
      "A trusted companion who listens, asks thoughtful questions, shares wisdom, and walks beside the traveler without choosing the destination for them.",
    className: "expedition-ecosystem-guide",
  },
  {
    name: "The Compass",
    description:
      "The principles, tools, knowledge, and future technology that help illuminate possible paths without commanding the journey.",
    className: "expedition-ecosystem-compass",
  },
  {
    name: "The Hearth",
    description:
      "The place of welcome, reflection, conversation, and community.",
    className: "expedition-ecosystem-hearth",
  },
  {
    name: "The Library",
    description:
      "The living memory of the ecosystem, where wisdom, stories, research, and lessons are preserved and shared.",
    className: "expedition-ecosystem-library",
  },
] as const;

const guidingBehaviors = [
  {
    name: "Listen",
    description: "Understand the traveler before interpreting the trail.",
    marker: "N",
  },
  {
    name: "Illuminate",
    description:
      "Reveal possibilities, questions, risks, and paths that may not yet be visible.",
    marker: "E",
  },
  {
    name: "Equip",
    description:
      "Share tools, knowledge, frameworks, and encouragement that strengthen the traveler.",
    marker: "S",
  },
  {
    name: "Walk Beside",
    description:
      "Remain present without taking ownership of another person’s journey.",
    marker: "W",
  },
] as const;

export default function TheExpeditionPage() {
  return (
    <>
      <section
        aria-labelledby="expedition-arrival-title"
        className="expedition-arrival"
      >
        <div aria-hidden="true" className="expedition-arrival-map">
          <span className="expedition-arrival-sun" />
          <span className="expedition-arrival-bearing" />
          <span className="expedition-arrival-contours" />
          <span className="expedition-arrival-ridge expedition-arrival-ridge-far" />
          <span className="expedition-arrival-ridge expedition-arrival-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[54rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              The Expedition
            </p>
            <h1
              className="mt-5 max-w-[17ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="expedition-arrival-title"
            >
              Every traveler carries a destination worth discovering.
            </h1>

            <div className="mt-9 max-w-[42rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                No two expeditions begin in the same place.
              </p>
              <p className="mt-6">
                Some travelers arrive with a clear summit in view.
              </p>
              <p className="mt-4">
                Others arrive at a crossroads, carrying questions they have not
                yet learned how to ask.
              </p>
              <p className="mt-6 text-text-primary">
                Cryptic Intelligence exists to help people understand where
                they are, consider where they hope to go, and take the next
                faithful step with wisdom, technology, and one another.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="every-traveler-title"
        className="expedition-traveler-story"
      >
        <div aria-hidden="true" className="expedition-traveler-trail" />
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(15rem,0.72fr)_minmax(0,1.28fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="expedition-map-label">Trail note 01</p>
            <h2
              className="expedition-page-heading mt-4 text-midnight"
              id="every-traveler-title"
            >
              Every Traveler Has an Expedition
            </h2>
          </header>

          <div className="max-w-[46rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
            <div className="expedition-short-lines font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              <p>Some expeditions are personal.</p>
              <p>Some are professional.</p>
              <p>Some belong to organizations, families, or communities.</p>
              <p>Some begin with ambition.</p>
              <p>Others begin with uncertainty.</p>
            </div>
            <p className="mt-9 text-text-primary">
              An expedition is not defined by distance traveled or recognition
              earned.
            </p>
            <p className="mt-5">
              It is any meaningful journey toward growth, understanding,
              service, discovery, or transformation.
            </p>
            <p className="expedition-margin-note mt-8">
              Every traveler’s expedition matters, regardless of its size or
              destination.
            </p>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="ecosystem-title"
        className="expedition-ecosystem"
      >
        <SectionContainer className="py-20 sm:py-28 lg:py-36">
          <header className="max-w-[48rem]">
            <p className="expedition-map-label text-compass-gold">
              The connected map
            </p>
            <h2
              className="expedition-page-heading mt-4 text-parchment"
              id="ecosystem-title"
            >
              The Expedition Ecosystem
            </h2>
            <p className="mt-7 max-w-[40rem] text-[1.0625rem] leading-8 text-parchment/75 sm:text-lg">
              Five elements share one purpose: to help the traveler move with
              greater wisdom while keeping their destination their own.
            </p>
          </header>

          <div className="expedition-ecosystem-map mt-16 sm:mt-20 lg:mt-24">
            <div aria-hidden="true" className="expedition-ecosystem-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
            <ul className="expedition-ecosystem-list">
              {ecosystemElements.map((element) => (
                <li
                  className={`expedition-ecosystem-element ${element.className}`}
                  key={element.name}
                >
                  <span aria-hidden="true" className="expedition-map-point" />
                  <h3 className="font-display text-2xl font-semibold text-parchment sm:text-[1.65rem]">
                    {element.name}
                  </h3>
                  <p className="mt-3 leading-7 text-parchment/75">
                    {element.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="individual-summits-title"
        className="expedition-summit"
      >
        <div aria-hidden="true" className="expedition-summit-line" />
        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[58rem]">
            <p className="expedition-map-label text-center">A true bearing</p>
            <h2
              className="expedition-page-heading mx-auto mt-4 max-w-[18ch] text-center text-midnight"
              id="individual-summits-title"
            >
              No Two Expeditions Share the Same Summit
            </h2>

            <blockquote className="expedition-principle mt-12 sm:mt-16">
              <p>A Guide does not choose another traveler’s summit.</p>
              <p className="mt-5">
                A Guide faithfully helps them climb toward the one they have
                chosen.
              </p>
            </blockquote>

            <div className="mx-auto mt-12 max-w-[44rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p>
                Cryptic Intelligence does not define success through a single
                destination.
              </p>
              <p className="mt-5">
                One traveler may seek to build a business.
              </p>
              <p className="mt-5">
                Another may pursue a new career, deepen their understanding,
                strengthen a community, or simply find a clearer path forward.
              </p>
              <p className="mt-7 font-semibold text-evergreen">
                Guidance begins by honoring the traveler’s agency.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="guides-walk-title"
        className="expedition-guides"
      >
        <SectionContainer className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)] lg:gap-24">
            <header>
              <p className="expedition-map-label">Field guide</p>
              <h2
                className="expedition-page-heading mt-4 text-parchment"
                id="guides-walk-title"
              >
                Guides Walk Beside
              </h2>
            </header>

            <div className="max-w-[46rem] text-[1.0625rem] leading-8 text-parchment/75 sm:text-lg sm:leading-8">
              <div className="font-display text-2xl leading-9 text-parchment sm:text-[1.75rem] sm:leading-10">
                <p>Guides do not lead from above.</p>
                <p className="mt-3">They listen before advising.</p>
                <p className="mt-3">
                  They seek understanding before offering direction.
                </p>
              </div>
              <p className="mt-8">
                They use knowledge, experience, technology, and curiosity in
                service of the traveler’s chosen expedition.
              </p>
              <p className="mt-6 text-parchment">
                The purpose of guidance is not dependence.
              </p>
              <p className="mt-5">
                It is to help travelers develop the clarity, confidence,
                wisdom, and capability to continue their journeys faithfully.
              </p>
            </div>
          </div>

          <ul className="expedition-field-guide mt-16 sm:mt-20 lg:mt-24">
            {guidingBehaviors.map((behavior) => (
              <li className="expedition-field-note" key={behavior.name}>
                <span aria-hidden="true" className="expedition-field-marker">
                  {behavior.marker}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-parchment">
                    {behavior.name}
                  </h3>
                  <p className="mt-3 leading-7 text-parchment/70">
                    {behavior.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="ecosystem-strength-title"
        className="expedition-continuation"
      >
        <div aria-hidden="true" className="expedition-returning-path">
          <span />
          <span />
          <span />
        </div>
        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,0.84fr)] lg:gap-24">
            <div>
              <p className="expedition-map-label">The trail continues</p>
              <h2
                className="expedition-page-heading mt-4 text-midnight"
                id="ecosystem-strength-title"
              >
                Every Path Strengthens the Ecosystem
              </h2>
            </div>

            <div className="max-w-[42rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p>
                A traveler may first encounter Cryptic Intelligence through
                the Hearth, the Library, a Guide, a publication, or an
                Expedition.
              </p>
              <p className="mt-6 font-display text-2xl text-evergreen">
                No path exists alone.
              </p>
              <div className="mt-7 space-y-4">
                <p>The Library preserves what has been learned.</p>
                <p>The Compass helps apply it.</p>
                <p>Guides carry it into service.</p>
                <p>
                  Travelers leave footprints that may become maps for those
                  who follow.
                </p>
              </div>
              <p className="mt-8 font-semibold text-text-primary">
                Every expedition has the potential to strengthen the ecosystem
                for the next traveler.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="explore-expeditions-title"
        className="expedition-horizon"
      >
        <div aria-hidden="true" className="expedition-horizon-atmosphere">
          <span className="expedition-horizon-sun" />
          <span className="expedition-horizon-ridge expedition-horizon-ridge-far" />
          <span className="expedition-horizon-ridge expedition-horizon-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[52rem] text-center">
            <p className="expedition-map-label">Choose your bearing</p>
            <h2
              className="expedition-page-heading mx-auto mt-4 max-w-[17ch] text-midnight"
              id="explore-expeditions-title"
            >
              Where Does Your Expedition Lead?
            </h2>
            <div className="mx-auto mt-8 max-w-[40rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-display text-2xl text-evergreen sm:text-[1.75rem]">
                The destination belongs to you.
              </p>
              <p className="mt-6">
                When you are ready, explore the paths through which Cryptic
                Intelligence may walk beside you.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-52"
                href="/expeditions"
              >
                Explore the Expeditions
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/"
              >
                Return to the Hearth
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
