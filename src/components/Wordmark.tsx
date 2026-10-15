import { profile } from "../data/profile";

type WordmarkProps = {
  tone?: "dark" | "light";
  compact?: boolean;
};

export function Wordmark({ tone = "dark", compact = false }: WordmarkProps) {
  const nameColor = tone === "dark" ? "text-ink" : "text-ivory";
  const subColor = tone === "dark" ? "text-muted" : "text-ivory/60";

  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Agaba Edgar Ruteisire — home">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-forest text-lime transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5c-4.6 4-6.4 8.4-6.4 11.2a6.4 6.4 0 0 0 12.8 0c0-2.8-1.8-7.2-6.4-11.2Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg font-medium tracking-tight ${nameColor}`}>
          {compact ? profile.wordmark : profile.name}
        </span>
        <span className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] ${subColor}`}>
          Agriculture & Forestry
        </span>
      </span>
    </a>
  );
}
