import { skillGroups } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            Capacities I&apos;m
            <span className="italic text-accent"> actively building.</span>
          </>
        }
      />

      <Reveal>
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5">
          <Icon name="sprout" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-text/80">
            <span className="font-semibold text-text">Skills in development.</span> These are the
            capacities I am growing through study and practice — an honest snapshot of a student
            still in the making, not a claim of mastery.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title}>
            <div className="grid gap-6 border-t border-border py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
              <div className="flex items-start gap-5">
                <span className="font-serif text-2xl font-light italic text-accent-dim">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-text">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{group.note}</p>
                </div>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-[0.95rem] font-medium text-text/85 transition-colors duration-200 hover:border-accent/50 hover:bg-raised"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
