import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import type { Publication } from "@/data/publications";

type FounderVolumeProps = {
  publication: Publication;
  volumeLabel: string;
};

export function FounderVolume({
  publication,
  volumeLabel,
}: FounderVolumeProps) {
  return (
    <article className="founder-volume">
      <div className="founder-volume-visual">
        <div
          className={`founder-volume-book publication-cover-${publication.coverTone}`}
        >
          {publication.coverImagePath ? (
            <Image
              alt={`Cover of ${publication.title}`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 48vw, 78vw"
              src={publication.coverImagePath}
            />
          ) : (
            <div aria-hidden="true" className="founder-volume-cover">
              <span className="founder-volume-rule" />
              <span className="founder-volume-family">
                {publication.publicationFamily}
              </span>
              <span className="founder-volume-title">{publication.title}</span>
              <span className="founder-volume-accession">
                {publication.accessionNumber}
              </span>
            </div>
          )}
        </div>
        <span aria-hidden="true" className="founder-volume-shelf" />
      </div>

      <div className="founder-volume-record">
        <div className="founder-volume-index">
          <p>{volumeLabel}</p>
          <p>{publication.accessionNumber}</p>
        </div>
        <h3 className="mt-5 font-display text-3xl leading-tight font-semibold text-midnight sm:text-4xl">
          {publication.title}
        </h3>
        <p className="mt-3 text-sm font-semibold tracking-[0.1em] text-evergreen uppercase">
          {publication.edition}
        </p>
        <p className="mt-6 max-w-[38rem] text-[1.0625rem] leading-8 text-text-muted">
          {publication.description}
        </p>
        <p className="founder-volume-status mt-6">
          <span aria-hidden="true" />
          Available
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            aria-label={`Open ${publication.title} PDF in a new tab`}
            className="w-full sm:w-auto"
            href={publication.documentPath}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Publication
          </ButtonLink>
          <ButtonLink
            aria-label={`Download ${publication.title} PDF`}
            className="w-full sm:w-auto"
            download
            href={publication.documentPath}
            variant="secondary"
          >
            Download PDF
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
