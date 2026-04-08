"use client";

import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { SkillPill } from "../../molecules/SkillPill/SkillPill";
import { Reveal } from "../../molecules/Reveal/Reveal";
import { TiltCard } from "../../molecules/TiltCard/TiltCard";
import { StaggerGroup, StaggerItem } from "../../molecules/Stagger/Stagger";

export function SkillsBento({ skills }) {
  return (
    <section id="skills" className="scroll-mt-28">
      <Reveal>
        <SectionHeading
          kicker="Stack"
          title="Skills & tooling"
          subtitle="Technologies I use daily to ship interfaces and WordPress builds."
        />
      </Reveal>
      <StaggerGroup className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8" step={90}>
        {skills?.map((group, index) => (
          <StaggerItem key={group.title || index} index={index} className={index === 0 ? "lg:col-span-2 h-full" : "h-full"}>
            <TiltCard className="glass-panel-hover flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-1 sm:p-9 lg:p-10">
              <h3 className="border-b border-white/[0.08] pb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 sm:text-sm sm:tracking-wider">
                {group.title}
              </h3>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-3.5">
                {group?.data?.map((item, i) => (
                  <SkillPill
                    key={item.title || i}
                    img={item.img}
                    title={item.title}
                    alt={item.alt}
                  />
                ))}
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
