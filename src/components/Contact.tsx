import { contact, navLinks, profile } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";

const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "X / Twitter", icon: "twitter", href: "#" },
  { label: "GitHub", icon: "github", href: "#" },
  { label: "Email", icon: "mail", href: "#" },
];

function ContactChannels() {
  const hasEmail = Boolean(profile.email);
  const hasWhatsapp = Boolean(profile.whatsapp);
  const hasSocials = profile.socials.length > 0;

  if (!hasEmail && !hasWhatsapp && !hasSocials) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-surface/30 px-8 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
          <Icon name="mail" className="h-6 w-6" />
        </span>
        <p className="max-w-md font-serif text-xl italic leading-relaxed text-text/80">
          I am still setting up my contact details — check back soon.
        </p>
        <p className="max-w-sm text-sm leading-relaxed text-text/50">
          In the meantime, the invitation to connect is already open. I look forward to hearing
          from you.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {hasEmail && (
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-raised"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-bg">
            <Icon name="mail" className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/50">
              Email
            </span>
            <span className="mt-1 truncate font-medium text-text">{profile.email}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-text/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      )}

      {hasWhatsapp && (
        <a
          href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-raised"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-bg">
            <Icon name="message" className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/50">
              WhatsApp
            </span>
            <span className="mt-1 font-medium text-text">{profile.whatsapp}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-text/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      )}

      {profile.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-raised"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-raised text-text/80">
            <Icon name={s.icon} className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/50">
              {s.label}
            </span>
            <span className="mt-1 truncate font-medium text-text">{s.href.replace(/^https?:\/\//, "")}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-text/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      ))}
    </div>
  );
}

const YEAR = new Date().getFullYear();

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-section text-text">
      <div className="absolute inset-0 texture-lines opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-24 sm:px-8 md:pt-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {contact.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-[1.85] text-text/65">
                {contact.invitation}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-border bg-surface/60 p-5 text-sm leading-relaxed text-text/70">
                <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {contact.availability}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:pt-4">
            <ContactChannels />
          </Reveal>
        </div>

        <footer className="mt-24 border-t border-border pt-10 md:mt-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-4">
              <Wordmark compact />
              <p className="max-w-xs text-sm leading-relaxed text-text/50">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/40">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text/70 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text/40">
                Navigate
              </p>
              <nav className="flex flex-col gap-2" aria-label="Footer">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-text/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-text/40">
              &copy; {YEAR} {profile.name}. {profile.role}.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text/60 transition-colors hover:text-accent"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
                <Icon name="arrow-up" className="h-4 w-4" />
              </span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
