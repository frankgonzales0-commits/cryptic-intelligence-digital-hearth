import { ExpeditionJournal } from "@/components/expedition-journal";
import { SectionContainer } from "@/components/section-container";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Begin Your Expedition",
  "Enter the Hearth, open a traveler’s journal, and begin your expedition with a thoughtful first conversation.",
);

const pathNames = {
  personal: "Personal",
  professional: "Professional",
  organizational: "Organizational",
  discovery: "Discovery",
} as const;

type BeginPageProps = {
  searchParams: Promise<{ path?: string | string[] }>;
};

export default async function BeginPage({ searchParams }: BeginPageProps) {
  const params = await searchParams;
  const requestedPath = Array.isArray(params.path) ? params.path[0] : params.path;
  const pathName =
    requestedPath && requestedPath in pathNames
      ? pathNames[requestedPath as keyof typeof pathNames]
      : undefined;
  const pathValue =
    pathName && requestedPath ? requestedPath : "Open Expedition";

  return (
    <>
      <section aria-labelledby="begin-arrival-title" className="begin-arrival">
        <div aria-hidden="true" className="begin-arrival-lodge">
          <span className="begin-morning-light" />
          <span className="begin-window-frame" />
          <span className="begin-window-ridge begin-window-ridge-far" />
          <span className="begin-window-ridge begin-window-ridge-near" />
          <span className="begin-compass-mark" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[54rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-compass-gold sm:text-base">
              Begin
            </p>
            <h1
              className="mt-5 max-w-[17ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-parchment"
              id="begin-arrival-title"
            >
              Every expedition begins with a conversation.
            </h1>

            <div className="mt-9 max-w-[40rem] text-[1.0625rem] leading-8 text-parchment/75 sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-parchment sm:text-[1.75rem] sm:leading-10">
                You do not need a finished map.
              </p>
              <p className="mt-5">You do not need every answer.</p>
              <p className="mt-5">
                You do not need to know exactly where the journey will lead.
              </p>
              <p className="mt-7 font-display text-2xl text-compass-gold sm:text-[1.75rem]">
                Simply begin where you are.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="before-we-begin-title"
        className="begin-welcome"
      >
        <div aria-hidden="true" className="begin-welcome-grain" />
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="begin-map-label">A place at the Hearth</p>
            <h2
              className="begin-page-heading mt-4 text-midnight"
              id="before-we-begin-title"
            >
              Before We Begin
            </h2>
          </header>

          <div className="max-w-[45rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
            <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              Every traveler arrives carrying something different.
            </p>
            <div className="mt-7 space-y-3">
              <p>Some arrive with questions.</p>
              <p>Some with ideas.</p>
              <p>Some with uncertainty.</p>
              <p>Some with hope.</p>
            </div>
            <p className="mt-8 text-text-primary">
              You are not expected to arrive prepared.
            </p>
            <p className="mt-4 font-display text-2xl text-evergreen">
              Only willing.
            </p>
            <p className="begin-traveler-reminder mt-9">
              Whatever you carry into the Hearth, your expedition—and your
              summit—remain your own.
            </p>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="traveler-journal-title"
        className="begin-journal-section"
      >
        <div aria-hidden="true" className="begin-journal-table">
          <span className="begin-journal-light" />
          <span className="begin-journal-compass" />
        </div>
        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <header className="max-w-[48rem]">
            <p className="begin-map-label text-compass-gold">First entry</p>
            <h2
              className="begin-page-heading mt-4 text-parchment"
              id="traveler-journal-title"
            >
              The Traveler&apos;s Journal
            </h2>
            <p className="mt-7 max-w-[38rem] text-[1.0625rem] leading-8 text-parchment/70 sm:text-lg">
              There is no perfect way to begin. Write only what feels useful
              for a first conversation.
            </p>
          </header>

          <div className="mt-14 sm:mt-18 lg:mt-20">
            <ExpeditionJournal pathName={pathName} pathValue={pathValue} />
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="guide-promise-title"
        className="begin-guide-promise"
      >
        <div aria-hidden="true" className="begin-hearth-glow" />
        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[58rem]">
            <p className="begin-map-label text-center text-compass-gold">
              The Guide&apos;s Promise
            </p>
            <h2
              className="begin-page-heading mx-auto mt-4 max-w-[15ch] text-center text-parchment"
              id="guide-promise-title"
            >
              The Guide&apos;s Promise
            </h2>

            <blockquote className="begin-promise-statement mt-10 sm:mt-14">
              <p>A Guide does not choose another traveler&apos;s summit.</p>
              <p className="mt-4">
                A Guide faithfully helps them climb toward the one they have
                chosen.
              </p>
            </blockquote>

            <div className="mx-auto mt-10 max-w-[38rem] text-center text-[1.0625rem] leading-8 text-parchment/75 sm:text-lg sm:leading-8">
              <p>We begin by listening.</p>
              <p className="mt-4">
                We seek understanding before offering direction.
              </p>
              <p className="mt-4 text-parchment">
                Every expedition begins with respect.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="what-happens-next-title"
        className="begin-next-steps"
      >
        <div aria-hidden="true" className="begin-next-atmosphere">
          <span className="begin-next-light" />
          <span className="begin-next-ridge begin-next-ridge-far" />
          <span className="begin-next-ridge begin-next-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="begin-map-label">After the first page</p>
            <h2
              className="begin-page-heading mx-auto mt-4 max-w-[15ch] text-midnight"
              id="what-happens-next-title"
            >
              What Happens Next
            </h2>

            <ol className="begin-next-list mx-auto mt-12 max-w-[46rem]">
              <li>We receive your journal.</li>
              <li>A Guide reads it thoughtfully.</li>
              <li>
                If an Expedition appears appropriate, we will reach out.
              </li>
              <li>
                If another path would better serve you, we will say so honestly.
              </li>
            </ol>

            <div className="mt-10 font-display text-xl leading-8 text-evergreen sm:text-2xl">
              <p>No obligation.</p>
              <p>No pressure.</p>
              <p>No automated sales sequence.</p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/expeditions"
              >
                Return to the Trailheads
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
