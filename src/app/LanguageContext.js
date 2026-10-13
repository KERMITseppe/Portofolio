"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LANG, LANGUAGES, ui } from "./i18n";

const STORAGE_KEY = "rp-lang";
const LanguageContext = createContext(null);

// Houdt de gekozen taal bij. Standaard Engels; een bezoeker die zelf een
// andere taal kiest, krijgt die bij een volgend bezoek opnieuw te zien.
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Eerder gekozen taal ophalen (kan mislukken in privévensters: dan blijft het Engels).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGES.some((l) => l.code === saved)) setLangState(saved);
    } catch {}
  }, []);

  // De taal van de pagina mee aanpassen (voor schermlezers, vertaaltools en zoekmachines).
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].metaTitle;
  }, [lang]);

  const setLang = useCallback((code) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {}
  }, []);

  return <LanguageContext.Provider value={{ lang, setLang, t: ui[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
