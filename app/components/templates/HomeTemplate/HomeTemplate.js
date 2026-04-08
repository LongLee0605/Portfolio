"use client";

import { useEffect, useState, useCallback } from "react";
import { Bio, Skill, experiences, projectsNextJS, projectsWordpress } from "../../../data";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import { TechBackground } from "../../organisms/TechBackground/TechBackground";
import { CursorSpotlight } from "../../organisms/CursorSpotlight/CursorSpotlight";
import { SiteHeader } from "../../organisms/SiteHeader/SiteHeader";
import { ScrollProgressBar } from "../../organisms/ScrollProgressBar/ScrollProgressBar";
import { HeroBento } from "../../organisms/HeroBento/HeroBento";
import { StatsBento } from "../../organisms/StatsBento/StatsBento";
import { SkillsBento } from "../../organisms/SkillsBento/SkillsBento";
import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { CinematicSection } from "../../molecules/CinematicSection/CinematicSection";
import { SectionChoreo, ChoreoItem } from "../../molecules/SectionChoreo/SectionChoreo";
import { ExperienceTimeline } from "../../organisms/ExperienceTimeline/ExperienceTimeline";
import { ProjectsSection } from "../../organisms/ProjectsSection/ProjectsSection";
import { ContactForm } from "../../organisms/ContactForm/ContactForm";
import { SiteFooter } from "../../organisms/SiteFooter/SiteFooter";
import { ScrollToTopButton } from "../../organisms/ScrollToTopButton/ScrollToTopButton";

const TYPEWRITER_ROLES = ["FrontEnd Developer", "Wordpress Developer"];

export default function HomeTemplate() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerElevated, setHeaderElevated] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowScrollTop(y > 280);
      setHeaderElevated(y > 32);
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const p = maxScroll > 0 ? y / maxScroll : 0;
      setScrollProgress(p);
      doc.style.setProperty("--scroll-progress", String(p));

      const anchors = ["top", "skill", "experience", "project", "contact"];
      let current = "top";
      for (const id of anchors) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - 140 <= y) current = id;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [prefersReducedMotion]);

  return (
    <div className={`fx-page-enter relative min-h-screen bg-zinc-950 text-zinc-100 ${ready ? "is-ready" : ""}`}>
      <TechBackground />
      <CursorSpotlight enabled={!prefersReducedMotion} />
      <ScrollProgressBar progress={scrollProgress} />
      <SiteHeader menuItems={Bio?.menu} elevated={headerElevated} activeSection={activeSection} />
      <main className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32 xl:px-16">
        <div className="fx-flow-stack flex flex-col gap-28 lg:gap-32 xl:gap-36">
          <HeroBento bio={Bio} typeWriterRoles={TYPEWRITER_ROLES} />

          <StatsBento
            years={3}
            projects={(projectsNextJS?.length || 0) + (projectsWordpress?.length || 0)}
            companies={experiences?.length || 0}
            highlight="Clean UI engineering with real-world constraints: performance, SEO, and maintainability."
          />

          <SkillsBento skills={Skill} />

          <CinematicSection
            id="experience"
            accent="cyan"
            className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
          >
            <SectionChoreo>
              <ChoreoItem index={0}>
                <SectionHeading
                  kicker="Timeline"
                  title="Experience"
                  subtitle="Shipping product with teams — from agencies to product companies."
                />
              </ChoreoItem>
              <ChoreoItem index={1}>
                <ExperienceTimeline experiences={experiences} />
              </ChoreoItem>
            </SectionChoreo>
          </CinematicSection>

          <ProjectsSection
            projectsNextJS={projectsNextJS}
            projectsWordpress={projectsWordpress}
          />

          <CinematicSection
            id="contact"
            accent="violet"
            className="px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
          >
            <SectionChoreo>
              <ChoreoItem index={0}>
                <SectionHeading
                  kicker="Contact"
                  title="Let’s build something"
                  subtitle="Drop a line — I’ll get back as soon as I can."
                />
              </ChoreoItem>
              <ChoreoItem index={1}>
                <ContactForm />
              </ChoreoItem>
            </SectionChoreo>
          </CinematicSection>

          <SiteFooter />
        </div>
      </main>
      <ScrollToTopButton
        visible={showScrollTop}
        onClick={jumpToTop}
        scrollProgress={scrollProgress}
      />
    </div>
  );
}
