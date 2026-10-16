import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/profile";

type PortraitProps = {
  className?: string;
};

export function Portrait({ className = "" }: PortraitProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface ${className}`}
    >
      <img
        src={profile.portrait}
        alt={`Portrait of ${profile.name}`}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="eager"
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div>
          <p className="font-serif text-lg font-medium text-white drop-shadow-md">
            {profile.name}
          </p>
          <p className="text-xs text-white/80 drop-shadow-md">{profile.role}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <span className="font-serif text-xs font-medium text-white">{profile.initials}</span>
        </span>
      </div>
    </div>
  );
}
