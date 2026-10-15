import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ivory"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="texture-grain absolute inset-0" aria-hidden="true" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-forest">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
          {project.date}
        </p>
        <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest"
          >
            View project
            <Icon name="arrow-up-right" className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

const categories = [
  "Academic projects",
  "Fieldwork",
  "Research",
  "Community initiatives",
  "Volunteering",
];

export function Projects() {
  const empty = projects.length === 0;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects & Experience"
        title={
          <>
            Work in
            <span className="italic text-forest"> progress.</span>
          </>
        }
      />

      {empty ? (
        <Reveal>
          <div className="mt-16 flex flex-col items-center rounded-3xl border border-dashed border-line bg-sand/40 px-8 py-16 text-center md:py-20">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-ivory text-forest">
              <Icon name="flask" className="h-7 w-7" />
            </span>
            <h3 className="mt-7 max-w-md font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              This space is waiting for its first entry.
            </h3>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted">
              Genuine projects — academic work, fieldwork, research, and community initiatives —
              will appear here as they happen. Nothing is invented to fill the space.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-ivory px-4 py-2 text-xs font-medium text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </Section>
  );
}
