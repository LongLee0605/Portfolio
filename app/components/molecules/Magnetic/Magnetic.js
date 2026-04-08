"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function Magnetic({ children, className = "", strength = 10 }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion) return;
    if (!window.matchMedia?.("(hover: hover)").matches) return;

    let rect = null;
    let raf = 0;
    let px = 0;
    let py = 0;

    const write = () => {
      raf = 0;
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clamp((px - cx) / (rect.width / 2), -1, 1);
      const dy = clamp((py - cy) / (rect.height / 2), -1, 1);
      el.style.setProperty("--mg-x", `${(dx * strength).toFixed(2)}px`);
      el.style.setProperty("--mg-y", `${(dy * strength).toFixed(2)}px`);
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      el.dataset.mgActive = "true";
    };

    const onMove = (event) => {
      px = event.clientX;
      py = event.clientY;
      if (!rect) rect = el.getBoundingClientRect();
      if (!raf) raf = requestAnimationFrame(write);
    };

    const onLeave = () => {
      rect = null;
      el.dataset.mgActive = "false";
      el.style.setProperty("--mg-x", "0px");
      el.style.setProperty("--mg-y", "0px");
    };

    el.addEventListener("mouseenter", onEnter, { passive: true });
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      delete el.dataset.mgActive;
    };
  }, [prefersReducedMotion, strength]);

  return (
    <div ref={ref} className={`fx-magnetic ${className}`}>
      {children}
    </div>
  );
}
