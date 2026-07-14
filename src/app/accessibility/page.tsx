import { PagePlaceholder } from "@/components/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Accessibility",
  "A structural placeholder for the Cryptic Intelligence accessibility statement.",
);

export default function AccessibilityPage() {
  return (
    <PagePlaceholder
      title="Accessibility"
      description="Cryptic Intelligence is building the Digital Hearth to target WCAG 2.2 Level AA. The final statement will be added after formal review."
    />
  );
}
