"use client";

import Image from "next/image";

const PHOTOS = [
  { src: "/soin-1.png", alt: "Pauline Odeyer – manipulation crânienne douce" },
  { src: "/soin-2.png", alt: "Pauline Odeyer – traitement cervical" },
  { src: "/soin-3.png", alt: "Pauline Odeyer – soin du dos" },
  { src: "/soin-4.png", alt: "Pauline Odeyer – traitement lombaire" },
  { src: "/soin-5.png", alt: "Pauline Odeyer – soin de l'épaule" },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 bg-offwhite overflow-hidden" aria-label="Galerie de soins">
      {/* Titre */}
      <div className="px-4 md:px-8 mb-10 text-center">
        <h2 className="text-3xl font-light text-gray-800 md:text-4xl">
          En séance
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
      </div>

      {/* Bande défilante infinie */}
      <div className="relative w-full">
        {/* Fondu gauche */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, #FAF8FC, transparent)" }}
          aria-hidden
        />
        {/* Fondu droit */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, #FAF8FC, transparent)" }}
          aria-hidden
        />

        {/* Piste défilante */}
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Deux séries pour boucle infinie */}
          {[...PHOTOS, ...PHOTOS].map((photo, i) => (
            <div
              key={i}
              className="relative shrink-0 w-72 h-96 rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="288px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay subtil au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
