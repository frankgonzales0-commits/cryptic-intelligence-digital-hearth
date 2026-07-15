import { PublicationCard } from "@/components/publication-card";
import type { Publication } from "@/data/publications";

type PublicationShelfProps = {
  items: readonly Publication[];
  label: string;
  emptyPositions?: number;
};

export function EmptyShelfPosition() {
  return (
    <div className="empty-shelf-position">
      <span aria-hidden="true" className="empty-shelf-book" />
      <p>Preparing the next volume...</p>
    </div>
  );
}

export function PublicationShelf({
  items,
  label,
  emptyPositions = 0,
}: PublicationShelfProps) {
  return (
    <ul aria-label={label} className="publication-shelf">
      {items.map((publication) => (
        <li key={publication.id}>
          <PublicationCard publication={publication} />
        </li>
      ))}
      {Array.from({ length: emptyPositions }, (_, index) => (
        <li key={`empty-shelf-${index + 1}`}>
          <EmptyShelfPosition />
        </li>
      ))}
    </ul>
  );
}
