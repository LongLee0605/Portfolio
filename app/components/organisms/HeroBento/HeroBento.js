"use client";

import Image from "next/image";
import TypeWriter from "../../atoms/TypeWriter/TypeWriter";
import { SectionKicker } from "../../atoms/SectionKicker/SectionKicker";
import { Reveal } from "../../molecules/Reveal/Reveal";
import { TiltCard } from "../../molecules/TiltCard/TiltCard";
import { Magnetic } from "../../molecules/Magnetic/Magnetic";

export function HeroBento({ bio, typeWriterRoles }) {
  return (
    <section id="top" className="scroll-mt-28 pt-2 lg:pt-4">
      <div className="grid auto-rows-fr gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
        <Reveal
          delay={0}
          className="lg:col-span-7 lg:row-span-2"
          rootMargin="0px 0px 0px 0px"
          threshold={0.05}
        >
          <TiltCard className="group/hero glass-panel-hover relative flex min-h-full flex-col justify-center overflow-hidden p-8 transition-all duration-500 hover:shadow-[0_0_52px_-18px_rgba(34,211,238,0.24)] sm:p-10 lg:p-12 xl:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/25 to-transparent blur-2xl transition-all duration-700 group-hover/hero:scale-110 group-hover/hero:opacity-90" />
            <div className="pointer-events-none absolute -bottom-28 left-1/4 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl transition-opacity duration-500 group-hover/hero:opacity-100" />
            <div className="fx-orbital-chip absolute right-7 top-7 hidden sm:flex">
              Performance-first
            </div>
            <div className="fx-orbital-chip fx-orbital-chip-alt absolute bottom-7 right-7 hidden sm:flex">
              UX-centric
            </div>
            <SectionKicker className="mb-5 sm:mb-6">Portfolio · Frontend</SectionKicker>
            <h1 className="fx-hero-title bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]">
              {bio?.title}
            </h1>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2 text-lg leading-snug text-zinc-400 sm:mt-7 sm:text-xl">
              <span>I build as a</span>
              <TypeWriter data={typeWriterRoles} />
            </p>
            <p className="mt-8 max-w-2xl text-base leading-[1.75] text-zinc-400/95 sm:mt-9 sm:text-[1.05rem]">
              {bio?.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4 sm:mt-11">
              <Magnetic>
                <a href="#project" className="btn-tech-primary fx-cta-primary">
                  View projects
                </a>
              </Magnetic>
              <Magnetic strength={8}>
                <a href="#contact" className="btn-tech-ghost">
                  Contact
                </a>
              </Magnetic>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5" threshold={0.08}>
          <TiltCard className="group glass-panel-hover flex h-full min-h-[280px] flex-col items-center justify-center p-8 transition-all duration-500 hover:shadow-glow sm:min-h-[300px] sm:p-10 lg:p-11">
            <div className="relative">
              <div className="absolute inset-0 scale-100 rounded-full bg-gradient-to-tr from-cyan-400/50 via-violet-500/35 to-transparent opacity-70 blur-xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-90" />
              <Image
                className="relative z-10 h-44 w-44 rounded-full object-cover ring-2 ring-cyan-400/35 ring-offset-[10px] ring-offset-zinc-950 transition-all duration-500 ease-smooth hover:scale-[1.04] hover:ring-cyan-400/55 sm:h-48 sm:w-48 sm:ring-offset-[12px]"
                src="/image/cvImage.png"
                width={192}
                height={192}
                sizes="(min-width: 640px) 192px, 176px"
                alt="Avatar"
              />
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-zinc-500 sm:text-[11px] sm:tracking-widest">
              Available for collaboration
            </p>
          </TiltCard>
        </Reveal>

        <Reveal delay={240} className="lg:col-span-5" threshold={0.08}>
          <TiltCard className="glass-panel-hover flex h-full min-h-[200px] flex-col justify-center p-7 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)] sm:min-h-[220px] sm:p-9">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px] sm:tracking-widest">
              On the web
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start sm:gap-5">
              {bio?.social?.map((item) => (
                <a
                  href={item.url}
                  key={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/50 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/45 hover:bg-cyan-400/15 hover:text-cyan-200 hover:shadow-glow active:scale-95 sm:h-[3.25rem] sm:w-[3.25rem] [&_path]:fill-current"
                  aria-label={item.alt || "Social link"}
                >
                  {item.img}
                </a>
              ))}
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
