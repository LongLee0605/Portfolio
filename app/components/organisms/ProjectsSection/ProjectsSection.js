"use client";

import { useState, useCallback } from "react";
import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { CinematicSection } from "../../molecules/CinematicSection/CinematicSection";
import { SectionChoreo, ChoreoItem } from "../../molecules/SectionChoreo/SectionChoreo";
import { ProjectsNextGrid } from "../ProjectsNextGrid/ProjectsNextGrid";
import { ProjectsWordpressGrid } from "../ProjectsWordpressGrid/ProjectsWordpressGrid";

export function ProjectsSection({ projectsNextJS, projectsWordpress }) {
  const [activeTab, setActiveTab] = useState("next");
  const activePanelId = activeTab === "next" ? "projects-panel-next" : "projects-panel-wp";

  const renderPanel = useCallback(() => {
    if (activeTab === "wp") {
      return <ProjectsWordpressGrid projectsWordpress={projectsWordpress} />;
    }
    return <ProjectsNextGrid projectsNextJS={projectsNextJS} />;
  }, [activeTab, projectsNextJS, projectsWordpress]);

  return (
    <CinematicSection id="project" accent="cyan" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <SectionChoreo>
        <ChoreoItem index={0}>
          <SectionHeading
            kicker="Work"
            title="Selected projects"
            subtitle="Company builds and outsource deliveries — detail modals for the Next.js stack."
          />
        </ChoreoItem>
        <ChoreoItem index={1}>
          <div
            className="mb-12 flex flex-wrap justify-center gap-4 sm:mb-14 lg:mb-16"
            role="tablist"
            aria-label="Project categories"
          >
            <button
              type="button"
              id="projects-tab-next"
              role="tab"
              aria-selected={activeTab === "next"}
              aria-controls="projects-panel-next"
              tabIndex={activeTab === "next" ? 0 : -1}
              onClick={() => setActiveTab("next")}
              className={
                activeTab === "next"
                  ? "btn-tech-primary min-w-[11.5rem]"
                  : "btn-tech-ghost min-w-[11.5rem]"
              }
            >
              Company projects
            </button>
            <button
              type="button"
              id="projects-tab-wp"
              role="tab"
              aria-selected={activeTab === "wp"}
              aria-controls="projects-panel-wp"
              tabIndex={activeTab === "wp" ? 0 : -1}
              onClick={() => setActiveTab("wp")}
              className={
                activeTab === "wp"
                  ? "btn-tech-primary min-w-[11.5rem]"
                  : "btn-tech-ghost min-w-[11.5rem]"
              }
            >
              Outsource
            </button>
          </div>
        </ChoreoItem>
        <ChoreoItem index={2}>
          <div
            key={activeTab}
            id={activePanelId}
            className="fx-tab-panel pt-2"
            role="tabpanel"
            aria-live="polite"
            aria-labelledby={activeTab === "next" ? "projects-tab-next" : "projects-tab-wp"}
          >
            {renderPanel()}
          </div>
        </ChoreoItem>
      </SectionChoreo>
    </CinematicSection>
  );
}
