// Alle vaste teksten van de website in drie talen.
// Teksten van de projecten zelf staan in projects.js.
// Tip: een tekst aanpassen? Doe het in alle drie de talen.

export const DEFAULT_LANG = "en";

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "fr", label: "FR", name: "Français" },
];

const NBSP = " "; // vaste spatie, nodig in het Frans vóór ! ? : ;

export const ui = {
  en: {
    metaTitle: "Seppe Rennen · Portfolio 2026",
    nav: { work: "Work", about: "About", school: "School", schoolCta: "School · Spotify playlists", contact: "Contact", language: "Choose language" },
    hero: {
      role: "Graphic Designer",
      tagline: "Posters, typography and visual identities, made in Mechelen, Belgium.",
      cta: "See the work",
    },
    about: {
      hello: "Hello!",
      bio: "I'm Seppe, a student at Thomas More Mechelen, Belgium, studying Media and Entertainment Business. Under the name Running Productions, I design posters and typographic work, from film posters to tributes to the artists who inspire me.",
    },
    info: {
      education: "Education",
      programme: "Media and Entertainment Business",
      school: "Thomas More, Mechelen",
      software: "Adobe software",
      make: "What I make",
      makeItems: ["Film & event posters", "Music tribute posters", "Typography & experimental work"],
    },
    work: {
      view: "View project",
      notCommercial: "Not for commercial use",
      open: "Open",
      previous: "Previous project",
      next: "Next project",
      close: "Close",
    },
    school: {
      back: "Portfolio",
      kicker: "School · Spotify",
      title: "Playlists",
      intro: "Open the playlists on your phone and save them to your own Spotify, so you can listen whenever you like.",
      howTitle: "Save to your own Spotify",
      howSteps: [
        "Tap “Open in Spotify”. The Spotify app opens on your phone.",
        "Tap the + icon (or ··· → Add to Your Library).",
        "Done: you'll find the playlist under Your Library.",
      ],
      open: "Open in Spotify",
      soon: "Available soon",
    },
    closing: { before: "Let's make something", accent: "together." },
    footer: {
      disclaimer:
        "All work is personal or student work and not for commercial use. Portraits in the tribute posters belong to their respective photographers.",
    },
  },

  nl: {
    metaTitle: "Seppe Rennen · Portfolio 2026",
    nav: { work: "Werk", about: "Over mij", school: "School", schoolCta: "School · Spotify playlists", contact: "Contact", language: "Kies een taal" },
    hero: {
      role: "Grafisch ontwerper",
      tagline: "Posters, typografie en visuele identiteiten, gemaakt in Mechelen.",
      cta: "Bekijk mijn werk",
    },
    about: {
      hello: "Hallo!",
      bio: "Ik ben Seppe, student Media and Entertainment Business aan Thomas More in Mechelen. Onder de naam Running Productions ontwerp ik posters en typografisch werk, van filmposters tot eerbetonen aan de artiesten die mij inspireren.",
    },
    info: {
      education: "Opleiding",
      programme: "Media and Entertainment Business",
      school: "Thomas More, Mechelen",
      software: "Adobe-software",
      make: "Wat ik maak",
      makeItems: ["Film- en eventposters", "Tributeposters voor muzikanten", "Typografie en experimenteel werk"],
    },
    work: {
      view: "Bekijk project",
      notCommercial: "Niet voor commercieel gebruik",
      open: "Openen",
      previous: "Vorig project",
      next: "Volgend project",
      close: "Sluiten",
    },
    school: {
      back: "Portfolio",
      kicker: "School · Spotify",
      title: "Playlists",
      intro: "Open de playlists op je gsm en sla ze op in je eigen Spotify, zodat je ze altijd kunt beluisteren.",
      howTitle: "Opslaan in je eigen Spotify",
      howSteps: [
        "Tik op ‘Openen in Spotify’. De Spotify-app gaat open op je gsm.",
        "Tik op het +-icoon (of ··· → Toevoegen aan je bibliotheek).",
        "Klaar: je vindt de playlist terug onder Jouw bibliotheek.",
      ],
      open: "Openen in Spotify",
      soon: "Binnenkort beschikbaar",
    },
    closing: { before: "Laten we samen iets", accent: "moois maken." },
    footer: {
      disclaimer:
        "Al het werk is persoonlijk werk of schoolwerk en niet bedoeld voor commercieel gebruik. De portretten in de tributeposters behoren toe aan hun respectieve fotografen.",
    },
  },

  fr: {
    metaTitle: "Seppe Rennen · Portfolio 2026",
    nav: { work: "Projets", about: "À propos", school: "École", schoolCta: "École · Playlists Spotify", contact: "Contact", language: "Choisir la langue" },
    hero: {
      role: "Graphiste",
      tagline: "Affiches, typographie et identités visuelles, créées à Malines, en Belgique.",
      cta: "Voir mes projets",
    },
    about: {
      hello: `Bonjour${NBSP}!`,
      bio: "Je m'appelle Seppe et je suis étudiant en Media and Entertainment Business à Thomas More, à Malines (Belgique). Sous le nom de Running Productions, je conçois des affiches et des créations typographiques, des affiches de films aux hommages aux artistes qui m'inspirent.",
    },
    info: {
      education: "Formation",
      programme: "Media and Entertainment Business",
      school: "Thomas More, Malines",
      software: "Logiciels Adobe",
      make: "Ce que je crée",
      makeItems: [
        "Affiches de films et d'événements",
        "Affiches hommage à des musiciens",
        "Typographie et travaux expérimentaux",
      ],
    },
    work: {
      view: "Voir le projet",
      notCommercial: "Usage non commercial",
      open: "Ouvrir",
      previous: "Projet précédent",
      next: "Projet suivant",
      close: "Fermer",
    },
    school: {
      back: "Portfolio",
      kicker: "École · Spotify",
      title: "Playlists",
      intro: "Ouvre les playlists sur ton téléphone et enregistre-les dans ton propre Spotify pour les écouter quand tu veux.",
      howTitle: "Enregistrer dans ton Spotify",
      howSteps: [
        "Touche « Ouvrir dans Spotify ». L'app Spotify s'ouvre sur ton téléphone.",
        "Touche l'icône + (ou ··· → Ajouter à la bibliothèque).",
        "C'est fait : la playlist se trouve dans Bibliothèque.",
      ],
      open: "Ouvrir dans Spotify",
      soon: "Bientôt disponible",
    },
    closing: { before: "Créons quelque chose", accent: "ensemble." },
    footer: {
      disclaimer:
        "Toutes les créations sont des projets personnels ou scolaires et ne sont pas destinées à un usage commercial. Les portraits utilisés dans les affiches hommage appartiennent à leurs photographes respectifs.",
    },
  },
};
