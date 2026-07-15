import { SectionContainer } from "@/components/section-container";
import { StorySection } from "@/components/story-section";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Our Story",
  "Discover why Cryptic Intelligence exists and the question that began its expedition.",
);

export default function OurStoryPage() {
  return (
    <>
      <section aria-labelledby="our-story-title" className="story-arrival">
        <div aria-hidden="true" className="story-arrival-atmosphere">
          <span className="story-morning-light" />
          <span className="story-compass" />
          <span className="story-journal-lines" />
          <span className="story-ridge story-ridge-far" />
          <span className="story-ridge story-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[58rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              Our Story
            </p>
            <h1
              className="mt-5 max-w-[17ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="our-story-title"
            >
              Every expedition begins with a question.
            </h1>

            <div className="mt-9 max-w-[46rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Cryptic Intelligence did not begin with a business plan.
              </p>
              <p className="mt-5 text-text-primary">It began with a question.</p>
              <p className="story-opening-question mt-7">
                What if there were a place where people could find guidance
                without judgment, wisdom without arrogance, technology without
                losing humanity, and community without needing to earn belonging?
              </p>
              <p className="mt-7 font-semibold text-evergreen">
                That question became the first step of the expedition.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <StorySection
        eyebrow="Field note 01"
        heading="The Question"
        number="01"
        quotation={
          <>
            <p>Every person is on an expedition.</p>
            <p>Some are climbing mountains.</p>
            <p>Some are crossing oceans.</p>
            <p>Some are simply searching for a path forward.</p>
            <p>No matter the journey, no one should have to travel alone.</p>
            <p className="story-quotation-answer">That is why the Guides exist.</p>
          </>
        }
        tone="morning"
      >
        <p>Every person eventually reaches unfamiliar ground.</p>
        <div className="story-short-lines">
          <p>Some journeys are professional.</p>
          <p>Some are deeply personal.</p>
          <p>Some belong to organizations.</p>
          <p>Others begin with simple curiosity.</p>
        </div>
        <p>Too often, people are expected to navigate those moments alone.</p>
        <p className="story-copy-emphasis">
          Cryptic Intelligence was created from the belief that they should not have to.
        </p>
      </StorySection>

      <StorySection
        eyebrow="Field note 02"
        heading="A Different Kind of Organization"
        number="02"
        tone="midnight"
      >
        <p>Many organizations measure success only by growth.</p>
        <p className="story-copy-emphasis">
          Cryptic Intelligence hopes to measure success differently.
        </p>
        <div className="story-measures" aria-label="Different measures of success">
          <p>By the lives strengthened.</p>
          <p>The questions explored.</p>
          <p>The wisdom preserved.</p>
          <p>The Guides prepared.</p>
          <p>The travelers encouraged.</p>
          <p>The communities left healthier than they were found.</p>
        </div>
        <p>
          It is intended to become a learning ecosystem: a connected place where
          travelers, Guides, books, research, technology, and community strengthen
          one another over time.
        </p>
        <p>
          Not simply another consulting company, but an organization that learns
          from every expedition and makes that wisdom useful to those who follow.
        </p>
      </StorySection>

      <StorySection
        eyebrow="Field note 03"
        heading="Why Guides?"
        note="The Guides page is being prepared."
        number="03"
        quotation={
          <>
            <p>A Guide does not choose another traveler&apos;s summit.</p>
            <p>A Guide faithfully helps them climb toward the one they have chosen.</p>
          </>
        }
      >
        <p>Titles matter because they shape expectations.</p>
        <div className="story-short-lines">
          <p>A Guide does not command.</p>
          <p>A Guide does not walk ahead demanding to be followed.</p>
          <p>A Guide walks beside another traveler.</p>
        </div>
        <div className="story-short-lines story-guide-actions">
          <p>Listening carefully.</p>
          <p>Offering wisdom honestly.</p>
          <p>Respecting each person&apos;s chosen destination.</p>
        </div>
      </StorySection>

      <StorySection
        eyebrow="Field note 04"
        heading="Why the Hearth?"
        number="04"
        tone="morning"
      >
        <p>Every expedition eventually needs a place to return.</p>
        <div className="story-hearth-principles">
          <p>Welcome before instruction.</p>
          <p>Belonging before achievement.</p>
          <p>Conversation before advice.</p>
        </div>
        <p>
          The Hearth reminds us that wisdom grows most naturally where people
          feel safe enough to ask honest questions.
        </p>
      </StorySection>

      <StorySection
        action={{ href: "/library", label: "Explore the Library" }}
        eyebrow="Field note 05"
        heading="Why the Library?"
        number="05"
        tone="midnight"
      >
        <p>Knowledge is most valuable when it can outlive its creators.</p>
        <p>
          The Library exists so discoveries, questions, principles, field notes,
          and stories remain available to every traveler who follows.
        </p>
        <div className="story-books-companions">
          <p>Books become companions.</p>
          <p>Not monuments.</p>
        </div>
      </StorySection>

      <section aria-labelledby="story-horizon-title" className="story-horizon">
        <div aria-hidden="true" className="story-horizon-atmosphere">
          <span className="story-horizon-light" />
          <span className="story-path" />
          <span className="story-horizon-ridge story-horizon-ridge-far" />
          <span className="story-horizon-ridge story-horizon-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="story-field-label">The trail ahead</p>
            <h2
              className="story-page-heading mx-auto mt-4 max-w-[16ch]"
              id="story-horizon-title"
            >
              Looking Toward the Horizon
            </h2>
            <div className="mx-auto mt-8 max-w-[43rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                The expedition has only begun.
              </p>
              <div className="mt-7 space-y-3">
                <p>The books will continue to grow.</p>
                <p>The Guides will continue to learn.</p>
                <p>The Library will continue to expand.</p>
              </div>
              <p className="mt-7">One day the Lodge may stand among the mountains.</p>
              <p className="mt-5">
                Until then, every conversation, every question, every page, and
                every traveler helps build the path forward.
              </p>
            </div>

            <p className="story-closing-statement mt-12 sm:mt-16">
              The expedition continues.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink className="w-full sm:w-auto" href="/">
                Return to the Hearth
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/the-lodge"
              >
                Visit the Lodge
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
