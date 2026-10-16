import { contact, navLinks, profile } from "../data/profile";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";

function ContactChannels() {
  const hasEmail = Boolean(profile.email);
  const hasWhatsapp = Boolean(profile.whatsapp);
  const hasSocials = profile.socials.length > 0;

  if (!hasEmail && !hasWhatsapp && !hasSocials) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-ivory/20 bg-ivory/[0.03] px-8 py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ivory/15 bg-ivory/[0.05] text-lime">
          <Icon name="mail" className="h-6 w-6" />
        </span>
        <p className="max-w-md font-serif text-xl italic leading-relaxed text-ivory/85">
           I am still setting up my contact details — check back soon.
         </p>
         <p className="max-w-sm text-sm leading-relaxed text-ivory/55">
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
          className="group flex items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-5 transition-colors duration-300 hover:border-lime/50 hover:bg-ivory/[0.07]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
            <Icon name="mail" className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
              Email
            </span>
            <span className="mt-1 truncate font-medium text-ivory">{profile.email}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-ivory/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime"
          />
        </a>
      )}

      {hasWhatsapp && (
        <a
          href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-5 transition-colors duration-300 hover:border-lime/50 hover:bg-ivory/[0.07]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
            <Icon name="message" className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
              WhatsApp
            </span>
            <span className="mt-1 font-medium text-ivory">{profile.whatsapp}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-ivory/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime"
          />
        </a>
      )}

      {profile.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-5 transition-colors duration-300 hover:border-lime/50 hover:bg-ivory/[0.07]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ivory/20 bg-ivory/[0.05] text-ivory/85">
            <Icon name={s.icon} className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/55">
              {s.label}
            </span>
            <span className="mt-1 truncate font-medium text-ivory">{s.href.replace(/^https?:\/\//, "")}</span>
          </span>
          <Icon
            name="arrow-up-right"
            className="ml-auto h-4 w-4 shrink-0 text-ivory/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime"
          />
        </a>
      ))}
    </div>
  );
}

const YEAR = new Date().getFullYear();

export function Contact() {

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 texture-lines opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-24 sm:px-8 md:pt-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-lime">
                <span className="h-px w-8 bg-lime" aria-hidden="true" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {contact.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-[1.85] text-ivory/70">
                {contact.invitation}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-5 text-sm leading-relaxed text-ivory/75">
                <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                {contact.availability}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:pt-4">
            <ContactChannels />
          </Reveal>
        </div>

        <footer className="mt-24 border-t border-ivory/10 pt-8 md:mt-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <Wordmark tone="light" compact />
            </div>
            <p className="text-sm text-ivory/50">
              © {YEAR} {profile.name}. {profile.role}.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ivory/70 transition-colors hover:text-lime"
            >
              Back to top
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-lime">
                <Icon name="arrow-up" className="h-4 w-4" />
              </span>
            </a>
          </div>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/45 transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </section>
  );
}
