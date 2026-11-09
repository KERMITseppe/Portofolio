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
    id: "playlist-1",
    url: "",
    title: { en: "Playlist 1", nl: "Playlist 1", fr: "Playlist 1" },
    description: {
      en: "Description follows soon.",
      nl: "Beschrijving volgt binnenkort.",
      fr: "Description à venir.",
    },
  },
  {
    id: "playlist-2",
    url: "",
    title: { en: "Playlist 2", nl: "Playlist 2", fr: "Playlist 2" },
    description: {
      en: "Description follows soon.",
      nl: "Beschrijving volgt binnenkort.",
      fr: "Description à venir.",
    },
  },
  {
    id: "playlist-3",
    url: "",
    title: { en: "Playlist 3", nl: "Playlist 3", fr: "Playlist 3" },
    description: {
      en: "Description follows soon.",
      nl: "Beschrijving volgt binnenkort.",
      fr: "Description à venir.",
    },
  },
];

// Maakt van een gewone Spotify-link een link voor de speler op de pagina.
// "https://open.spotify.com/playlist/ABC?si=xyz" → "https://open.spotify.com/embed/playlist/ABC"
export function spotifyEmbedUrl(url) {
  const match = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0` : null;
}
