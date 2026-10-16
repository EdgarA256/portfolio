import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, profile } from "../data/profile";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const headerBg = scrolled
    ? "border-line/70 bg-ivory/85 backdrop-blur-md"
    : "border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Wordmark compact />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                 aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-sand"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-forest hover:shadow-soft sm:inline-flex"
          >
            Let&apos;s Connect
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ivory/60 text-ink transition-colors hover:bg-sand lg:hidden"
          >
            <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            tabIndex={-1}
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/70 bg-ivory/95 backdrop-blur-md lg:hidden"
          >
            <nav
              className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 sm:px-8"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: -14 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 * i + 0.08 }}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium text-ink transition-colors hover:bg-sand"
                >
                  {link.label}
                  <Icon name="arrow-right" className="h-4 w-4 text-muted" />
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-ivory"
              >
                Let&apos;s Connect
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
              <p className="mt-4 px-4 text-xs text-muted">{profile.role}</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
