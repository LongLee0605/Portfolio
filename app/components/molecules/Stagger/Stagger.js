"use client";

import { useInView } from "../../../hooks/useInView";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

export function StaggerGroup({
  className = "",
  children,
  baseDelay = 60,
  step = 70,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useInView({ threshold, rootMargin, once });

  return (
    <div
      ref={ref}
      className={`fx-stagger-group ${inView && !prefersReducedMotion ? "is-active" : ""} ${className}`}
      style={{
        ["--fx-stagger-base"]: `${baseDelay}ms`,
        ["--fx-stagger-step"]: `${step}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerItem({ className = "", index = 0, children } = {}) {
  return (
    <div
      className={`fx-stagger-item ${className}`}
      style={{ ["--fx-stagger-index"]: String(index) }}
    >
      {children}
    </div>
  );
}

