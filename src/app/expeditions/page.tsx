import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Expeditions",
  "Explore four expedition paths for personal, professional, organizational, and discovery journeys.",
);

const paths = [
  {
    id: "personal-expedition",
    marker: "01",
    bearing: "An inward trail",
    title: "Personal Expedition",
    words: ["Grow.", "Reflect.", "Navigate."],
    purpose:
      "For travelers seeking greater clarity, confidence, direction, or understanding in their personal lives.",
    questions: [
      "What matters most to me now?",
      "What kind of life am I trying to build?",
      "How do I move forward when the destination is still unclear?",
      "What strengths, values, or possibilities have I overlooked?",
      "What is the next faithful step?",
    ],
    closing:
      "A Personal Expedition does not prescribe the life you should live. It helps you better understand the one you hope to create.",
    action: "Begin a Personal Expedition",
    href: "/begin?path=personal",
    className: "expeditions-path-personal",
  },
  {
    id: "professional-expedition",
    marker: "02",
    bearing: "A changing ridgeline",
    title: "Professional Expedition",
    words: ["Lead.", "Develop.", "Advance."],
    purpose:
      "For travelers navigating careers, leadership, professional growth, workplace challenges, or meaningful transitions.",
    questions: [
      "What direction should my career take next?",
      "How can I lead with greater wisdom and confidence?",
      "Which opportunities align with my goals and values?",
      "How do I prepare for a new role, field, or responsibility?",
      "How can technology strengthen rather than replace my judgment?",
    ],
    closing:
      "A Professional Expedition helps the traveler move with intention, not simply momentum.",
    action: "Begin a Professional Expedition",
    href: "/begin?path=professional",
    className: "expeditions-path-professional",
  },
  {
    id: "organizational-expedition",
    marker: "03",
    bearing: "A shared crossing",
    title: "Organizational Expedition",
    words: ["Build.", "Strategize.", "Transform."],
    purpose:
      "For businesses, teams, institutions, and communities seeking thoughtful strategy, responsible growth, or a clearer path through change.",
    questions: [
      "What are we truly trying to build?",
      "Where are our people, systems, or strategy becoming disconnected?",
      "How can technology serve our mission more faithfully?",
      "What opportunities or risks are not yet visible?",
      "How do we grow without losing what matters?",
    ],
    closing:
      "An Organizational Expedition treats strategy as stewardship: aligning purpose, people, knowledge, and action.",
    action: "Begin an Organizational Expedition",
    href: "/begin?path=organizational",
    className: "expeditions-path-organizational",
  },
  {
    id: "discovery-expedition",
    marker: "04",
    bearing: "An unmarked horizon",
    title: "Discovery Expedition",
    words: ["Explore.", "Research.", "Imagine."],
    purpose:
      "For travelers beginning with curiosity rather than a predetermined outcome.",
    questions: [
      "What do we need to understand before deciding?",
      "What patterns, possibilities, or overlooked questions deserve exploration?",
      "How can research illuminate an unfamiliar path?",
      "What might become possible if we look beyond the obvious?",
      "Which idea deserves a thoughtful first expedition?",
    ],
    closing:
      "A Discovery Expedition creates room for curiosity to become insight and insight to become possibility.",
    action: "Begin a Discovery Expedition",
    href: "/begin?path=discovery",
    className: "expeditions-path-discovery",
  },
] as const;

