import Image from "next/image";
import Link from "next/link";

import type { Publication } from "@/data/publications";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="publication-card">
      <div
        className={`publication-cover publication-cover-${publication.coverTone}`}
      >
        {publication.cover ? (
          <Image
            alt={publication.cover.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 17rem, (min-width: 640px) 38vw, 72vw"
            src={publication.cover.src}
          />
        ) : (
          <div aria-hidden="true" className="publication-cover-placeholder">
            <span className="publication-cover-rule" />
            <span className="publication-cover-title">{publication.title}</span>
            <span className="publication-cover-mark" />
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-display text-2xl leading-tight font-semibold text-midnight">
          {publication.title}
        </h3>
        <p className="mt-2 text-sm font-semibold tracking-[0.1em] text-evergreen uppercase">
          {publication.status}
        </p>

        {publication.access ? (
          <Link
            className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-evergreen underline decoration-compass-gold decoration-2 underline-offset-4"
            download={publication.access.download}
            href={publication.access.href}
          >
            {publication.access.label}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
