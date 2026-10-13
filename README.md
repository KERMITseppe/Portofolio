# Seppe Rennen · Portfolio 2026

Persoonlijke portfoliowebsite van Seppe Rennen (Running Productions), gebouwd met Next.js en Tailwind CSS.

## Lokaal bekijken

```bash
npm install
npm run dev
```

Open daarna http://localhost:3000.

## Een project toevoegen

1. Zet de afbeelding als `.webp` in `public/work/` (maximaal ongeveer 2000 px aan de langste kant).
2. Voeg een project toe aan de juiste categorie in `src/app/projects.js` (titel, afbeelding, jaar, tools en een beschrijving in het Engels, Nederlands en Frans).

## Talen

De site is standaard in het Engels. Bezoekers kunnen bovenaan kiezen voor EN, NL of FR, en hun keuze wordt onthouden.

- Vaste teksten (menu, titels, knoppen, footer) staan in `src/app/i18n.js`.
- Projectteksten staan in `src/app/projects.js`.

## Structuur

- `src/app/page.js` – laadt de pagina met de taalinstelling
- `src/app/Portfolio.js` – de pagina zelf (hero, over mij, werk, contact)
- `src/app/i18n.js` – alle vaste teksten in drie talen
- `src/app/LanguageContext.js` en `LanguageSwitcher.js` – de taalkeuze en de knop
- `src/app/projects.js` – alle projecten per categorie
- `src/app/ProjectGrid.js` – het raster en het venster dat opent bij een klik
- `src/app/ScrollToTop.js` – zorgt dat de pagina altijd bovenaan opent
- `src/app/icon.png`, `favicon.ico`, `opengraph-image.png` – favicon en deelpreview

Alle werk is persoonlijk of schoolwerk en niet voor commercieel gebruik.
