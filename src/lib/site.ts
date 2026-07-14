export const siteConfig = {
  name: "Cryptic Intelligence",
  tagline: "Where Wisdom Guides Every Expedition.",
  description:
    "Cryptic Intelligence is a learning ecosystem dedicated to helping people navigate life’s expeditions with wisdom, technology, and one another.",
  leader: {
    name: "Raul Gonzales",
    title: "First Guide",
  },
  navigation: [
    { label: "The Hearth", href: "/" },
    { label: "The Expedition", href: "/the-expedition" },
    { label: "Library", href: "/library" },
    { label: "Our Story", href: "/our-story" },
    { label: "Begin", href: "/begin" },
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";
