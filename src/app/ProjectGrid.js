"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Raster met posters. Klik op een poster om hem groot te bekijken met uitleg.
export default function ProjectGrid({ projects, ratio }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % projects.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + projects.length) % projects.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, projects.length]);

  const p = open !== null ? projects[open] : null;

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, i) => (
          <li key={project.title}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full text-left cursor-pointer"
              aria-label={`Open ${project.title}`}
            >
              <div className={`relative ${ratio} overflow-hidden rounded-xl bg-[#1d1d1d]`}>
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-semibold text-black">
                    View project <i className="fa-solid fa-arrow-right text-xs" />
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <span className="text-sm text-white/50 tabular-nums">{project.year}</span>
              </div>
              <p className="text-sm text-white/50">{project.tools}</p>
            </button>
          </li>
        ))}
      </ul>

      {p && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={p.title}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl border border-white/10 bg-[#141414] md:grid-cols-[1.1fr_1fr] md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[55vh] bg-black md:h-[85vh]">
              <Image src={p.src} alt={p.title} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-contain" />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8 md:overflow-y-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {p.year} · {p.tools}
              </span>
              <h3 className="text-3xl font-extrabold leading-tight text-white">{p.title}</h3>
              <p className="leading-relaxed text-white/75">{p.description}</p>
              <div className="mt-auto flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen((open - 1 + projects.length) % projects.length)}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Previous project"
                >
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen((open + 1) % projects.length)}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Next project"
                >
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[var(--accent)] hover:text-black"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
