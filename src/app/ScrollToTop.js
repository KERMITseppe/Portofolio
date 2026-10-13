"use client";

import { useEffect } from "react";

// Zorgt dat de pagina bij het laden altijd bovenaan start,
// ook als de browser een oude scrollpositie of een #anker in de URL onthoudt.
export default function ScrollToTop() {
  useEffect(() => {
    const root = document.documentElement;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    // Vloeiend scrollen even uitzetten, anders blijft de browser halverwege hangen.
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      root.style.scrollBehavior = "";
    }, 100);
    return () => clearTimeout(t);
  }, []);
  return null;
}
