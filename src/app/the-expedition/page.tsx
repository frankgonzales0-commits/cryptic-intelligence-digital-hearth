import { PagePlaceholder } from "@/components/page-placeholder";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "The Expedition",
  "A structural placeholder for The Expedition page.",
);

export default function TheExpeditionPage() {
  return (
    <PagePlaceholder
      title="The Expedition"
      description="This route will explain the philosophy of Cryptic Intelligence. Final content is not yet approved."
    >
      <ButtonLink href="/expeditions">Explore the Expeditions</ButtonLink>
    </PagePlaceholder>
  );
}
