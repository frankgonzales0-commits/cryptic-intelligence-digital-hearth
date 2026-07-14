type ExpeditionPathProps = {
  marker: string;
  title: string;
  words: readonly string[];
};

export function ExpeditionPath({
  marker,
  title,
  words,
}: ExpeditionPathProps) {
  return (
    <li className="expedition-path">
      <span aria-hidden="true" className="expedition-path-marker">
        {marker}
      </span>
      <div>
        <h3 className="font-display text-2xl leading-tight font-semibold text-midnight sm:text-[1.75rem]">
          {title}
        </h3>
        <ul
          aria-label={`${title} supporting words`}
          className="expedition-path-words mt-4"
        >
          {words.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
