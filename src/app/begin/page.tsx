import { PagePlaceholder } from "@/components/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Begin",
  "A structural placeholder for the Begin page.",
);

export default function BeginPage() {
  return (
    <PagePlaceholder
      title="Begin"
      description="This route will provide an accessible next step for travelers. No form or external service has been added in Phase One."
    />
  );
}
