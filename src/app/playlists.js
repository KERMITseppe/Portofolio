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
    url: "",
    title: { en: "Category 1", nl: "Categorie 1", fr: "Catégorie 1" },
    description: {
      en: "90–110 BPM",
      nl: "90–110 BPM",
      fr: "90–110 BPM",
    },
  },
  {
    id: "categorie-2",
    url: "",
    title: { en: "Category 2", nl: "Categorie 2", fr: "Catégorie 2" },
    description: {
      en: "111–130 BPM",
      nl: "111–130 BPM",
      fr: "111–130 BPM",
    },
  },
  {
    id: "categorie-3",
    url: "",
    title: { en: "Category 3", nl: "Categorie 3", fr: "Catégorie 3" },
    description: {
      en: "131–150 BPM",
      nl: "131–150 BPM",
      fr: "131–150 BPM",
    },
  },
  {
    id: "categorie-4",
    url: "",
    title: { en: "Category 4", nl: "Categorie 4", fr: "Catégorie 4" },
    description: {
      en: "151–170 BPM",
      nl: "151–170 BPM",
      fr: "151–170 BPM",
    },
  },
  {
    id: "categorie-5",
    url: "",
    title: { en: "Category 5", nl: "Categorie 5", fr: "Catégorie 5" },
    description: {
      en: "171–190 BPM",
      nl: "171–190 BPM",
      fr: "171–190 BPM",
    },
  },
];

// Maakt van een gewone Spotify-link een link voor de speler op de pagina.
// "https://open.spotify.com/playlist/ABC?si=xyz" → "https://open.spotify.com/embed/playlist/ABC"
export function spotifyEmbedUrl(url) {
  const match = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0` : null;
}
