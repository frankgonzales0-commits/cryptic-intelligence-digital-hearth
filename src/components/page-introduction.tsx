type PageIntroductionProps = {
  title: string;
  description: string;
  eyebrow?: string;
  titleId?: string;
};

export function PageIntroduction({
  title,
  description,
  eyebrow = "Digital Hearth",
  titleId,
}: PageIntroductionProps) {
  return (
    <header className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-evergreen">
        {eyebrow}
      </p>
      <h1
        className="font-display text-4xl leading-tight font-semibold tracking-[-0.025em] text-midnight sm:text-5xl lg:text-6xl"
        id={titleId}
      >
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
        {description}
      </p>
    </header>
  );
}
