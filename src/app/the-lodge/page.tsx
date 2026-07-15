import { LodgeRoom } from "@/components/lodge-room";
import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "The Lodge",
  "Explore the honest architectural vision for the future physical home of Cryptic Intelligence.",
);

export default function TheLodgePage() {
  return (
    <>
      <section aria-labelledby="lodge-vision-title" className="lodge-vision">
        <div aria-hidden="true" className="lodge-vision-atmosphere">
          <span className="lodge-dawn" />
          <span className="lodge-compass" />
          <span className="lodge-plan-lines" />
          <span className="lodge-ridge lodge-ridge-far" />
          <span className="lodge-ridge lodge-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[57rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              The Lodge
            </p>
            <h1
              className="mt-5 max-w-[16ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="lodge-vision-title"
            >
              The home we are building together.
            </h1>

            <div className="mt-9 max-w-[45rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Every enduring place begins as a vision.
              </p>
              <p className="mt-6">
                The Lodge is the future physical home of Cryptic Intelligence:
                a place where travelers may gather, Guides may learn, ideas may
                be explored, wisdom may be preserved, and no one must navigate
                life&apos;s expeditions alone.
              </p>
              <p className="mt-6 text-text-primary">The building does not yet stand.</p>
              <p className="mt-2 font-display text-xl text-evergreen">
                Its purpose already does.
              </p>
            </div>

            <p className="lodge-status mt-10">
              <span aria-hidden="true" className="lodge-status-mark" />
              <span>
                <strong>The Lodge is a future vision.</strong> No physical
                location is currently open to the public.
              </span>
            </p>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="before-timber-title"
        className="lodge-foundation"
      >
        <div aria-hidden="true" className="lodge-foundation-drawing">
          <span />
          <span />
          <span />
        </div>
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(16rem,0.74fr)_minmax(0,1.26fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="lodge-field-label">Foundation note 01</p>
            <h2 className="lodge-page-heading mt-4" id="before-timber-title">
              Before Timber and Stone
            </h2>
          </header>
          <div className="lodge-foundation-copy max-w-[46rem]">
            <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              The Lodge is already being built.
            </p>
            <p className="mt-7">Not yet through walls, foundations, or mountain roads.</p>
            <div className="lodge-foundation-notes mt-8">
              <p>It is being built through books placed in the Library.</p>
              <p>Through conversations shared around the Digital Hearth.</p>
              <p>
                Through Guides learning to walk beside travelers with wisdom,
                integrity, and compassion.
              </p>
              <p>
                Through every Expedition that leaves behind a lesson for those
                who follow.
              </p>
            </div>
            <p className="mt-8 text-text-primary">
              One day, the philosophy may take physical form.
            </p>
            <p className="mt-3 font-semibold text-evergreen">
              Until then, the work itself lays the first stones.
            </p>
          </div>
        </SectionContainer>
      </section>

      <LodgeRoom
        heading="The Hearth"
        motif="hearth"
        number="02"
        supportingLine="Where every traveler is welcomed."
        tone="warm"
      >
        <p>The Hearth will be the heart of the Lodge.</p>
        <p>A place for gathering, listening, reflection, storytelling, and return.</p>
        <p>
          Travelers may arrive carrying questions, uncertainty, ambition, or
          exhaustion.
        </p>
        <p className="lodge-room-emphasis">The first message should always remain the same:</p>
        <p className="lodge-room-welcome">You are welcome here.</p>
      </LodgeRoom>

      <LodgeRoom
        actions={[{ href: "/library", label: "Explore the Library" }]}
        heading="The Library"
        motif="library"
        number="03"
        supportingLine="Where wisdom is preserved and shared."
      >
        <p>
          The Library will hold the books, field guides, research, stories,
          reflections, and lessons gathered throughout the life of Cryptic Intelligence.
        </p>
        <p>Some volumes will prepare Guides.</p>
        <p>Some will accompany travelers.</p>
        <p>Some will preserve the early paths by which the ecosystem came into being.</p>
        <p className="lodge-room-emphasis">The Library already exists digitally.</p>
        <p>The future Lodge will give those shelves a physical home.</p>
      </LodgeRoom>

      <LodgeRoom
        heading="The Common Room"
        motif="table"
        number="04"
        supportingLine="Where conversation becomes fellowship."
        tone="dark"
      >
        <p>
          The Common Room is imagined as a place without hierarchy or performance.
        </p>
        <p>
          A place where travelers, Guides, visitors, and future companions may sit
          together, exchange stories, ask questions, share meals, and discover that
          meaningful community often begins with ordinary conversation.
        </p>
        <p className="lodge-room-emphasis">No one should need a title to belong at the table.</p>
      </LodgeRoom>

      <LodgeRoom
        heading="The Guide Hall"
        motif="compass"
        number="05"
        supportingLine="Where service becomes a craft."
      >
        <p>The Guide Hall will be a place of preparation, mentorship, study, and practice.</p>
        <p>
          Guides will learn not how to command another traveler&apos;s journey, but
          how to listen carefully, ask better questions, illuminate possible paths,
          and remain faithful to the traveler&apos;s chosen summit.
        </p>
        <p>The Guide Hall represents responsibility rather than rank.</p>
        <p>Its purpose is to prepare people to serve with wisdom.</p>
        <blockquote className="lodge-room-principle">
          <p>A Guide does not choose another traveler&apos;s summit.</p>
          <p>A Guide faithfully helps them climb toward the one they have chosen.</p>
        </blockquote>
      </LodgeRoom>

      <LodgeRoom
        heading="The Research Hall"
        motif="research"
        number="06"
        supportingLine="Where curiosity becomes discovery."
        tone="dark"
      >
        <p>
          The Research Hall will provide space for inquiry, experimentation,
          writing, thoughtful technology, and the exploration of questions whose
          answers are not yet obvious.
        </p>
        <p>Its purpose will not be innovation for spectacle.</p>
        <p className="lodge-room-emphasis">It will be discovery in service of people.</p>
        <p>
          Research should leave travelers, communities, and future Guides better
          equipped to understand the terrain before them.
        </p>
      </LodgeRoom>

      <LodgeRoom
        actions={[
          { href: "/expeditions", label: "Explore the Expeditions" },
          { href: "/begin", label: "Begin Your Expedition" },
        ]}
        heading="The Trailhead"
        motif="trail"
        number="07"
        supportingLine="Where expeditions begin."
        tone="warm"
      >
        <p>The Trailhead will be the threshold between reflection and movement.</p>
        <div className="lodge-short-lines">
          <p>Maps may be unfolded.</p>
          <p>Questions may be named.</p>
          <p>Paths may be considered.</p>
        </div>
        <p>No traveler must arrive with the destination fully understood.</p>
        <p className="lodge-room-emphasis">
          The Trailhead exists to honor the courage required simply to begin.
        </p>
      </LodgeRoom>

      <LodgeRoom
        heading="The Quiet Room"
        motif="quiet"
        number="08"
        supportingLine="Where rest is respected."
      >
        <div className="lodge-short-lines">
          <p>Not every meaningful step moves forward.</p>
          <p>Some steps pause.</p>
          <p>Some turn inward.</p>
          <p>Some simply allow a traveler to breathe.</p>
        </div>
        <p>
          The Quiet Room represents a principle that will shape the Lodge and the
          larger ecosystem:
        </p>
        <div className="lodge-quiet-principles">
          <p>Rest is not failure.</p>
          <p>Rhythm matters.</p>
          <p>Wisdom often arrives when noise is allowed to settle.</p>
        </div>
      </LodgeRoom>

      <section aria-labelledby="lodge-together-title" className="lodge-together">
        <div aria-hidden="true" className="lodge-together-atmosphere">
          <span className="lodge-together-light" />
          <span className="lodge-together-horizon lodge-together-horizon-far" />
          <span className="lodge-together-horizon lodge-together-horizon-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[54rem] text-center">
            <p className="lodge-field-label">The vision continues</p>
            <h2
              className="lodge-page-heading mx-auto mt-4 max-w-[17ch]"
              id="lodge-together-title"
            >
              The Home We Are Building Together
            </h2>
            <div className="mx-auto mt-8 max-w-[43rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Every Lodge begins with a single stone.
              </p>
              <p className="mt-6">
                Today, ours is built from ideas, books, conversations, service,
                curiosity, and shared purpose.
              </p>
              <p className="mt-5">One day, it may also stand among the mountains.</p>
              <div className="mt-7 space-y-3">
                <p>Until then, the Digital Hearth carries its welcome.</p>
                <p>The Library preserves its wisdom.</p>
                <p>The Guides prepare its culture.</p>
              </div>
              <p className="mt-7">
                And every traveler who finds a path forward helps bring the Lodge
                a little closer to the horizon.
              </p>
            </div>

            <blockquote className="lodge-closing-statement mt-12 sm:mt-16">
              <p>The Lodge does not yet stand in timber and stone.</p>
              <p>But its fire has already been lit.</p>
            </blockquote>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink className="w-full sm:w-auto" href="/">
                Return to the Hearth
              </ButtonLink>
              <TextLink className="w-full justify-center px-3 sm:w-auto" href="/library">
                Explore the Library
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
