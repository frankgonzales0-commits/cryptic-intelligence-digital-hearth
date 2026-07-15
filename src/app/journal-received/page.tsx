import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Journal Received",
  "Your Traveler's Journal has been safely delivered to the Digital Hearth.",
);

export default function JournalReceivedPage() {
  return (
    <section
      aria-labelledby="journal-received-title"
      className="journal-received"
    >
      <div aria-hidden="true" className="journal-received-atmosphere">
        <span className="journal-received-light" />
        <span className="journal-received-compass" />
        <span className="journal-received-ridge journal-received-ridge-far" />
        <span className="journal-received-ridge journal-received-ridge-near" />
      </div>

      <SectionContainer className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-20 pb-44 sm:py-28 sm:pb-52 lg:py-32 lg:pb-60">
        <div className="mx-auto max-w-[54rem] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-evergreen sm:text-base">
            Traveler&apos;s Journal
          </p>
          <h1
            className="mt-5 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-midnight"
            id="journal-received-title"
          >
            Your journal has been received.
          </h1>

          <div className="mx-auto mt-9 max-w-[42rem] text-[1.0625rem] leading-8 text-text-muted sm:mt-10 sm:text-lg sm:leading-8">
            <p className="font-display text-2xl leading-9 text-evergreen sm:text-[1.75rem] sm:leading-10">
              Thank you for sharing a part of your journey.
            </p>
            <p className="mt-6">Your journal has been safely delivered to the Hearth.</p>
            <p className="mt-4">Every expedition begins with a single conversation.</p>
            <p className="mt-6 text-text-primary">A Guide may respond when appropriate.</p>
            <p className="mt-4 font-display text-xl text-evergreen">
              Until then, the Hearth remains open.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <ButtonLink className="w-full sm:w-auto" href="/">
              Return to the Hearth
            </ButtonLink>
            <TextLink
              className="w-full justify-center px-3 sm:w-auto"
              href="/library"
            >
              Visit the Founder Library
            </TextLink>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
