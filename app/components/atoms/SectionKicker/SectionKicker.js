export function SectionKicker({ children, className = "" }) {
  return (
    <p
      className={`font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-400/85 sm:text-xs sm:tracking-[0.25em] ${className}`}
    >
      {children}
    </p>
  );
}
