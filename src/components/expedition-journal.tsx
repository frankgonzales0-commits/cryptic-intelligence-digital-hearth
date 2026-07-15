"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const formName = "traveler-journal";
const formSubmissionDestination = "/netlify-forms.html";

type SubmissionDiagnostic = {
  destination: string;
  netlifySuccess: boolean;
  status: number | "network-error";
};

function reportSubmissionDiagnostic(diagnostic: SubmissionDiagnostic) {
  if (process.env.NODE_ENV === "development") {
    console.info("Traveler's Journal Netlify submission", diagnostic);
  }
}

type ExpeditionJournalProps = {
  pathName?: string;
  pathValue: string;
};

export function ExpeditionJournal({
  pathName,
  pathValue,
}: ExpeditionJournalProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);
  const article = pathName === "Organizational" ? "an" : "a";
  const journalContext = pathName
    ? `Beginning ${article} ${pathName} Expedition`
    : "Beginning where you are";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionInProgress.current) {
      return;
    }

    submissionInProgress.current = true;
    setErrorMessage("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.set("form-name", formName);

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encodedData.append(key, value);
      }
    });

    let responseReceived = false;

    try {
      const response = await fetch(formSubmissionDestination, {
        body: encodedData.toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
      });
      responseReceived = true;

      reportSubmissionDiagnostic({
        destination: formSubmissionDestination,
        netlifySuccess: response.ok,
        status: response.status,
      });

      if (!response.ok) {
        throw new Error("Journal submission was not accepted.");
      }

      router.push("/journal-received");
    } catch {
      if (!responseReceived) {
        reportSubmissionDiagnostic({
          destination: formSubmissionDestination,
          netlifySuccess: false,
          status: "network-error",
        });
      }
      submissionInProgress.current = false;
      setIsSubmitting(false);
      setErrorMessage(
        "The journal could not reach the Hearth just yet. Your words remain here, and you may try again.",
      );
    }
  }

  const submissionLabel = isSubmitting
    ? "Carrying your journal to the Hearth..."
    : "Submit to the Hearth";

  return (
    <form
      action="/journal-received"
      aria-describedby="journal-privacy-note journal-required-note"
      aria-labelledby="journal-context"
      className="expedition-journal"
      data-netlify="true"
      data-netlify-honeypot="company-website"
      id={formName}
      method="POST"
      name={formName}
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value={formName} />
      <input name="expedition-path" type="hidden" value={pathValue} />
      <p aria-hidden="true" className="expedition-journal-honeypot">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          autoComplete="off"
          id="company-website"
          name="company-website"
          tabIndex={-1}
          type="text"
        />
      </p>

      <div className="expedition-journal-heading">
        <p className="expedition-journal-context" id="journal-context">
          {journalContext}
        </p>
        <p className="expedition-journal-date" aria-label="Journal entry one">
          Entry 01
        </p>
      </div>

      <p className="expedition-journal-required-note" id="journal-required-note">
        All journal fields are required.
      </p>

      <div className="expedition-journal-fields">
        <div className="expedition-journal-field">
          <label htmlFor="traveler-name">
            Your Name <span className="expedition-journal-required">Required</span>
          </label>
          <input
            autoComplete="name"
            id="traveler-name"
            name="traveler-name"
            required
            type="text"
          />
        </div>

        <div className="expedition-journal-field">
          <label htmlFor="traveler-email">
            How may we reach you?{" "}
            <span className="expedition-journal-required">Required</span>
          </label>
          <input
            aria-describedby="traveler-email-hint"
            autoComplete="email"
            id="traveler-email"
            inputMode="email"
            name="traveler-email"
            required
            type="email"
          />
          <p className="expedition-journal-hint" id="traveler-email-hint">
            An email address is enough for a first conversation.
          </p>
        </div>

        <div className="expedition-journal-field expedition-journal-field-wide">
          <label htmlFor="traveler-arrival">
            What brings you here today?{" "}
            <span className="expedition-journal-required">Required</span>
          </label>
          <textarea
            id="traveler-arrival"
            name="what-brings-you-here"
            required
            rows={4}
          />
        </div>

        <div className="expedition-journal-field expedition-journal-field-wide">
          <label htmlFor="traveler-question">
            What question has been on your mind?{" "}
            <span className="expedition-journal-required">Required</span>
          </label>
          <textarea
            id="traveler-question"
            name="question-on-your-mind"
            required
            rows={5}
          />
        </div>
      </div>

      <p className="expedition-journal-privacy" id="journal-privacy-note">
        <span>Your journal is sent securely to the Hearth.</span>
        <span>Every expedition begins with a single conversation.</span>
      </p>

      <div className="expedition-journal-submit">
        <button
          aria-describedby="journal-submit-status"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-control)] bg-midnight px-5 py-2.5 text-sm font-semibold text-parchment transition-colors duration-[var(--motion-duration-fast)] hover:bg-evergreen disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:min-w-52"
          disabled={isSubmitting}
          type="submit"
        >
          {submissionLabel}
        </button>
        <p
          aria-live="polite"
          className="expedition-journal-submit-status"
          id="journal-submit-status"
          role="status"
        >
          {isSubmitting
            ? submissionLabel
            : "Your words remain on this page if the journal cannot reach the Hearth."}
        </p>
      </div>

      <p
        aria-live="polite"
        className="expedition-journal-error"
        role="status"
      >
        {errorMessage}
      </p>
    </form>
  );
}
