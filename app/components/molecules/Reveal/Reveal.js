"use client";

import { useInView } from "../../../hooks/useInView";

export function Reveal({ children, delay = 0, className = "", threshold, rootMargin }) {
  const [ref, visible] = useInView({
    threshold: threshold ?? 0.12,
    rootMargin: rootMargin ?? "0px 0px -6% 0px",
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`fx-reveal-item will-change-transform ${className} ${
        visible ? "fx-reveal-item-visible" : "fx-reveal-item-hidden"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
