type ExpeditionJournalProps = {
  pathName?: string;
};

export function ExpeditionJournal({ pathName }: ExpeditionJournalProps) {
  const article = pathName === "Organizational" ? "an" : "a";
  const journalContext = pathName
    ? `Beginning ${article} ${pathName} Expedition`
    : "Beginning where you are";

  return (
    <div
      aria-describedby="journal-privacy-note"
      aria-labelledby="journal-context"
      className="expedition-journal"
      role="group"
    >
      <div className="expedition-journal-heading">
        <p className="expedition-journal-context" id="journal-context">
          {journalContext}
        </p>
        <p className="expedition-journal-date" aria-label="Journal entry one">
          Entry 01
        </p>
      </div>

      <div className="expedition-journal-fields">
        <div className="expedition-journal-field">
          <label htmlFor="traveler-name">Your Name</label>
          <input
            autoComplete="name"
            id="traveler-name"
            name="name"
            type="text"
          />
        </div>

        <div className="expedition-journal-field">
          <label htmlFor="traveler-email">How may we reach you?</label>
          <input
            aria-describedby="traveler-email-hint"
            autoComplete="email"
            id="traveler-email"
            inputMode="email"
            name="email"
            type="email"
          />
          <p className="expedition-journal-hint" id="traveler-email-hint">
            An email address is enough for a first conversation.
          </p>
        </div>

        <div className="expedition-journal-field expedition-journal-field-wide">
          <label htmlFor="traveler-arrival">
            What brings you here today?
          </label>
          <textarea id="traveler-arrival" name="arrival" rows={4} />
        </div>

        <div className="expedition-journal-field expedition-journal-field-wide">
          <label htmlFor="traveler-question">
            What question has been on your mind?
          </label>
          <textarea id="traveler-question" name="question" rows={5} />
        </div>
      </div>

      <p className="expedition-journal-privacy" id="journal-privacy-note">
        This journal is not sent or stored. It is a quiet place to begin shaping
        the first conversation.
      </p>
    </div>
  );
}
