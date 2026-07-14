import type { Metadata } from "next";

import { ExpeditionPath } from "@/components/expedition-path";
import { GuidePortrait } from "@/components/guide-portrait";
import { PublicationShelf } from "@/components/publication-shelf";
import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { publications } from "@/data/publications";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Hearth",
  description: siteConfig.description,
  openGraph: {
    title: `The Hearth | ${siteConfig.name}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <section aria-labelledby="arrival-title" className="arrival">
        <div aria-hidden="true" className="arrival-atmosphere">
          <span className="arrival-glow" />
          <span className="arrival-threshold" />
          <span className="arrival-ridge arrival-ridge-far" />
          <span className="arrival-ridge arrival-ridge-middle" />
          <span className="arrival-ridge arrival-ridge-near" />
          <span className="arrival-mist" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-10 sm:py-14 lg:py-16">
          <div className="arrival-copy w-full max-w-3xl lg:max-w-[46rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-compass-gold sm:text-base">
              {siteConfig.name}
            </p>

            <h1
              className="mt-4 max-w-[18ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-parchment text-shadow-[0_2px_24px_rgb(0_0_0_/_0.25)]"
              id="arrival-title"
            >
              {siteConfig.tagline}
            </h1>

            <p className="mt-7 max-w-[39rem] font-display text-[clamp(1.08rem,2.1vw,1.42rem)] leading-[1.65] text-parchment/90 sm:mt-8">
              <span className="block">Every person is on an expedition.</span>
              <span className="block">Some are climbing mountains.</span>
              <span className="block">Some are crossing oceans.</span>
              <span className="block">
                Some are simply searching for a path forward.
              </span>
              <span className="mt-2 block text-parchment">
                No matter the journey, no one should have to travel alone.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-48"
                href="/begin"
                variant="accent"
              >
                Begin Your Expedition
              </ButtonLink>
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-44"
                href="/library"
                variant="secondary"
              >
                Explore the Library
              </ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="why-we-exist-title"
        className="why-we-exist"
      >
        <div aria-hidden="true" className="why-we-exist-atmosphere">
          <span className="why-we-exist-light" />
          <span className="why-we-exist-horizon" />
        </div>

        <SectionContainer className="relative z-10 grid gap-10 py-20 sm:gap-14 sm:py-28 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20 lg:py-36">
          <header>
            <h2
              className="home-section-heading text-midnight"
              id="why-we-exist-title"
            >
              Why We Exist
            </h2>
          </header>

          <div className="max-w-[44rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
            <p className="font-display text-2xl leading-9 text-midnight sm:text-[1.75rem] sm:leading-10">
              Every person is on an expedition.
            </p>

            <p className="mt-7">Some journeys begin with excitement.</p>

            <p className="mt-4">Others begin with uncertainty.</p>

            <p className="mt-7">Some travelers seek wisdom.</p>

            <p className="mt-4">
              Others simply need someone to walk beside them.
            </p>

            <p className="mt-8 text-text-primary">
              Cryptic Intelligence exists so that no one has to navigate life’s
              expeditions alone.
            </p>

            <p className="mt-6">
              We believe wisdom grows through curiosity, thoughtful guidance,
              technology used with purpose, and a community that chooses to
              help one another.
            </p>

            <p className="mt-6">
              Whether your expedition is personal, professional, or still
              taking shape, our purpose remains the same:
            </p>

            <p className="why-we-exist-closing mt-8 font-display text-2xl leading-9 font-semibold text-evergreen sm:text-[1.75rem] sm:leading-10">
              To help you move forward with clarity, confidence, and hope.
            </p>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="expedition-title" className="expedition">
        <div aria-hidden="true" className="expedition-atmosphere">
          <span className="expedition-contours" />
          <span className="expedition-daylight" />
        </div>

        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <header>
              <h2
                className="home-section-heading text-midnight"
                id="expedition-title"
              >
                The Expedition
              </h2>
            </header>

            <div className="max-w-[46rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-midnight sm:text-[1.75rem] sm:leading-10">
                Every expedition is different.
              </p>

              <p className="mt-6">No two travelers begin in the same place.</p>

              <div className="mt-7 space-y-3">
                <p>Some are building businesses.</p>
                <p>Some are preparing for a new career.</p>
                <p>Some are searching for clarity.</p>
                <p>Some are leading organizations.</p>
                <p>Others are simply trying to discover what comes next.</p>
              </div>

              <p className="mt-8 text-text-primary">
                Wherever the journey begins, an expedition starts with
                understanding where you are today, where you hope to go, and who
                can faithfully help you along the way.
              </p>

              <p className="mt-6">That is why we call them expeditions.</p>

              <div className="expedition-refrain mt-8 font-display text-2xl leading-9 font-semibold text-evergreen sm:text-[1.75rem] sm:leading-10">
                <p>Not projects.</p>
                <p>Not engagements.</p>
                <p className="text-midnight">Expeditions.</p>
              </div>
            </div>
          </div>

          <ol className="expedition-paths mt-16 sm:mt-20 lg:mt-24">
            <ExpeditionPath
              marker="01"
              title="Personal Expedition"
              words={["Grow.", "Reflect.", "Navigate."]}
            />
            <ExpeditionPath
              marker="02"
              title="Professional Expedition"
              words={["Lead.", "Develop.", "Advance."]}
            />
            <ExpeditionPath
              marker="03"
              title="Organizational Expedition"
              words={["Build.", "Strategize.", "Transform."]}
            />
            <ExpeditionPath
              marker="04"
              title="Discovery Expedition"
              words={["Explore.", "Research.", "Imagine."]}
            />
          </ol>

          <div className="mt-16 sm:mt-20">
            <ButtonLink href="/expeditions">Explore the Expeditions</ButtonLink>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="first-guide-title" className="first-guide">
        <div aria-hidden="true" className="first-guide-atmosphere">
          <span className="first-guide-morning-light" />
          <span className="first-guide-hearth-glow" />
          <span className="first-guide-ridge" />
        </div>

        <SectionContainer className="relative z-10 grid items-center gap-12 py-20 sm:gap-16 sm:py-28 lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] lg:gap-24 lg:py-36">
          <GuidePortrait />

          <div className="max-w-[45rem]">
            <h2
              className="home-section-heading home-section-heading-wide text-parchment"
              id="first-guide-title"
            >
              Meet the First Guide
            </h2>

            <div className="mt-8 text-[1.0625rem] leading-8 text-parchment/80 sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-parchment sm:text-[1.75rem] sm:leading-10">
                Every expedition benefits from someone who has walked difficult
                trails before.
              </p>

              <p className="mt-7">
                Cryptic Intelligence was founded by Raul Gonzales, whose own
                expedition has included military service, business banking,
                search and rescue, leadership, and a lifelong curiosity about
                how wisdom helps people navigate uncertainty.
              </p>

              <p className="mt-6">
                His goal was never simply to create another consulting company.
              </p>

              <p className="mt-6">
                It was to prepare a place where people could find thoughtful
                guidance, ask meaningful questions, and begin their next
                expedition with confidence.
              </p>

              <p className="mt-6">
                As First Guide, Raul continues to steward the vision of Cryptic
                Intelligence while helping future Guides prepare to do the
                same.
              </p>
            </div>

            <div className="mt-10">
              <ButtonLink href="/our-story" variant="accent">
                Our Story
              </ButtonLink>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section aria-labelledby="library-title" className="library-home">
        <div aria-hidden="true" className="library-home-atmosphere">
          <span className="library-home-light" />
          <span className="library-home-grain" />
        </div>

        <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <h2
              className="home-section-heading text-midnight"
              id="library-title"
            >
              The Library
            </h2>

            <p className="max-w-[35rem] font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              The Library is more than a collection of books. It is the memory
              of those who came before.
            </p>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <PublicationShelf
              items={publications}
              label="Publications coming to the Library"
            />
          </div>

          <div className="mt-16 sm:mt-20">
            <ButtonLink href="/library">Explore the Library</ButtonLink>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="begin-expedition-title"
        className="begin-expedition"
      >
        <div aria-hidden="true" className="begin-expedition-atmosphere">
          <span className="begin-expedition-sun" />
          <span className="begin-expedition-bearing" />
          <span className="begin-expedition-ridge begin-expedition-ridge-far" />
          <span className="begin-expedition-ridge begin-expedition-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 pt-24 pb-44 sm:pt-32 sm:pb-56 lg:pt-40 lg:pb-64">
          <div className="mx-auto max-w-[48rem] text-center">
            <h2
              className="home-section-heading home-section-heading-final text-midnight"
              id="begin-expedition-title"
            >
              Begin Your Expedition
            </h2>

            <div className="mx-auto mt-8 max-w-[42rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Every expedition begins with a single step.
              </p>

              <p className="mt-7">
                Whether you are exploring a new idea, building a business,
                navigating change, or simply searching for a path forward, your
                journey deserves thoughtful guidance.
              </p>

              <p className="mt-6">
                There is no expectation that you already know the destination.
              </p>

              <p className="mt-4 text-text-primary">
                Only a willingness to begin.
              </p>

              <p className="mt-8 font-display text-2xl leading-9 font-semibold text-midnight sm:text-[1.75rem] sm:leading-10">
                When you are ready, the Hearth will be here.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-48"
                href="/begin"
              >
                Begin Your Expedition
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/library"
              >
                Explore the Library
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
