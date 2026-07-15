import { FounderVolume } from "@/components/founder-volume";
import { EmptyShelfPosition } from "@/components/publication-shelf";
import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { publications } from "@/data/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Library",
  "Explore the Founder Library, the first living public collection of Cryptic Intelligence.",
);

const volumeLabels = ["Volume One", "Volume Two", "Volume Three"] as const;

export default function LibraryPage() {
  return (
    <>
      <section aria-labelledby="library-arrival-title" className="library-arrival">
        <div aria-hidden="true" className="library-arrival-atmosphere">
          <span className="library-arrival-light" />
          <span className="library-arrival-shelves" />
          <span className="library-arrival-ridge library-arrival-ridge-far" />
          <span className="library-arrival-ridge library-arrival-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[57rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              The Library
            </p>
            <h1
              className="mt-5 max-w-[18ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="library-arrival-title"
            >
              Every expedition leaves behind wisdom worth preserving.
            </h1>
            <div className="mt-9 max-w-[43rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                The Library is the living memory of Cryptic Intelligence.
              </p>
              <p className="mt-6">
                Its shelves preserve the books, journals, reflections,
                discoveries, and principles gathered throughout the expedition.
              </p>
              <p className="mt-6 text-text-primary">
                The collection opens with three published volumes.
              </p>
              <p className="mt-4 font-display text-xl text-evergreen">
                Many shelves remain waiting.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="founder-library-title"
        className="founder-library-introduction"
      >
        <div aria-hidden="true" className="founder-library-catalog-line" />
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="library-map-label">Accession begins</p>
            <h2
              className="library-page-heading mt-4 text-midnight"
              id="founder-library-title"
            >
              Founder Library Collection
            </h2>
          </header>
          <div className="founder-library-note max-w-[45rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
            <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              The Founder Library preserves the earliest published works of
              Cryptic Intelligence.
            </p>
            <p className="mt-7">
              These volumes help future travelers understand both where the
              expedition began and where it continues to lead.
            </p>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="first-volumes-title"
        className="founder-library-volumes"
      >
        <SectionContainer className="py-20 sm:py-28 lg:py-36">
          <header className="max-w-[47rem]">
            <p className="library-map-label text-compass-gold">
              Founder Library · CI-FL
            </p>
            <h2
              className="library-page-heading mt-4 text-parchment"
              id="first-volumes-title"
            >
              The First Three Volumes
            </h2>
          </header>

          <div className="founder-volume-list mt-16 sm:mt-20 lg:mt-24">
            {publications.map((publication, index) => (
              <FounderVolume
                key={publication.id}
                publication={publication}
                volumeLabel={volumeLabels[index]}
              />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="future-shelves-title"
        className="library-future-shelves"
      >
        <SectionContainer className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
            <header>
              <p className="library-map-label">The collection continues</p>
              <h2
                className="library-page-heading mt-4 text-midnight"
                id="future-shelves-title"
              >
                Shelves Awaiting Future Works
              </h2>
            </header>
            <p className="max-w-[40rem] font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              A living library grows as new wisdom is gathered, preserved, and
              made ready to share.
            </p>
          </div>

          <ul
            aria-label="Empty positions awaiting future Founder Library volumes"
            className="library-empty-shelf mt-16 sm:mt-20"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <li key={`future-volume-${index + 1}`}>
                <EmptyShelfPosition />
              </li>
            ))}
          </ul>
        </SectionContainer>
      </section>

      <section aria-labelledby="library-return-title" className="library-return">
        <div aria-hidden="true" className="library-return-atmosphere">
          <span className="library-return-light" />
          <span className="library-return-ridge library-return-ridge-far" />
          <span className="library-return-ridge library-return-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[50rem] text-center">
            <p className="library-map-label">Carry the wisdom forward</p>
            <h2
              className="library-page-heading mx-auto mt-4 max-w-[15ch] text-midnight"
              id="library-return-title"
            >
              Return to the Hearth
            </h2>
            <p className="mx-auto mt-8 max-w-[38rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              The volumes will remain here whenever your expedition brings you
              back to the Library.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink className="w-full sm:w-auto" href="/">
                Return to the Hearth
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/the-expedition"
              >
                Continue Exploring
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
