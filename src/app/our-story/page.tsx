import { PagePlaceholder } from "@/components/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Our Story",
  "A structural placeholder for the Cryptic Intelligence story.",
);

export default function OurStoryPage() {
  return (
    <PagePlaceholder
      title="Our Story"
      description="This route will share the approved origin and stewardship of Cryptic Intelligence. Final content is not yet approved."
    />
  );
}
