import Image from "next/image";
import { normalizeImageSrc } from "../../../utils/image";

export function SkillPill({ img, title, alt }) {
  return (
    <div
      className="group/skill relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/60 px-4 py-3 transition-all duration-300 ease-smooth before:pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-full hover:border-cyan-400/35 hover:bg-cyan-400/[0.08] hover:shadow-[0_0_28px_-10px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
    >
      {img && (
        <Image
          src={normalizeImageSrc(img)}
          width={20}
          height={20}
          sizes="20px"
          className="relative z-[1] h-5 w-5 opacity-90 transition-transform duration-300 group-hover/skill:scale-110"
          alt={alt || title}
        />
      )}
      <span className="relative z-[1] text-sm font-medium text-zinc-200 transition-colors duration-300 group-hover/skill:text-cyan-100">
        {title}
      </span>
    </div>
  );
}
