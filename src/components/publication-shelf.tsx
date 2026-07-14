import { PublicationCard } from "@/components/publication-card";
import type { Publication } from "@/data/publications";

type PublicationShelfProps = {
  items: readonly Publication[];
  label: string;
};

export function PublicationShelf({ items, label }: PublicationShelfProps) {
  return (
    <ul aria-label={label} className="publication-shelf">
      {items.map((publication) => (
        <li key={publication.id}>
          <PublicationCard publication={publication} />
        </li>
      ))}
    </ul>
  );
}
