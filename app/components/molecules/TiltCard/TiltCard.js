"use client";

import { useEffect, useId, useRef } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function TiltCard({
  children,
  className = "",
  maxTiltDeg = 8,
  perspective = 900,
  glare = true,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const uid = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion) return;
    if (!window.matchMedia?.("(hover: hover)").matches) return;

    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    let rect = null;

    const write = () => {
      raf = 0;
      if (!rect) return;
      const px = clamp((lastX - rect.left) / rect.width, 0, 1);
      const py = clamp((lastY - rect.top) / rect.height, 0, 1);
      const rx = (0.5 - py) * maxTiltDeg * 2;
      const ry = (px - 0.5) * maxTiltDeg * 2;

      el.style.setProperty("--tilt-rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--tilt-ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--glare-x", `${Math.round(px * 100)}%`);
      el.style.setProperty("--glare-y", `${Math.round(py * 100)}%`);
      el.style.setProperty("--cursor-x", `${Math.round(px * 100)}%`);
      el.style.setProperty("--cursor-y", `${Math.round(py * 100)}%`);
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      el.style.setProperty("--tilt-perspective", `${perspective}px`);
      el.dataset.tiltActive = "true";
    };
    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rect) rect = el.getBoundingClientRect();
      if (!raf) raf = requestAnimationFrame(write);
    };
    const onLeave = () => {
      rect = null;
      el.dataset.tiltActive = "false";
      el.style.setProperty("--tilt-rx", "0deg");
      el.style.setProperty("--tilt-ry", "0deg");
      el.style.setProperty("--cursor-x", "50%");
      el.style.setProperty("--cursor-y", "30%");
    };

    el.addEventListener("mouseenter", onEnter, { passive: true });
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      delete el.dataset.tiltActive;
    };
  }, [glare, maxTiltDeg, perspective, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      data-glare={glare ? "on" : "off"}
      data-tilt-id={uid}
    >
      {children}
    </div>
  );
}

