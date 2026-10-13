// Alle projecten, gegroepeerd per categorie, met teksten in het Engels (en),
// Nederlands (nl) en Frans (fr).
// Een nieuw project toevoegen = één object toevoegen aan de juiste lijst,
// met een beschrijving in alle drie de talen.

export const categories = [
  {
    id: "music",
    ratio: "aspect-[9/16]",
    title: {
      en: "Music Tribute Posters",
      nl: "Tributeposters voor muzikanten",
      fr: "Affiches hommage à des musiciens",
    },
    intro: {
      en: "A 2026 series of tribute posters for artists whose style and words shaped mine.",
      nl: "Een reeks posters uit 2026 als eerbetoon aan artiesten wier stijl en woorden de mijne hebben gevormd.",
      fr: "Une série d'affiches de 2026 en hommage aux artistes dont le style et les mots ont façonné les miens.",
    },
    projects: [
      {
        title: "A$AP Rocky",
        src: "/work/asap-rocky.webp",
        year: "2026",
        tools: "Photoshop · Illustrator",
        description: {
          en: "This tribute poster captures the raw fashion, attitude, and visual identity of A$AP Rocky. The design combines striking high-contrast black-and-white photography with bold, oversized yellow typography layered across the composition. By integrating his iconic quote on fashion and emotion, the artwork highlights the intersection between music, personal style, and graphic design.",
          nl: "Deze tributeposter brengt de rauwe mode, attitude en visuele identiteit van A$AP Rocky in beeld. Het ontwerp combineert opvallende, contrastrijke zwart-witfotografie met grote, gele typografie die in lagen over de compositie loopt. Door zijn bekende citaat over mode en emotie te verwerken, toont het werk waar muziek, persoonlijke stijl en grafisch ontwerp elkaar raken.",
          fr: "Cette affiche hommage saisit la mode brute, l'attitude et l'identité visuelle d'A$AP Rocky. Le design associe une photographie noir et blanc très contrastée à une typographie jaune surdimensionnée, superposée sur toute la composition. En intégrant sa célèbre citation sur la mode et l'émotion, l'œuvre met en lumière le point de rencontre entre la musique, le style personnel et le graphisme.",
        },
      },
      {
        title: "Tyler, The Creator",
        src: "/work/tyler-the-creator.webp",
        year: "2026",
        tools: "Photoshop · Illustrator",
        description: {
          en: "This tribute poster reflects the eccentric and creative world of Tyler, The Creator. The layout pairs a high-contrast black-and-white portrait with playful, distinctive vintage typography against a soft blue background. Featuring his impactful quote on individuality and world-building, the design captures his unique crossover between hip-hop, fashion, and alternative art.",
          nl: "Deze tributeposter weerspiegelt de excentrieke en creatieve wereld van Tyler, The Creator. De lay-out combineert een contrastrijk zwart-witportret met speelse, kenmerkende vintagetypografie op een zachtblauwe achtergrond. Met zijn krachtige citaat over individualiteit en het bouwen van je eigen wereld vat het ontwerp zijn unieke mix van hiphop, mode en alternatieve kunst samen.",
          fr: "Cette affiche hommage reflète l'univers excentrique et créatif de Tyler, The Creator. La mise en page associe un portrait noir et blanc très contrasté à une typographie vintage ludique et singulière, sur un fond bleu doux. Avec sa citation marquante sur l'individualité et la création de son propre univers, le design saisit son mélange unique de hip-hop, de mode et d'art alternatif.",
        },
      },
      {
        title: "Jeff Buckley",
        src: "/work/jeff-buckley.webp",
        year: "2026",
        tools: "Photoshop · Illustrator",
        description: {
          en: "This tribute poster honors the emotional depth and raw artistic nature of Jeff Buckley. The design combines a black-and-white portrait with deep burgundy typography against a soft lavender backdrop. By incorporating his poetic quote on sensitivity and awareness, the artwork captures the vulnerable yet powerful essence of his music and legacy.",
          nl: "Deze tributeposter eert de emotionele diepgang en de rauwe artistieke aard van Jeff Buckley. Het ontwerp combineert een zwart-witportret met diep bordeauxrode typografie op een zachte lavendelkleurige achtergrond. Door zijn poëtische citaat over gevoeligheid en bewustzijn te verwerken, vangt het werk de kwetsbare maar krachtige essentie van zijn muziek en zijn nalatenschap.",
          fr: "Cette affiche hommage célèbre la profondeur émotionnelle et la sensibilité artistique brute de Jeff Buckley. Le design associe un portrait noir et blanc à une typographie bordeaux profond sur un fond lavande doux. En intégrant sa citation poétique sur la sensibilité et la conscience, l'œuvre saisit l'essence à la fois vulnérable et puissante de sa musique et de son héritage.",
        },
      },
    ],
  },
  {
    id: "film",
    ratio: "aspect-[5/7]",
    title: {
      en: "Film & Festival Posters",
      nl: "Film- en festivalposters",
      fr: "Affiches de films et de festivals",
    },
    intro: {
      en: "Posters for films and festivals, built around the mood of the story.",
      nl: "Posters voor films en festivals, opgebouwd rond de sfeer van het verhaal.",
      fr: "Des affiches pour des films et des festivals, construites autour de l'atmosphère de l'histoire.",
    },
    projects: [
      {
        title: "Live Yourz",
        src: "/work/live-yourz.webp",
        year: "2025",
        tools: "Photoshop · Illustrator",
        description: {
          en: "A poster designed for the short film by Savio Golfa, inspired by the melancholic atmosphere of the film. The design visualizes the somber period of the main character through a recurring visual motif that runs as a common thread throughout the film. The visual identity reinforces the emotional narrative and emphasizes the dark themes explored in the film.",
          nl: "Een poster voor de kortfilm van Savio Golfa, geïnspireerd door de melancholische sfeer van de film. Het ontwerp verbeeldt de sombere periode van het hoofdpersonage via een terugkerend visueel motief dat als een rode draad door de film loopt. De visuele identiteit versterkt het emotionele verhaal en benadrukt de donkere thema's van de film.",
          fr: "Une affiche conçue pour le court métrage de Savio Golfa, inspirée par l'atmosphère mélancolique du film. Le design illustre la période sombre du personnage principal à travers un motif visuel récurrent, véritable fil conducteur du film. L'identité visuelle renforce le récit émotionnel et souligne les thèmes sombres abordés dans le film.",
        },
      },
      {
        title: "The Velvet Queen",
        src: "/work/the-velvet-queen.webp",
        year: "2024",
        tools: "Photoshop · Illustrator",
        description: {
          en: "This fictional poster is a tribute to The Velvet Queen, inspired by the original movie poster. The background features an image from the documentary, which reinforces the film's visual identity. The text remains faithful to the original, using the elegant Mencken Std. typeface that perfectly matches the film's aesthetic.",
          nl: "Deze fictieve poster is een eerbetoon aan The Velvet Queen, geïnspireerd door de originele filmposter. Op de achtergrond staat een beeld uit de documentaire, wat de visuele identiteit van de film versterkt. De tekst blijft trouw aan het origineel en gebruikt het elegante lettertype Mencken Std., dat perfect past bij de esthetiek van de film.",
          fr: "Cette affiche fictive rend hommage à The Velvet Queen (La Panthère des neiges), en s'inspirant de l'affiche originale du film. L'arrière-plan reprend une image du documentaire, ce qui renforce l'identité visuelle du film. Le texte reste fidèle à l'original et utilise l'élégante police Mencken Std., parfaitement en accord avec l'esthétique du film.",
        },
      },
      {
        title: "JEF Festival",
        src: "/work/jef-festival.webp",
        year: "2024",
        tools: "Photoshop · Illustrator",
        description: {
          en: "A personal initiative designed for the JEF Youth Film Festival, inspired by their previous posters and house style. The design combines five unique shapes, using the three official JEF brand colors to maintain the visual identity.",
          nl: "Een eigen initiatief voor het jeugdfilmfestival JEF, geïnspireerd door hun eerdere posters en huisstijl. Het ontwerp combineert vijf unieke vormen in de drie officiële huiskleuren van JEF, zodat de visuele identiteit behouden blijft.",
          fr: "Une initiative personnelle conçue pour le festival de cinéma jeunesse JEF, inspirée de ses affiches précédentes et de sa charte graphique. Le design combine cinq formes uniques dans les trois couleurs officielles de JEF, afin de préserver l'identité visuelle du festival.",
        },
      },
    ],
  },
  {
    id: "type",
    ratio: "aspect-[5/7]",
    title: {
      en: "Typography & Experimental",
      nl: "Typografie & experimenteel werk",
      fr: "Typographie & expérimentations",
    },
    intro: {
      en: "Studies in type, shape, contrast and rhythm.",
      nl: "Studies in letters, vorm, contrast en ritme.",
      fr: "Des études de lettres, de formes, de contraste et de rythme.",
    },
    projects: [
      {
        title: "Twisted",
        src: "/work/twisted.webp",
        year: "2024",
        tools: "Photoshop",
        description: {
          en: "A hypnotic typographic artwork that plays with repetition and optical illusions. The word “TWISTED” forms a spiral that appears to spin infinitely, with a strong contrast between black and white. This minimalist design draws the viewer toward a central point that feels like a visual black hole. The work explores themes such as distortion, structure, and the power of words in a graphic context.",
          nl: "Een hypnotiserend typografisch werk dat speelt met herhaling en optische illusies. Het woord “TWISTED” vormt een spiraal die eindeloos lijkt te draaien, met een sterk contrast tussen zwart en wit. Dit minimalistische ontwerp trekt de kijker naar een centraal punt dat aanvoelt als een visueel zwart gat. Het werk verkent thema's als vervorming, structuur en de kracht van woorden in een grafische context.",
          fr: "Une œuvre typographique hypnotique qui joue avec la répétition et les illusions d'optique. Le mot « TWISTED » forme une spirale qui semble tourner à l'infini, avec un fort contraste entre le noir et le blanc. Ce design minimaliste attire le regard vers un point central qui évoque un trou noir visuel. L'œuvre explore des thèmes comme la distorsion, la structure et la force des mots dans un contexte graphique.",
        },
      },
      {
        title: "Tangram Code",
        src: "/work/tangram-code.webp",
        year: "2024",
        tools: "Photoshop",
        description: {
          en: "Tangram Code is a geometric artwork that arranges numbers like a modern tangram puzzle. The clean grid suggests hidden patterns through stark black-and-white contrast. This minimalist piece plays with logic, sequence, and the visual rhythm of data, inviting the viewer to find meaning in simplicity.",
          nl: "Tangram Code is een geometrisch werk dat cijfers schikt als een moderne tangrampuzzel. Het strakke raster suggereert verborgen patronen via een uitgesproken zwart-witcontrast. Dit minimalistische werk speelt met logica, volgorde en het visuele ritme van data, en nodigt de kijker uit om betekenis te vinden in eenvoud.",
          fr: "Tangram Code est une œuvre géométrique qui agence des chiffres à la manière d'un tangram moderne. La grille épurée suggère des motifs cachés grâce à un contraste marqué entre le noir et le blanc. Cette création minimaliste joue avec la logique, la séquence et le rythme visuel des données, et invite le spectateur à trouver du sens dans la simplicité.",
        },
      },
      {
        title: "Bauhaus",
        src: "/work/bauhaus.webp",
        year: "2024",
        tools: "Photoshop · Illustrator",
        description: {
          en: "This fictional poster is designed in the minimalist Bauhaus style, with a clean composition and ample white space. At its center is a stylized teapot, with the title Bauhaus above it. The exhibition details and dates sit at the bottom of the design.",
          nl: "Deze fictieve poster is ontworpen in de minimalistische Bauhausstijl, met een strakke compositie en veel witruimte. In het midden staat een gestileerde theepot, met daarboven de titel Bauhaus. Onderaan staan de praktische info en de data van de tentoonstelling.",
          fr: "Cette affiche fictive est conçue dans le style minimaliste du Bauhaus, avec une composition épurée et de généreux espaces blancs. Au centre figure une théière stylisée, surmontée du titre Bauhaus. Les informations et les dates de l'exposition se trouvent en bas de l'affiche.",
        },
      },
    ],
  },
];
