"use client";

import Image from "next/image";
import ProjectGrid from "./ProjectGrid";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import { categories } from "./projects";

const contact = [
  { icon: "fa-solid fa-envelope", label: "rennen.seppe@gmail.com", href: "mailto:rennen.seppe@gmail.com" },
  { icon: "fa-brands fa-instagram", label: "@notseppes", href: "https://www.instagram.com/notseppes" },
  { icon: "fa-brands fa-youtube", label: "@rennenseppe", href: "https://www.youtube.com/@rennenseppe" },
  { icon: "fa-brands fa-linkedin", label: "Seppe Rennen", href: "https://www.linkedin.com/in/seppe-rennen-9243b8389/" },
];

function Card({ children, className = "", id }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-10 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Portfolio() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      {/* Navigatie */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/runningprod_logo.png"
              alt="Running Productions logo"
              width={36}
              height={36}
              className="invert mix-blend-screen"
            />
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">Running Productions</span>
          </a>
          <ul className="flex items-center gap-3 text-sm text-white/70 sm:gap-5">
            <li className="hidden sm:block"><a href="#work" className="hover:text-[var(--accent)]">{t.nav.work}</a></li>
            <li className="hidden sm:block"><a href="#about" className="hover:text-[var(--accent)]">{t.nav.about}</a></li>
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <a
                href="mailto:rennen.seppe@gmail.com"
                className="rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-black hover:brightness-110"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero */}
        <header className="flex flex-col justify-center pb-12 pt-16 sm:pb-16 sm:pt-24">
          <div className="mx-auto w-fit max-w-full">
            <div className="flex justify-between text-xs font-bold uppercase tracking-[0.25em] sm:text-sm">
              <span className="text-[var(--accent)]">{t.hero.role}</span>
              <span className="text-white/80">Seppe Rennen</span>
            </div>
            <h1 className="mt-2 text-[17vw] font-extrabold leading-[0.85] tracking-tight sm:text-[9.5rem] lg:text-[11rem]">
              PORTFOLIO
            </h1>
            <div className="mt-3 flex items-center justify-end bg-[var(--accent)] px-4 py-1 sm:py-2">
              <span className="text-2xl font-extrabold text-black sm:text-4xl">2026</span>
            </div>
            <p className="mt-8 max-w-2xl text-pretty text-white/60">
              {t.hero.tagline}
            </p>
            <a href="#work" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--accent)]">
              {t.hero.cta} <i className="fa-solid fa-arrow-down" />
            </a>
          </div>
        </header>

        {/* Over mij */}
        <Card id="about" className="grid gap-8 md:grid-cols-[240px_1fr] md:items-center">
          {/* Later een foto? Vervang dit blok door een <Image src="/seppe.jpg" ... /> */}
          <div className="mx-auto flex aspect-square w-full max-w-[200px] items-center justify-center rounded-2xl bg-white p-6 md:max-w-none">
            <Image src="/runningprod_logo_full.png" alt="Running Productions" width={220} height={220} />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--accent)]">{t.about.hello}</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              {t.about.bio}
            </p>
            <ul className="mt-5 space-y-2">
              {contact.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-white/80 hover:text-[var(--accent)]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <i className={c.icon} />
                    </span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Info-blokken */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="!p-6 sm:!p-8">
            <h3 className="font-bold text-[var(--accent)]">{t.info.education}</h3>
            <p className="mt-3 text-sm text-white/80">{t.info.programme}</p>
            <p className="text-sm text-white/50">{t.info.school}</p>
          </Card>
          <Card className="!p-6 sm:!p-8">
            <h3 className="font-bold text-[var(--accent)]">{t.info.software}</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "After Effects"].map((s) => (
                <li key={s} className="rounded-full border border-white/20 px-3 py-1 text-white/80">{s}</li>
              ))}
            </ul>
          </Card>
          <Card className="!p-6 sm:!p-8">
            <h3 className="font-bold text-[var(--accent)]">{t.info.make}</h3>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              {t.info.makeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Werk */}
        <div id="work" className="scroll-mt-24 space-y-6 py-6">
          {categories.map((cat) => (
            <Card key={cat.id} id={cat.id}>
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-3xl font-extrabold text-[var(--accent)] sm:text-4xl">{cat.title[lang]}</h2>
                <p className="max-w-sm text-sm text-white/55 sm:text-right">{cat.intro[lang]}</p>
              </div>
              <ProjectGrid projects={cat.projects} ratio={cat.ratio} />
            </Card>
          ))}
        </div>

        {/* Afsluiter */}
        <Card className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            {t.closing.before} <span className="text-[var(--accent)]">{t.closing.accent}</span>
          </h2>
          <a
            href="mailto:rennen.seppe@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-black hover:brightness-110"
          >
            <i className="fa-solid fa-envelope" /> rennen.seppe@gmail.com
          </a>
        </Card>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        <ul className="mb-4 flex justify-center gap-5 text-lg text-white/60">
          {contact.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={c.label}
                className="hover:text-[var(--accent)]"
              >
                <i className={c.icon} />
              </a>
            </li>
          ))}
        </ul>
        <p>© 2026 Seppe Rennen · Running Productions · v3.0</p>
        <p className="mx-auto mt-1 max-w-2xl px-4">{t.footer.disclaimer}</p>
      </footer>
    </div>
  );
}
