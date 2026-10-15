import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "ink";
};

export function Section({ id, children, className = "", tone = "ivory" }: SectionProps) {
  const base =
    tone === "ink"
      ? "bg-ink text-ivory"
      : "bg-ivory text-ink";

  return (
    <section id={id} className={`${base} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 md:py-32 lg:px-10">
        {children}
      </div>
    </section>
  );
}
