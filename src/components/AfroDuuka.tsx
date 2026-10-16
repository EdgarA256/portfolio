import { afroduuka } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function AfroDuuka() {
  return (
    <section id="afroduuka" className="relative overflow-hidden bg-section text-text">
      <div className="absolute inset-0 texture-grain" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:py-28 lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            A Tool I Recommend
          </span>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                {afroduuka.name}
              </h2>
              <p className="mt-2 text-lg italic text-accent">{afroduuka.tagline}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.85] text-text/70 md:text-lg">
                {afroduuka.description}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {afroduuka.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm font-medium text-text/80"
                  >
                    <Icon name="chevron-right" className="h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={afroduuka.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-bg transition-all duration-300 hover:bg-accent-bright hover:shadow-lift"
                >
                  Visit AfroDuuka
                  <Icon
                    name="arrow-up-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-4 text-sm font-semibold text-text transition-all duration-300 hover:border-accent hover:bg-surface"
                >
                  More About Me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.25rem] border border-accent/20"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
                <img
                  src={afroduuka.image}
                  alt="AfroDuuka dashboard — inventory management system"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
