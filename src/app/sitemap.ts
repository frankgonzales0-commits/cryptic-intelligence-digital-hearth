import type { MetadataRoute } from "next";

const siteUrl = "https://crypticintelligenceconsulting.com";

const routes = [
  "",
  "/the-expedition",
  "/expeditions",
  "/begin",
  "/library",
  "/the-lodge",
  "/our-story",
  "/the-guides",
  "/privacy",
  "/accessibility",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
