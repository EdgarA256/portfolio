import { aboutHighlights, profile } from "../data/profile";
import { Icon } from "./Icon";
import { PortraitPlaceholder } from "./PortraitPlaceholder";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="about" className="texture-grain">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Every number has a story.
            <br />
            <span className="italic text-accent">I&apos;m learning to read them.</span>
          </>
        }
      />

      <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <PortraitPlaceholder />
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
            <Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-muted">
              Based in <span className="font-medium text-text">{profile.location}</span>, studying
              and building at Kabale University.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7 text-[1.05rem] leading-[1.85] text-text/85 md:text-lg">
          <Reveal>
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-accent">
              My name is Agaba Edgar Ruteisire. I am a second-year Bachelor of Science in
              Accounting and Finance student at Kabale University, and I am at the early,
              rewarding stage of turning curiosity into real understanding.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p>
              Accounting and finance sit at the centre of how organisations create, measure, and
              sustain value. They answer questions our generation cannot afford to ignore — how
              resources are allocated, how risks are managed, how decisions are justified, and how
              trust is built. I chose to study at that intersection because I want to be part of
              the answers, not simply a witness to the problems.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              What draws me in is the meeting of precision and purpose. A balance sheet tells a
              story about a business; a budget reflects priorities; a financial decision ripples
              outward. I am learning to see numbers as more than figures — as a language that must
              be understood before it can be used well — and to value the discipline that kind of
              understanding demands.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              I am honest about where I am. I am still a student — still building knowledge, still
              forming my direction, still discovering where my strengths will matter most. What I
              offer is genuine curiosity, a willingness to learn, and a desire to connect what
              happens in lecture halls with what happens in businesses, markets, and communities.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-accent md:text-2xl">
              The work I am preparing for demands rigor and integrity. I intend to build both —
              and I am looking for the people, mentors, and opportunities that will help me get
              there.
            </blockquote>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 lg:mt-24">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map((h) => (
            <div key={h.label} className="flex flex-col gap-2 bg-bg p-7">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-faint">
                {h.label}
              </dt>
              <dd className="font-serif text-lg leading-snug text-text">{h.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
