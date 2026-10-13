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
2. Voeg een project toe aan de juiste categorie in `src/app/projects.js` (titel, afbeelding, jaar, tools, beschrijving).

## Structuur

- `src/app/page.js` – de pagina (hero, over mij, werk, contact)
- `src/app/projects.js` – alle projecten per categorie
- `src/app/ProjectGrid.js` – het raster en het venster dat opent bij een klik
- `src/app/ScrollToTop.js` – zorgt dat de pagina altijd bovenaan opent
- `src/app/icon.png`, `favicon.ico`, `opengraph-image.png` – favicon en deelpreview

Alle werk is persoonlijk of schoolwerk en niet voor commercieel gebruik.
