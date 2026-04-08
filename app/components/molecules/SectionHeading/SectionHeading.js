import { SectionKicker } from "../../atoms/SectionKicker/SectionKicker";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignCls =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div
      className={`mb-10 flex max-w-3xl flex-col gap-4 sm:mb-12 sm:gap-5 lg:mb-16 ${alignCls} ${className}`}
    >
      {kicker && <SectionKicker>{kicker}</SectionKicker>}
      <h2 className="fx-heading-aurora text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.2rem] sm:leading-[1.1] lg:text-[3rem] lg:leading-[1.07]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[42rem] text-base leading-[1.68] text-zinc-400/95 sm:text-lg sm:leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
