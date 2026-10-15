import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/profile";

type PortraitProps = {
  className?: string;
};

export function PortraitPlaceholder({ className = "" }: PortraitProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-sand ${className}`}
    >
      <div className="absolute inset-0 texture-grain" aria-hidden="true" />

      <svg
        viewBox="0 0 200 250"
        className="absolute inset-0 h-full w-full text-moss/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M100 230 C 60 190 40 150 45 105 C 50 60 75 30 100 18 C 125 30 150 60 155 105 C 160 150 140 190 100 230 Z" />
        <path d="M100 230 C 100 170 100 110 100 18" />
        <path d="M100 180 C 80 165 66 145 62 120 M100 180 C 120 165 134 145 138 120" />
        <path d="M100 140 C 84 128 74 112 71 92 M100 140 C 116 128 126 112 129 92" />
        <path d="M100 100 C 90 92 84 82 82 70 M100 100 C 110 92 116 82 118 70" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-serif text-6xl font-light tracking-tight text-forest/40">
          {profile.initials}
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-moss/70">
          Portrait
        </span>
      </div>

      <motion.span
        aria-hidden="true"
        className="absolute right-4 top-4 h-2 w-2 rounded-full bg-lime"
        animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
