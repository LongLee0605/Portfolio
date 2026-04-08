export function ScrollToTopButton({ visible, onClick, scrollProgress = 0 }) {
  if (!visible) return null;

  const r = 18;
  const c = 2 * Math.PI * r;
  const dashOffset = c * (1 - Math.min(1, Math.max(0, scrollProgress)));

  return (
    <div className="fixed bottom-7 right-5 z-50 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-12">
      <div className="relative h-14 w-14">
        <svg
          className="absolute inset-0 -rotate-90 text-cyan-400/40"
          viewBox="0 0 44 44"
          aria-hidden
        >
          <circle
            cx="22"
            cy="22"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-150 ease-linear"
          />
        </svg>
        <button
          type="button"
          onClick={onClick}
          className="group absolute inset-[5px] flex items-center justify-center rounded-full border border-cyan-400/35 bg-zinc-950/95 text-cyan-300 shadow-glow backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/70 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
