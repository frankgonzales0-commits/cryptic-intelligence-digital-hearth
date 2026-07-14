import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: "website",
    },
  };
}
