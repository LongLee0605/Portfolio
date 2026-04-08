"use client";

import { useEffect } from "react";

export function CursorSpotlight({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    let raf = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 3;

    const write = () => {
      raf = 0;
      root.style.setProperty("--mx", `${Math.round(lastX)}px`);
      root.style.setProperty("--my", `${Math.round(lastY)}px`);
    };

    const onMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = requestAnimationFrame(write);
    };

    const onTouchStart = () => {
      root.dataset.spotlight = "off";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
    };

    root.dataset.spotlight = "on";
    write();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true, once: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      delete root.dataset.spotlight;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, [enabled]);

  return <div className="cursor-spotlight" aria-hidden />;
}
