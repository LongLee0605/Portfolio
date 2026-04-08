import { NavAnchor } from "../../molecules/NavAnchor/NavAnchor";
import { Magnetic } from "../../molecules/Magnetic/Magnetic";

export function SiteHeader({ menuItems, elevated, activeSection }) {
  return (
    <header
      className={`fx-header-shell fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ease-smooth ${
        elevated
          ? "is-elevated border-white/[0.08] bg-zinc-950/92 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          : "border-white/[0.04] bg-zinc-950/55 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-[4rem] w-full max-w-7xl items-center justify-between gap-3 px-5 sm:gap-5 sm:px-8 lg:px-12 xl:px-16">
        <a
          href="#top"
          className="group shrink-0 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-400 transition-all duration-300 hover:tracking-[0.3em] hover:text-cyan-300 sm:text-xs"
        >
          D.Long
        </a>
        <nav
          className="no-scrollbar flex min-w-0 flex-1 justify-end gap-4 overflow-x-auto py-1 pr-1 sm:gap-6 md:gap-7"
          aria-label="Primary"
        >
          {menuItems?.map((item) => (
            <NavAnchor
              key={item.title}
              href={item.url}
              active={item?.url?.replace("#", "") === activeSection}
            >
              {item.title}
            </NavAnchor>
          ))}
          <a
            href="https://www.hackerrank.com/certificates/d6f59345f207"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-tech shrink-0"
          >
            Certificate
          </a>
        </nav>
        <Magnetic className="shrink-0" strength={8}>
          <a href="#contact" className="btn-tech-primary fx-cta-primary py-2.5 text-xs whitespace-nowrap sm:px-6">
            Let&apos;s talk
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
