import { journeyIntro, journeyThemes } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <Section id="journey" tone="section">
      <SectionHeading
        tone="section"
        eyebrow="Current Journey"
        title={
          <>
            Beyond the
            <span className="italic text-accent"> classroom.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="max-w-xl text-[1.05rem] leading-[1.9] text-text/65 md:text-lg">
            {journeyIntro}
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-5">
            <Icon name="pen" className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-text/60">
              New entries will be added here as the journey unfolds — honestly, and only when
              there is something real to share.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-border border-y border-border">
          {journeyThemes.map((theme, i) => (
            <Reveal key={theme.title}>
              <div className="group flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <span className="font-serif text-lg font-light italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-text transition-transform duration-300 group-hover:translate-x-1">
                    {theme.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text/50">
                    {theme.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
