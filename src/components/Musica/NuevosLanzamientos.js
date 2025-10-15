import React from "react";

const NuevosLanzamientos = () => {
  const releases = [
    {
      title: "La Alergia",
      subtitle: "Single 2025",
      description:
        "Reggaetón oscuro con bajos analógicos y percusión old school. Una producción que combina energía tribal con toques digitales modernos.",
      links: [
        { text: "Escucha en SoundCloud", url: "#soundcloud", icon: "🎧" },
        { text: "Ver en YouTube", url: "#youtube", icon: "▶️" },
      ],
      cover: "/images/releases/la-alergia.jpg",
    },
    {
      title: "Cochinear",
      subtitle: "Intro 2025",
      description:
        'Versión oficial del intro emblemático de Cochinola Tour. Voces filtradas, drums agresivos y el sello inconfundible del evento más caliente del Perú.',
      links: [
        { text: "Escucha en Spotify", url: "#spotify", icon: "🎧" },
        { text: "Ver en vivo", url: "#live", icon: "🎥" },
      ],
      cover: "/images/releases/cochinear.jpg",
    },
    {
      title: "Mariposas",
      subtitle: "Club Edit",
      description:
        "Un jersey club edit con influencias urbanas y vocal chops etéreos. Diseñado para abrir la pista con elegancia y fuerza.",
      links: [{ text: "Escuchar ahora", url: "#listen", icon: "🎧" }],
      cover: "/images/releases/mariposas.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Nuevos Lanzamientos
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="aspect-square overflow-hidden bg-gray-700">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {release.title}
                </h3>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-purple-400">
                  {release.subtitle}
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  {release.description}
                </p>
                <div className="flex flex-col gap-3">
                  {release.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
                    >
                      <span>{link.icon}</span>
                      <span>{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuevosLanzamientos;
