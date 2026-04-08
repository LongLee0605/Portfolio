export function TechBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-mesh-tech opacity-90" />
      <div className="absolute inset-0 grid-tech-bg opacity-40" />
      <div className="parallax-slow absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="parallax-mid absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-violet-600/15 blur-[90px]" />
      <div className="parallax-slow absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/5 blur-[80px]" />
    </div>
  );
}
