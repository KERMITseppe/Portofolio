// Spotify-playlists voor de pagina /school.
//
// LINK TOEVOEGEN:
// 1. Open de playlist in Spotify → ··· → Delen → Link naar playlist kopiëren.
// 2. Plak die link tussen de aanhalingstekens bij `url`.
//    Voorbeeld: url: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
// 3. Pas de titel en beschrijving aan (in alle drie de talen).
//
// Zolang `url` leeg is (""), toont de site "Binnenkort beschikbaar".
// Meer playlists nodig? Kopieer een blok { ... }, en geef het een nieuwe id.

export const playlists = [
  {
    id: "categorie-1",
    url: "https://open.spotify.com/playlist/5dP1N2GQBmC92wVxzSesS4",
    title: { en: "90–110 BPM", nl: "90–110 BPM", fr: "90–110 BPM" },
    description: { en: "", nl: "", fr: "" },
  },
  {
    id: "categorie-2",
    url: "https://open.spotify.com/playlist/1mYcsTVRDqndToLxEb8NWp",
    title: { en: "111–130 BPM", nl: "111–130 BPM", fr: "111–130 BPM" },
    description: { en: "", nl: "", fr: "" },
  },
  {
    id: "categorie-3",
    url: "https://open.spotify.com/playlist/0YyFcrSuMrpHH58fcH0k9M",
    title: { en: "131–150 BPM", nl: "131–150 BPM", fr: "131–150 BPM" },
    description: { en: "", nl: "", fr: "" },
  },
  {
    id: "categorie-4",
    url: "https://open.spotify.com/playlist/6ORIPqhWOGWEl8bF0GIJbQ",
    title: { en: "151–170 BPM", nl: "151–170 BPM", fr: "151–170 BPM" },
    description: { en: "", nl: "", fr: "" },
  },
  {
    id: "categorie-5",
    url: "https://open.spotify.com/playlist/3dkPiro4g03i0uqwZnKeHI",
    title: { en: "171–190 BPM", nl: "171–190 BPM", fr: "171–190 BPM" },
    description: { en: "", nl: "", fr: "" },
  },
];

// Maakt van een gewone Spotify-link een link voor de speler op de pagina.
// "https://open.spotify.com/playlist/ABC?si=xyz" → "https://open.spotify.com/embed/playlist/ABC"
export function spotifyEmbedUrl(url) {
  const match = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0` : null;
}
