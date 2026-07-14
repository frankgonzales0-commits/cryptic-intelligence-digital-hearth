import Image from "next/image";

type GuidePortraitProps =
  | {
      src: string;
      alt: string;
      focalPosition?:
        | "center"
        | "center top"
        | "center bottom"
        | `${number}% ${number}%`;
    }
  | { src?: never; alt?: never; focalPosition?: never };

export function GuidePortrait({
  src,
  alt,
  focalPosition = "center",
}: GuidePortraitProps) {
  return (
    <figure className="guide-portrait">
      <div className="guide-portrait-image">
        {src ? (
          <Image
            alt={alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 34rem, (min-width: 640px) 70vw, calc(100vw - 2.5rem)"
            src={src}
            style={{ objectPosition: focalPosition }}
          />
        ) : (
          <div
            aria-label="Portrait placeholder for Raul Gonzales, First Guide. An approved founder photograph will appear here."
            className="guide-portrait-placeholder"
            role="img"
          >
            <span aria-hidden="true" className="guide-portrait-rings" />
            <span className="guide-portrait-placeholder-label">
              Approved founder portrait forthcoming
            </span>
          </div>
        )}
      </div>

      <figcaption className="guide-portrait-caption">
        <span className="font-display text-2xl font-semibold text-parchment">
          Raul Gonzales
        </span>
        <span className="mt-1 block text-sm font-semibold tracking-[0.14em] text-parchment/80 uppercase">
          First Guide
        </span>
      </figcaption>
    </figure>
  );
}
