import { PagePlaceholder } from "@/components/page-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Privacy",
  "A structural placeholder for the Cryptic Intelligence privacy notice.",
);

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="Privacy"
      description="The final privacy notice will be added after the site’s data handling and contact pathway are approved."
    />
  );
}
