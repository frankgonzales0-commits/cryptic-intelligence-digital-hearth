export type PublicationCover = {
  src: string;
  alt: string;
};

export type PublicationAccess = {
  href: string;
  label: string;
  download?: boolean;
};

export type Publication = {
  id: string;
  title: string;
  status: "Coming to the Library.";
  coverTone: "midnight" | "evergreen" | "slate" | "parchment";
  cover?: PublicationCover;
  access?: PublicationAccess;
};

export const publications: readonly Publication[] = [
  {
    id: "founders-edition",
    title: "The Founder’s Edition",
    status: "Coming to the Library.",
    coverTone: "midnight",
  },
  {
    id: "advisors-codex",
    title: "The Advisor’s Codex",
    status: "Coming to the Library.",
    coverTone: "evergreen",
  },
  {
    id: "guides-handbook",
    title: "The Guide’s Handbook",
    status: "Coming to the Library.",
    coverTone: "slate",
  },
  {
    id: "founders-charter",
    title: "The Founder’s Charter",
    status: "Coming to the Library.",
    coverTone: "parchment",
  },
];
