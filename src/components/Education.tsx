import { education } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <Section id="education" tone="ink">
      <SectionHeading
        tone="ink"
        eyebrow="Education"
        title={
          <>
            Where I&apos;m
            <span className="italic text-lime"> learning.</span>
          </>
        }
        intro="The programme that is shaping how I understand land, food, and forests."
      />

      <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative pl-10">
            <span
              className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-lime via-forest to-transparent"
              aria-hidden="true"
            />
            <span className="absolute -left-[7px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime bg-ink" aria-hidden="true" />

            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/70">
              <Icon name="map-pin" className="h-3.5 w-3.5 text-lime" />
              Kabale, Uganda
            </span>

            <h3 className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-5xl">
              {education.institution}
            </h3>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-lime px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                {education.abbreviation}
              </span>
              <span className="rounded-full border border-ivory/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/80">
                {education.level}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal>
            <div className="rounded-3xl border border-ivory/15 bg-ivory/[0.04] p-8 md:p-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-lime">
                Current programme
              </p>
              <h4 className="mt-3 font-serif text-2xl font-medium leading-snug text-ivory md:text-3xl">
                {education.programme}
              </h4>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.85] text-ivory/75">
                {education.summary}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="flex items-center gap-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/60">
                <span className="h-px w-7 bg-lime" aria-hidden="true" />
                Looking ahead
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {education.future.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-ivory/12 bg-ivory/[0.03] px-4 py-3.5 text-sm font-medium text-ivory/85"
                  >
                    <Icon name="chevron-right" className="h-4 w-4 shrink-0 text-lime" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-ivory/50">
                This space is ready to grow as coursework, fieldwork, and research take shape.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
