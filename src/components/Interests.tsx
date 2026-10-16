import { interests } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Interests() {
  return (
    <Section id="interests" className="texture-grain">
      <SectionHeading
        eyebrow="Interests"
        title={
          <>
            Areas I&apos;m
            <span className="italic text-accent"> curious about.</span>
          </>
        }
        intro="Fields I hope to explore deeply through study, practice, and collaboration — presented as directions, not as finished expertise."
      />

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {interests.map((interest, i) => (
          <Reveal key={interest.title} delay={(i % 3) * 0.08}>
            <article className="group border-t-2 border-border pt-6 transition-colors duration-300 hover:border-accent">
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif text-sm italic text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent-bright">
                  <Icon name={interest.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium leading-snug tracking-tight text-text">
                {interest.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {interest.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
