import Image from "next/image";

export default function Page() {
  return (
    <div className="font-[Roboto] text-white bg-[#171717] min-h-screen p-4">
      <header className="font-bold text-2xl text-center my-3">
        <Image 
          src="/runningprod_logo.png" 
          alt="Website Logo" 
          width={200} 
          height={200} 
          className="rounded-4xl mx-auto mb-8" 
        />
        <h1>Running Productions</h1>
        <small className="text-gray-400">Seppe Rennen</small>
        <ul className="p-0 flex justify-center space-x-4 mt-4 text-xl">
          <li>
            <a href="mailto:rennen.seppe@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope text-3xl hover:transform hover:scale-110 transition-transform duration-200"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@rennenseppe" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube text-3xl hover:transform hover:scale-110 transition-transform duration-200"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/notseppes" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-3xl hover:transform hover:scale-110 transition-transform duration-200"></i>
            </a>
          </li>
        </ul>
      </header>

      <main className="p-4">
        <p className="text-center text-lg">
          Hello there, I am Seppe, student at Thomas More Mechelen, Belgium. <br />
          I&apos;m studying Media and Entertainment Business.
        </p>

        <div className="w-full mt-8 text-center">
          <h2 className="text-2xl font-bold">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 list-none p-0">
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/The_Velvet_Queen_03.jpg" 
                alt="The Velvet Queen" 
                width={500} 
                height={650} 
                className="mx-auto"
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">The Velvet Queen</p>
              <p>
                This fictional poster is a tribute to The Velvet Queen, inspired by the original movie poster. The background features an image from the documentary, which reinforces the film&apos;s visual identity. The text remains faithful to the original, using the elegant Mencken Std. typeface that perfectly matches the film&apos;s aesthetic.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/POSTER SAVIO_page-0001.jpg" 
                alt="Live Yourz" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Live Yourz</p>
              <p>
                A poster designed for the short film by Savio Golfa, inspired by the melancholic atmosphere of the film. The design visualizes the somber period of the main character through a recurring visual motif that runs as a common thread throughout the film. The visual identity reinforces the emotional narrative and emphasizes the dark themes explored in the film.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2025</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/Poster twisted A3_page-0001.jpg" 
                alt="Twisted" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Twisted</p>
              <p>
                Blank Poster is a hypnotic typographic artwork that plays with repetition and optical illusions. The word &quot;TWISTED&quot; forms a spiral that appears to spin infinitely, with a strong contrast between black and white. This minimalist design draws the viewer toward a central point that feels like a visual black hole. The work explores themes such as distortion, structure, and the power of words in a graphic context.
              </p>
              <p>Made with Adobe Photoshop – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/Poster Vormen.jpg" 
                alt="Poster Vormen" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Tangram Code</p>
              <p>
               Tangram Code is a geometric artwork that arranges numbers like a modern tangram puzzle. The clean grid suggests hidden patterns through stark black-and-white contrast. This minimalist piece plays with logic, sequence, and the visual rhythm of data, inviting the viewer to find meaning in simplicity.
              </p>
              <p>Made with Adobe Photoshop – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/Bauhaus.jpg" 
                alt="Bauhaus" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Bauhause</p>
              <p>
                This fictional poster is designed in the minimalist Bauhaus style, with a clean composition and ample white space. Centered is a stylized little jug, along with the title Bauhaus. The bottom of the design contains the exhibition information and date.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/JEF FESTIVAL.jpg" 
                alt="JEF FESTIVAL" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">JEF Poster</p>
              <p>
                A personal initiative designed for the JEF Youth Film Festival, inspired by their previous posters and house style. The design combines five unique shapes, using the three official JEF brand colors to maintain the visual identity.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2024</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-400">
        <small>Contact rennen.seppe@gmail.com | 2025 | Last update: 24/09/2025</small>
      </footer>
    </div>
  )
}