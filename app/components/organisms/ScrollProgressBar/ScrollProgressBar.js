export function ScrollProgressBar({ progress }) {
  const pct = Math.min(100, Math.max(0, progress * 100));

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-16 z-[45] h-0.5 bg-zinc-950/90"
      aria-hidden
    >
      <div
        className="scroll-progress-fill h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,0.45)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
