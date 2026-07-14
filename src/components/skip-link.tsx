export function SkipLink() {
  return (
    <a
      className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-[var(--radius-control)] bg-midnight px-4 py-3 font-semibold text-parchment shadow-[var(--shadow-raised)] transition-transform focus:translate-y-0"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
}
