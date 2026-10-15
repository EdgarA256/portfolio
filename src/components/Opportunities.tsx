import { opportunities } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Opportunities() {
  return (
    <Section id="opportunities" className="texture-grain">
      <SectionHeading
        eyebrow="Opportunities"
        align="center"
        title={
          <span className="text-center">
            Open to
            <span className="italic text-forest"> meaningful</span> connection.
          </span>
        }
        intro="If any of the following sounds like you, I would be glad to hear from you."
      />

      <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {opportunities.map((opp, i) => (
          <Reveal key={opp.title} delay={(i % 3) * 0.08}>
            <div className="group flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-sand/70 text-forest transition-all duration-300 group-hover:border-lime group-hover:bg-lime/20 group-hover:text-ink">
                <Icon name={opp.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl font-medium leading-snug tracking-tight text-ink">
                {opp.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-muted">{opp.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-ivory px-8 py-10 text-center sm:px-12 md:flex-row md:text-left">
          <div>
            <h3 className="font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Have an opportunity, a question, or simply a shared interest?
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              The best conversations often begin with a simple hello.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-forest hover:shadow-lift"
          >
            Start a conversation
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
