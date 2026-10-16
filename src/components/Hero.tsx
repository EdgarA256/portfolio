import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/profile";
import { Icon } from "./Icon";
import { Portrait } from "./Portrait";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  const variants = reduce ? ({ hidden: {}, show: {} } as const) : container;
  const itemVariants = reduce ? ({ hidden: {}, show: {} } as const) : item;

  return (
    <section id="top" className="relative overflow-hidden bg-bg pt-20">
      <div className="absolute inset-0 texture-lines" aria-hidden="true" />

      <svg
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] text-accent/[0.06]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" />
        <circle cx="300" cy="300" r="220" />
        <circle cx="300" cy="300" r="160" />
        <circle cx="300" cy="300" r="100" />
        <path d="M300 20 V580 M20 300 H580" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:pb-28 lg:pt-28 lg:px-10">
        <motion.div variants={variants} initial="hidden" animate="show" className="flex flex-col">
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.eyebrow}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-7 font-serif text-balance text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            Agaba{" "}
            <span className="italic text-accent">Edgar</span>
            <br />
            Ruteisire
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            An emerging professional at the intersection of{" "}
            <span className="font-medium text-text">accounting, finance, and integrity</span>{" "}
            — learning to measure value, manage risk, and build systems that last.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-accent"
          >
            <Icon name="graduation-cap" className="h-4 w-4 text-accent-dim" />
            {profile.role}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-bg transition-all duration-300 hover:bg-accent-bright hover:shadow-lift"
            >
              Let&apos;s Connect
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-4 text-sm font-semibold text-text transition-all duration-300 hover:border-accent hover:bg-surface"
            >
              Explore My Journey
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-md text-sm leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, rotate: 1.5 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-4 -z-10 rounded-[2.25rem] border border-accent/30"
            aria-hidden="true"
          />
          <Portrait />
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-bg px-5 py-4 shadow-soft sm:block">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-faint">
              Studying at
            </p>
            <p className="mt-1 font-serif text-base font-medium text-text">Kabale University</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-text md:flex"
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="arrow-up" className="h-4 w-4 rotate-180" />
        </motion.span>
      </motion.a>
    </section>
  );
}
