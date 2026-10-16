import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "base" | "section";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "base",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const introColor = tone === "section" ? "text-text/60" : "text-muted";

  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
          {align === "center" && (
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
          )}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className={`max-w-2xl text-lg leading-relaxed ${introColor}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
