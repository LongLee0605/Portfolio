export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-16 text-center sm:py-20 lg:py-24">
      <p className="text-base leading-relaxed text-zinc-400 transition-colors duration-300 hover:text-cyan-200/90 sm:text-lg">
        Built and designed by Le Tran Dang Long
      </p>
      <p className="mt-4 font-mono text-xs tracking-wide text-zinc-600 sm:text-[0.8rem]">
        © {new Date().getFullYear()} — All rights reserved
      </p>
    </footer>
  );
}
