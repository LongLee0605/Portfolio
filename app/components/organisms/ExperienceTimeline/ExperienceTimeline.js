"use client";

import Image from "next/image";
import { useInView } from "../../../hooks/useInView";

export function ExperienceTimeline({ experiences }) {
  const [wrapRef, lineActive] = useInView({
    threshold: 0.06,
    rootMargin: "0px 0px -8% 0px",
    once: true,
  });

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-4xl pl-2 sm:pl-0">
      <div
        className={`timeline-line-draw absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500/70 via-violet-500/35 to-cyan-500/10 sm:left-[23px] ${
          lineActive ? "is-active" : ""
        }`}
        aria-hidden
      />
      <ul className="relative space-y-8 sm:space-y-10 lg:space-y-12">
        {experiences?.map((item, index) => (
          <li
            key={`${item.company}-${index}`}
            className="group/row relative pl-12 sm:pl-16"
          >
            <div
              className="absolute left-0 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-400/70 bg-zinc-950 shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)] transition-all duration-500 group-hover/row:scale-110 group-hover/row:border-cyan-300 group-hover/row:shadow-[0_0_32px_-2px_rgba(34,211,238,0.55)] sm:left-0.5 sm:top-9"
              aria-hidden
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 transition-transform duration-300 group-hover/row:scale-125" />
            </div>
            <article className="glass-panel-hover p-7 text-left transition-all duration-500 group-hover/row:-translate-y-1 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                <Image
                  unoptimized
                  width={72}
                  height={72}
                  sizes="(min-width: 640px) 72px, 64px"
                  className="h-16 w-16 shrink-0 rounded-xl border border-white/10 bg-zinc-900 object-contain p-2 transition-transform duration-500 group-hover/row:scale-105 group-hover/row:border-cyan-400/25 sm:h-[4.5rem] sm:w-[4.5rem]"
                  src={item?.img}
                  alt={item?.alt || item?.company}
                />
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400/90">
                    {item?.date}
                  </p>
                  <h3 className="pt-1 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover/row:text-cyan-100 sm:text-2xl">
                    {item?.role}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-violet-300/95 sm:text-base">
                    {item.company}
                  </p>
                  {item?.desc && (
                    <p className="pt-3 text-sm leading-[1.7] text-zinc-400 sm:text-base">
                      {item.desc}
                    </p>
                  )}
                  {item?.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 pt-5">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={`${skill}-${idx}`}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-100/90 transition-all duration-300 group-hover/row:border-cyan-400/35"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
