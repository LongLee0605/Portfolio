"use client";

import { useEffect, useMemo, useState } from "react";

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function useCountUp({ end = 0, start = false, durationMs = 900 } = {}) {
  const safeEnd = useMemo(() => (Number.isFinite(end) ? end : 0), [end]);
  const safeDuration = useMemo(
    () => clamp(Number.isFinite(durationMs) ? durationMs : 900, 120, 4000),
    [durationMs]
  );

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    let raf = 0;
    const t0 = performance.now();

    const tick = (t) => {
      const p = clamp((t - t0) / safeDuration, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * safeEnd));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [safeEnd, safeDuration, start]);

  return value;
}
