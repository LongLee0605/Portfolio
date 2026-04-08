"use client";

import { useMemo } from "react";
import { useInView } from "../../../hooks/useInView";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import { useCountUp } from "../../../hooks/useCountUp";
import { Reveal } from "../../molecules/Reveal/Reveal";

function StatCard({ label, value, suffix = "", accent = "cyan", start }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animated = useCountUp({
    end: value,
    start: start && !prefersReducedMotion,
    durationMs: 950,
  });

  const display = prefersReducedMotion ? value : animated;
  const accentCls =
    accent === "violet"
      ? "from-violet-500/20 to-transparent border-violet-400/20 text-violet-100"
      : "from-cyan-500/20 to-transparent border-cyan-400/20 text-cyan-100";

  return (
    <div
      className="glass-panel-hover relative overflow-hidden px-7 py-7 transition-all duration-500 hover:-translate-y-1 sm:px-8 sm:py-8"
      aria-label={`${label}: ${value}${suffix}`}
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${accentCls} blur-3xl`}
        aria-hidden
      />
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px] sm:tracking-widest">
        {label}
      </p>
      <p className="fx-stat-value mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {display}
        <span className="text-zinc-400">{suffix}</span>
      </p>
    </div>
  );
}

export function StatsBento({
  years = 3,
  projects = 0,
  companies = 0,
  highlight = "UX-first, performance-minded delivery",
} = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useInView({ threshold: 0.18, rootMargin: "0px 0px -10% 0px", once: true });

  const start = prefersReducedMotion ? true : inView;
  const cards = useMemo(
    () => [
      { label: "Years shipping", value: years, suffix: "+", accent: "cyan" },
      { label: "Projects delivered", value: projects, suffix: "+", accent: "violet" },
      { label: "Teams/companies", value: companies, suffix: "+", accent: "cyan" },
    ],
    [years, projects, companies]
  );

  return (
    <section ref={ref} aria-label="Stats" className="scroll-mt-28">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
        <Reveal className="lg:col-span-5">
          <div className="glass-panel-hover relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-[95px]" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px] sm:tracking-widest">
              Highlights
            </p>
            <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              Proof of work, not buzzwords.
            </h3>
            <p className="mt-4 text-sm leading-[1.7] text-zinc-400 sm:text-base">
              {highlight}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#project" className="btn-tech-primary">
                Explore projects
              </a>
              <a href="#experience" className="btn-tech-ghost">
                View timeline
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 lg:col-span-7 lg:grid-cols-3 lg:gap-7">
          {cards.map((c, idx) => (
            <Reveal key={c.label} delay={80 + idx * 90} className="h-full">
              <StatCard {...c} start={start} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
