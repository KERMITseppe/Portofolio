"use client";

import { LANGUAGES } from "./i18n";
import { useLanguage } from "./LanguageContext";

// Drie knoppen (EN · NL · FR) in de navigatiebalk. De actieve taal is geel.
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex items-center rounded-full border border-white/15 p-0.5 text-xs font-semibold"
    >
      {LANGUAGES.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.name}
            title={l.name}
            className={`min-w-[2.25rem] cursor-pointer rounded-full px-2.5 py-1.5 transition-colors ${
              active ? "bg-[var(--accent)] text-black" : "text-white/60 hover:text-white"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