export default function ExpeditionsPage() {
  return (
    <>
      <section
        aria-labelledby="expeditions-trailhead-title"
        className="expeditions-trailhead"
      >
        <div aria-hidden="true" className="expeditions-trailhead-map">
          <span className="expeditions-trailhead-light" />
          <span className="expeditions-trailhead-contours" />
          <span className="expeditions-trailhead-route expeditions-trailhead-route-left" />
          <span className="expeditions-trailhead-route expeditions-trailhead-route-center" />
          <span className="expeditions-trailhead-route expeditions-trailhead-route-right" />
          <span className="expeditions-trailhead-ridge expeditions-trailhead-ridge-far" />
          <span className="expeditions-trailhead-ridge expeditions-trailhead-ridge-near" />
        </div>

        <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28 lg:py-32">
          <div className="max-w-[55rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
              Expeditions
            </p>
            <h1
              className="mt-5 max-w-[15ch] font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
              id="expeditions-trailhead-title"
            >
              Every path begins with a question.
            </h1>

            <div className="mt-9 max-w-[43rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
              <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
                Some travelers arrive knowing exactly where they hope to go.
              </p>
              <p className="mt-6">
                Others arrive carrying a challenge, an idea, or the quiet sense
                that something needs to change.
              </p>
              <p className="mt-6 font-semibold text-text-primary">
                You do not need a finished map before beginning.
              </p>
              <p className="mt-5">
                An Expedition creates space to understand where you are,
                clarify what matters, explore possible paths, and take the next
                faithful step.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        aria-labelledby="choosing-path-title"
        className="expeditions-orientation"
      >
        <div aria-hidden="true" className="expeditions-orientation-bearing" />
        <SectionContainer className="relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] lg:gap-24 lg:py-36">
          <header>
            <p className="expeditions-map-label">At the junction</p>
            <h2
              className="expeditions-page-heading mt-4 text-midnight"
              id="choosing-path-title"
            >
              Choose the Path That Meets You Where You Are
            </h2>
          </header>

          <div className="expeditions-orientation-note max-w-[46rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
            <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              The paths below are not rigid categories.
            </p>
            <p className="mt-7">
              A personal question may shape a professional journey.
            </p>
            <p className="mt-4">A discovery may become an organization.</p>
            <p className="mt-4">
              A career crossroads may reveal a deeper summit.
            </p>
            <p className="mt-8 text-text-primary">
              Begin with the path that most closely reflects the expedition
              before you today.
            </p>
            <p className="mt-5 font-display text-xl text-evergreen">
              The route may evolve as understanding grows.
            </p>
          </div>
        </SectionContainer>
      </section>

      <div className="expeditions-paths" aria-label="Expedition paths">
        <div aria-hidden="true" className="expeditions-route-line" />
        {paths.map((path, index) => (
          <section
            aria-labelledby={path.id}
            className={`expeditions-path-station ${path.className}`}
            key={path.id}
          >
            <div aria-hidden="true" className="expeditions-station-terrain">
              <span className="expeditions-station-contour" />
              <span className="expeditions-station-bearing" />
            </div>
            <SectionContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
              <div className="expeditions-station-grid">
                <header className="expeditions-station-header">
                  <div className="expeditions-station-marker-row">
                    <span
                      aria-hidden="true"
                      className="expeditions-station-marker"
                    >
                      {path.marker}
                    </span>
                    <p className="expeditions-map-label">{path.bearing}</p>
                  </div>
                  <h2
                    className="expeditions-page-heading mt-6 text-midnight"
                    id={path.id}
                  >
                    {path.title}
                  </h2>
                  <ul
                    aria-label={`${path.title} supporting words`}
                    className="expeditions-supporting-words mt-6"
                  >
                    {path.words.map((word) => (
                      <li key={word}>{word}</li>
                    ))}
                  </ul>
                  <p className="mt-8 max-w-[38rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg">
                    {path.purpose}
                  </p>
                </header>

                <div className="expeditions-field-entry">
                  <p className="expeditions-field-label">
                    Possible trail questions
                  </p>
                  <ul className="expeditions-question-list mt-6">
                    {path.questions.map((question) => (
                      <li key={question}>
                        <span aria-hidden="true" />
                        <p>{question}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="expeditions-closing-line mt-9">
                    {path.closing}
                  </p>
                  <div className="mt-9">
                    <ButtonLink
                      className="w-full sm:w-auto"
                      href={path.href}
                      variant={index % 2 === 0 ? "primary" : "accent"}
                    >
                      {path.action}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </SectionContainer>
          </section>
        ))}
      </div>

      <section
        aria-labelledby="summit-remains-title"
        className="expeditions-summit"
      >
        <div aria-hidden="true" className="expeditions-summit-atmosphere">
          <span className="expeditions-summit-sun" />
          <span className="expeditions-summit-ridge expeditions-summit-ridge-far" />
          <span className="expeditions-summit-ridge expeditions-summit-ridge-near" />
        </div>
        <SectionContainer className="relative z-10 pt-24 pb-48 sm:pt-32 sm:pb-60 lg:pt-40 lg:pb-72">
          <div className="mx-auto max-w-[58rem] text-center">
            <p className="expeditions-map-label">The traveler’s bearing</p>
            <h2
              className="expeditions-page-heading mx-auto mt-4 max-w-[16ch] text-midnight"
              id="summit-remains-title"
            >
              Your Summit Remains Your Own
            </h2>

            <blockquote className="expeditions-summit-principle mt-10 sm:mt-14">
              <p>A Guide does not choose another traveler’s summit.</p>
              <p className="mt-4">
                A Guide faithfully helps them climb toward the one they have
                chosen.
              </p>
            </blockquote>

            <div className="mx-auto mt-10 max-w-[41rem] text-[1.0625rem] leading-8 text-text-muted sm:text-lg sm:leading-8">
              <p>You are not required to arrive with every answer.</p>
              <p className="mt-4">The path may change.</p>
              <p className="mt-4">The questions may deepen.</p>
              <p className="mt-4">
                The destination may become clearer only after the expedition
                has begun.
              </p>
              <p className="mt-7 font-display text-2xl text-evergreen">
                What matters is that the journey remains yours.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-52"
                href="/begin"
              >
                Begin Your Expedition
              </ButtonLink>
              <TextLink
                className="w-full justify-center px-3 sm:w-auto"
                href="/the-expedition"
              >
                Return to The Expedition
              </TextLink>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
