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
                A recreation of a poster of the movie &apos;The Velvet Queen&apos; from Vincent Munier and Marie Amiguet. The picture used is from a scene in the movie.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/POSTER_SAVIO_page-0001.jpg" 
                alt="Live Yourz" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Live Yourz</p>
              <p>
                A poster made for the short movie of Savio Golfa. The poster represents the somber times of the character, with a picture that can be found throughout the movie.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2025</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/Poster_twisted_A3_page-0001.jpg" 
                alt="Twisted" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Twisted</p>
              <p>
                A poster that was made around the word &apos;Twisted&apos;. The photo represents a repeating of words in a circle that twist down to the middle.
              </p>
              <p>Made with Adobe Photoshop – 2024</p>
            </li>
            <li className="flex flex-col items-center gap-4">
              <Image 
                src="/template_cover.jpg" 
                alt="Album Cover" 
                width={500} 
                height={650} 
                className="mx-auto" 
              />
              <p className="text-[rgb(83,83,255)] text-xl font-bold">Album Cover</p>
              <p>
                Album Cover is een minimalistisch grafisch ontwerp dat tekst en abstracte geometrische vormen combineert. Met een focus op balans en ritme creëert het een elegante, tijdloze esthetiek die perfect past bij een albumcover.
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
                Deze fictieve poster is ontworpen in de minimalistische Bauhause-stijl, met strakke compositie en veel witruimte. Centraal staat een gestileerd kannetje, samen met de titel Bauhaus. Onderaan bevat het ontwerp de tentoonstellinginformatie en datum.
              </p>
              <p>Made with Adobe Photoshop and Adobe Illustrator – 2024</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-400">
        <small>Contact rennen.seppe@gmail.com | 2025</small>
      </footer>
    </div>
  )
}