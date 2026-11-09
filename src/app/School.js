"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import { playlists, spotifyEmbedUrl } from "./playlists";

const SPOTIFY_GREEN = "#1DB954";

// Pagina /school: Spotify-playlists die mensen op hun gsm openen en opslaan.
export default function School() {
  const { lang, t } = useLanguage();
  const s = t.school;

  return (
    // Op deze pagina is de accentkleur Spotify-groen in plaats van geel.
    <div className="min-h-screen bg-[var(--bg)] text-white" style={{ "--accent": SPOTIFY_GREEN }}>
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--accent)]">
            <i className="fa-solid fa-arrow-left" />
            <Image
              src="/runningprod_logo.png"
              alt="Running Productions logo"
              width={32}
              height={32}
              className="invert mix-blend-screen"
            />
            <span className="hidden font-semibold sm:inline">{s.back}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <header className="pb-8 pt-12 sm:pt-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">{s.kicker}</span>
          <h1 className="mt-2 text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">{s.title}</h1>
          <p className="mt-5 max-w-xl text-pretty text-white/60">{s.intro}</p>
        </header>

        {/* Hoe opslaan */}
        <section className="rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-bold text-[var(--accent)]">{s.howTitle}</h2>
          <ol className="mt-4 space-y-3 text-sm text-white/80">
            {s.howSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-black">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Playlists */}
        <ul className="mt-6 space-y-6">
          {playlists.map((p) => {
            const ready = p.url.trim() !== "";
            const embed = ready ? spotifyEmbedUrl(p.url) : null;
            return (
              <li key={p.id} className="rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
                    style={{ background: ready ? SPOTIFY_GREEN : "rgba(255,255,255,0.08)", color: ready ? "#000" : "rgba(255,255,255,0.4)" }}
                  >
                    <i className="fa-brands fa-spotify" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold">{p.title[lang]}</h3>
                    <p className="mt-1 text-sm text-white/55">{p.description[lang]}</p>
                  </div>
                </div>

                {embed && (
                  <iframe
                    src={embed}
                    title={p.title[lang]}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    className="mt-5 h-[152px] w-full rounded-xl border-0"
                  />
                )}

                {ready ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-black hover:brightness-110 sm:w-fit"
                    style={{ background: SPOTIFY_GREEN }}
                  >
                    <i className="fa-brands fa-spotify text-lg" /> {s.open}
                  </a>
                ) : (
                  <p className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-white/20 px-6 py-3.5 text-sm font-semibold text-white/45 sm:w-fit">
                    <i className="fa-regular fa-clock" /> {s.soon}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        <p>© 2026 Seppe Rennen · Running Productions</p>
      </footer>
    </div>
  );
}
