import { PageIntroduction } from "@/components/page-introduction";
import { PublicationShelf } from "@/components/publication-shelf";
import { SectionContainer } from "@/components/section-container";
import { publications } from "@/data/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Library",
  "The Cryptic Intelligence Library is being assembled with care.",
);

export default function LibraryPage() {
  return (
    <section aria-labelledby="library-page-title" className="library-page">
      <SectionContainer className="py-16 sm:py-24 lg:py-32">
        <PageIntroduction
          eyebrow="The Digital Hearth"
          title="Library"
          titleId="library-page-title"
          description="The Library is more than a collection of books. It is the memory of those who came before."
        />

        <div className="library-preparation mt-12 max-w-3xl sm:mt-16">
          <h2 className="font-display text-3xl font-semibold text-midnight sm:text-4xl">
            The Library is being assembled.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
            Approved publications will appear here when they are ready.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <PublicationShelf
            items={publications}
            label="Publications being prepared for the Library"
          />
        </div>
      </SectionContainer>
    </section>
  );
}
