"use client";

import { useInView } from "../../../hooks/useInView";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

export function SectionChoreo({
  className = "",
  children,
  baseDelay = 40,
  step = 90,
  threshold = 0.12,
  rootMargin = "0px 0px -12% 0px",
} = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useInView({ threshold, rootMargin, once: true });

  return (
    <div
      ref={ref}
      className={`fx-choreo ${inView && !prefersReducedMotion ? "is-active" : ""} ${className}`}
      style={{
        ["--fx-choreo-base"]: `${baseDelay}ms`,
        ["--fx-choreo-step"]: `${step}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ChoreoItem({ index = 0, className = "", children } = {}) {
  return (
    <div
      className={`fx-choreo-item ${className}`}
      style={{ ["--fx-choreo-index"]: String(index) }}
    >
      {children}
    </div>
  );
}

