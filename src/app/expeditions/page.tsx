import { PagePlaceholder } from "@/components/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Expeditions",
  "A structural placeholder for the Expeditions page.",
);

export default function ExpeditionsPage() {
  return (
    <PagePlaceholder
      title="Expeditions"
      description="This route will introduce the ways Cryptic Intelligence helps travelers. Final content is not yet approved."
    />
  );
}
