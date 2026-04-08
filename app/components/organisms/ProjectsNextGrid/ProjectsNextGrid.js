import { useEffect, useState, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { StaggerGroup, StaggerItem } from "../../molecules/Stagger/Stagger";
import { TiltCard } from "../../molecules/TiltCard/TiltCard";
import { normalizeImageSrc } from "../../../utils/image";

const MODAL_CLOSE_MS = 260;

const ProjectCard = memo(function ProjectCard({ item, onOpenModal }) {
  return (
    <TiltCard className="fx-premium-card group glass-panel-hover h-full w-full cursor-pointer overflow-hidden p-0 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(34,211,238,0.22)]">
      <a
        href={item.webapp || `#project-${item.id}`}
        aria-label={`Xem chi tiết dự án ${item.title}`}
        onClick={(e) => {
          e.preventDefault();
          onOpenModal(item);
        }}
        className="flex flex-col gap-6 px-7 py-8 sm:gap-7 sm:px-8 sm:py-9"
      >
        <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-900/50 ring-0 transition-[box-shadow] duration-500 group-hover:ring-1 group-hover:ring-cyan-400/20">
          <div className="relative h-60 w-full">
            <Image
              src={normalizeImageSrc(item?.image)}
              fill
              sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
              alt={item?.alt || `Hình ảnh demo dự án ${item.title}`}
            />
          </div>
        </div>
        <div className="flex min-h-[2.75rem] flex-wrap items-center justify-center gap-2">
          {item?.tags?.map((tag) => (
            <span
              key={tag}
              className="tag-pill rounded-lg border border-cyan-500/20 bg-cyan-400/[0.08] px-2.5 py-1 text-xs font-medium text-cyan-100/90 transition-colors group-hover:border-cyan-400/35"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-left">
          <p className="line-clamp-2 text-[1.125rem] font-semibold text-white transition-colors group-hover:text-cyan-100 sm:text-xl">
            {item?.title}
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-500">{item?.date}</p>
          <p className="mt-3 text-sm leading-[1.65] text-zinc-400 sm:text-[0.9375rem]">
            {item?.description}
          </p>
        </div>
      </a>
    </TiltCard>
  );
});

export function ProjectsNextGrid({ projectsNextJS }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveElRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const openModal = useCallback((project) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsModalClosing(false);
    lastActiveElRef.current = document.activeElement;
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (!isModalOpen || isModalClosing) return;
    setIsModalClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
      setSelectedProject(null);
      closeTimeoutRef.current = null;
    }, MODAL_CLOSE_MS);
  }, [isModalClosing, isModalOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeBtnRef.current?.focus?.());

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key !== "Tab") return;

      const root = modalRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", onKeyDown);
      if (!isModalClosing) lastActiveElRef.current?.focus?.();
    };
  }, [isModalOpen, isModalClosing, closeModal]);

  useEffect(() => {
    if (isModalOpen) return;
    if (!lastActiveElRef.current) return;
    lastActiveElRef.current.focus?.();
    lastActiveElRef.current = null;
  }, [isModalOpen]);

  return (
    <>
      <StaggerGroup className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
        {projectsNextJS?.map((item, index) => (
          <StaggerItem key={item.id || index} index={index} className="h-full">
            <ProjectCard item={item} onOpenModal={openModal} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {isModalOpen && selectedProject && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md ${
            isModalClosing
              ? "animate-[anim-modal-backdrop-out_220ms_ease-in_forwards]"
              : "animate-[anim-modal-backdrop-in_220ms_ease-out]"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            ref={modalRef}
            className={`glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-y-auto p-7 will-change-transform sm:p-10 ${
              isModalClosing
                ? "animate-[anim-modal-panel-out_240ms_cubic-bezier(0.4,0,1,1)_forwards]"
                : "animate-[anim-modal-panel-in_420ms_cubic-bezier(0.22,1,0.36,1)]"
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              ref={closeBtnRef}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white active:scale-95"
              aria-label="Đóng thông tin dự án"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="flex w-full justify-center lg:w-1/3">
                <div className="relative h-60 w-full max-w-md lg:h-[26rem]">
                  <Image
                    src={normalizeImageSrc(selectedProject.image)}
                    fill
                    sizes="(min-width: 1280px) 360px, (min-width: 1024px) 32vw, 100vw"
                    className="rounded-xl border border-white/10 object-cover object-top"
                    alt={
                      selectedProject.alt ||
                      `Hình ảnh demo dự án ${selectedProject.title}`
                    }
                  />
                </div>
              </div>
              <div className="flex w-full flex-col lg:w-2/3">
                <div className="flex min-h-[2.5rem] flex-wrap gap-2">
                  {selectedProject?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill rounded-lg border border-cyan-500/20 bg-cyan-400/[0.08] px-2.5 py-1 text-xs text-cyan-100/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  id="modal-title"
                  className="mt-4 text-xl font-semibold text-white"
                >
                  {selectedProject?.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {selectedProject?.date}
                </p>
                <p id="modal-description" className="sr-only">
                  Project detail dialog. Press Escape to close. Press Tab to navigate between
                  interactive elements inside this dialog.
                </p>
                <div
                  className="modal-content mt-4 max-h-[32vh] overflow-y-auto text-left text-sm leading-relaxed text-zinc-300 [&_a]:text-cyan-400 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: selectedProject?.ido }}
                />
                <div className="mt-6 flex justify-end border-t border-white/[0.06] pt-6">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={selectedProject?.webapp}
                    className="btn-tech-primary"
                    aria-label={`Xem website dự án ${selectedProject.title}`}
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
