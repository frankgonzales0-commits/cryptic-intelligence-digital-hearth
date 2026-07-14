import { SectionContainer } from "@/components/section-container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";

export default function NotFound() {
  return (
    <SectionContainer className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-evergreen">
          Page not found
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-midnight sm:text-5xl">
          This path does not lead to a page.
        </h1>
        <p className="mt-6 text-lg leading-8 text-text-muted">
          The address may have changed, or the destination may not be part of
          the Digital Hearth yet.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/">Return to the Hearth</ButtonLink>
          <TextLink href="/begin">Go to Begin</TextLink>
        </div>
      </div>
    </SectionContainer>
  );
}
