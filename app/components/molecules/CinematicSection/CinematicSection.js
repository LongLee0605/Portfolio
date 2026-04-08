"use client";

import { useInView } from "../../../hooks/useInView";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

export function CinematicSection({
  id,
  className = "",
  accent = "cyan", // "cyan" | "violet"
  children,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.12,
    rootMargin: "0px 0px -12% 0px",
    once: true,
  });

  const accentCls = accent === "violet" ? "cinematic-violet" : "cinematic-cyan";
  const activeCls = prefersReducedMotion ? "" : inView ? "is-active" : "";

  return (
    <section
      id={id}
      ref={ref}
      className={`cinematic-section scroll-mt-28 ${accentCls} ${activeCls} ${className}`}
    >
      {children}
    </section>
  );
}

