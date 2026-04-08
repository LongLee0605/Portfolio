"use client";

import Image from "next/image";
import { StaggerGroup, StaggerItem } from "../../molecules/Stagger/Stagger";
import { TiltCard } from "../../molecules/TiltCard/TiltCard";
import { normalizeImageSrc } from "../../../utils/image";

export function ProjectsWordpressGrid({ projectsWordpress }) {
  return (
    <StaggerGroup className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {projectsWordpress?.map((item, index) => (
        <StaggerItem key={index} index={index} className="h-full">
          <TiltCard className="fx-premium-card group glass-panel-hover h-full w-full cursor-pointer overflow-hidden p-0 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(139,92,246,0.2)]">
            <a
              href={item?.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-6 px-7 py-8 sm:gap-7 sm:px-8 sm:py-9"
            >
              <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-900/50 ring-0 transition-[box-shadow] duration-500 group-hover:ring-1 group-hover:ring-violet-400/25">
                <div className="relative h-40 w-full">
                  <Image
                    src={normalizeImageSrc(item?.image)}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                    alt={item?.alt || `Hình ảnh dự án ${item?.title || ""}`}
                  />
                </div>
              </div>
              <div className="flex min-h-[2.75rem] flex-wrap items-center justify-center gap-2">
                {item?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill rounded-lg border border-violet-500/20 bg-violet-500/[0.08] px-2.5 py-1 text-xs font-medium text-violet-100/90 transition-colors group-hover:border-violet-400/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <p className="line-clamp-2 text-[1.125rem] font-semibold text-white transition-colors group-hover:text-violet-100 sm:text-xl">
                  {item?.title}
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {item?.date}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-[1.68] text-zinc-400 sm:text-[0.9375rem]">
                  {item?.description}
                </p>
              </div>
            </a>
          </TiltCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
