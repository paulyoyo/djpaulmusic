import React, { useState } from "react";

const ProximosShows = () => {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filters = ["Todas", "Sur", "Norte", "Selva"];

  const shows = [
    {
      city: "Arequipa",
      eventName: "Cochinola Tour 2025",
      venue: "Discoteca Élite",
      date: "Sábado 2 de Noviembre 2025",
      genre: "Reggaetón Old School / Nueva Escuela",
      ticketsUrl: "https://joinnus.com/djpaul-arequipa",
      description:
        'Vuelve la noche más esperada. Set exclusivo y estreno de "Intro Cochinola 2025".',
      region: "Sur",
      featured: true,
    },
    {
      city: "Trujillo",
      eventName: "Fiesta Presea",
      venue: "Club Ícono",
      date: "Viernes 15 de Noviembre 2025",
      genre: "Reggaetón & Club Mix Experience",
      ticketsUrl: "#",
      description:
        "Una noche para los fans del perreo fino. Grabación en vivo para canal oficial.",
      region: "Norte",
      featured: false,
    },
    {
      city: "Pucallpa",
      eventName: "Cochinola Amazon Edition",
      venue: "Club LUX",
      date: "Sábado 30 de Noviembre 2025",
      genre: "Tropical reggaetón + urban energy",
      ticketsUrl: "#",
      description:
        "Edición selvática con visuales y beats únicos creados para la selva.",
      region: "Selva",
      featured: false,
    },
  ];

  const filteredShows =
    activeFilter === "Todas"
      ? shows
      : shows.filter((show) => show.region === activeFilter);

  return (
    <section className="py-20 md:py-32" id="fechas">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Próximos Shows
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Event Cards */}
          <div className="space-y-6 lg:col-span-7">
            {filteredShows.map((show, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-102 hover:shadow-2xl ${
                  show.featured
                    ? "border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
                    : "bg-white"
                }`}
              >
                <div className="p-6 md:p-8">
                  {show.featured && (
                    <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-sm font-bold text-white">
                      ⭐ Destacado
                    </div>
                  )}
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                    {show.city} – {show.eventName}
                  </h3>

                  <div className="mb-6 space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <span className="text-xl">📍</span>
                      <span className="font-semibold">{show.venue}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">🗓️</span>
                      <span>{show.date}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">🎶</span>
                      <span className="font-medium">{show.genre}</span>
                    </p>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {show.description}
                  </p>

                  <a
                    href={show.ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
                  >
                    <span>🎟️</span>
                    <span>Comprar entradas vía Joinnus</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Map */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Mapa del Tour
              </h3>
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-700">
                {/* Map Placeholder */}
                <div className="flex h-full items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🗺️</div>
                    <p className="font-semibold">Mapa Interactivo de Perú</p>
                    <p className="text-sm">Ciudades destacadas del tour</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-300">Shows confirmados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                  <span className="text-sm text-gray-300">Próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Global */}
        <div className="mt-16 text-center">
          <a
            href="#todas-fechas"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>🎟️</span>
            <span>Ver todas las fechas confirmadas</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProximosShows;
