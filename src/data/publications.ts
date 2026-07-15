export type Publication = {
  id: string;
  title: string;
  edition: string;
  accessionNumber: string;
  description: string;
  publicationFamily: string;
  documentPath: string;
  coverImagePath?: string;
  status: "available";
  downloadable: true;
  featured: true;
  fileType: "PDF";
  coverTone: "midnight" | "evergreen" | "slate" | "parchment";
};

export const publications: readonly Publication[] = [
  {
    id: "cryptic-intelligence-origins",
    title: "Cryptic Intelligence Origins",
    edition: "Publication Edition v1.0",
    accessionNumber: "CI-FL-0001",
    description:
      "The first map of Cryptic Intelligence, preserving the earliest ideas from which the larger expedition eventually grew.",
    publicationFamily: "Founder Library",
    documentPath:
      "/library/publications/cryptic-intelligence-origins-v1.pdf",
    status: "available",
    downloadable: true,
    featured: true,
    fileType: "PDF",
    coverTone: "midnight",
  },
  {
    id: "the-compass-codex",
    title: "The Compass Codex",
    edition: "Publication Edition v1.0",
    accessionNumber: "CI-FL-0002",
    description:
      "The visual language, symbols, colors, and design principles that give Cryptic Intelligence its identity.",
    publicationFamily: "Founder Library",
    documentPath: "/library/publications/the-compass-codex-v1.pdf",
    status: "available",
    downloadable: true,
    featured: true,
    fileType: "PDF",
    coverTone: "evergreen",
  },
  {
    id: "the-expedition",
    title: "The Expedition",
    edition: "Publication Edition v1.0",
    accessionNumber: "CI-FL-0003",
    description:
      "An introduction to the expedition philosophy and the belief that no traveler should have to navigate life's journey alone.",
    publicationFamily: "Founder Library",
    documentPath: "/library/publications/the-expedition-v1.pdf",
    status: "available",
    downloadable: true,
    featured: true,
    fileType: "PDF",
    coverTone: "slate",
  },
];
