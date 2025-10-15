import React from "react";

const GaleriaTour = () => {
  const photos = [
    {
      src: "/images/gallery/arequipa-booth.jpg",
      caption: "Cabina con luces estroboscópicas",
      city: "Arequipa",
      date: "Oct 2025",
      tall: true,
    },
    {
      src: "/images/gallery/pucallpa-crowd.jpg",
      caption: "Público con pintura / agua",
      city: "Pucallpa",
      date: "Nov 2025",
      tall: false,
    },
    {
      src: "/images/gallery/trujillo-saludo.jpg",
      caption: "DJ Paul saludando a la multitud",
      city: "Trujillo",
      date: "Nov 2025",
      tall: false,
    },
    {
      src: "/images/gallery/backstage.jpg",
      caption: "Vista de backstage y monitores",
      city: "Lima",
      date: "Sep 2025",
      tall: true,
    },
    {
      src: "/images/gallery/crowd-lights.jpg",
      caption: "Energía pura en la pista",
      city: "Arequipa",
      date: "Oct 2025",
      tall: false,
    },
    {
      src: "/images/gallery/mixing.jpg",
      caption: "En plena mezcla",
      city: "Trujillo",
      date: "Nov 2025",
      tall: false,
    },
  ];

  return (
    <section className="bg-black py-20 text-white md:py-32">
      <div className="container max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Galería del Tour
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
          Cada ciudad vibra distinto.
          <br />
          Desde los bajos profundos en Arequipa hasta la euforia de Piura, estas
          son imágenes reales del tour — sin filtros, sin guión.
        </p>

        {/* Masonry-style Gallery */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Caption Info */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
                <div className="mb-2 flex gap-2">
                  <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold">
                    {photo.city}
                  </span>
                  <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold">
                    {photo.date}
                  </span>
                </div>
                <p className="text-lg font-semibold">📸 {photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Indicator */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
            <span>↓</span>
            <span>Cargar más fotos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaTour;
