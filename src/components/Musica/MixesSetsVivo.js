import React, { useState } from "react";

const MixesSetsVivo = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Old School", "Live", "New 2025"];

  const sets = [
    {
      title: "Set Cochinola Arequipa 2025",
      subtitle: "Live",
      description:
        "Una noche completa de reggaetón old school mezclado con los nuevos hits del 2025. Grabado en la discoteca Élite, con energía a 120 bpm.",
      tags: ["Live", "Old School", "New 2025"],
      links: [
        { text: "Ver video completo", url: "#video", icon: "🎥" },
        { text: "Escuchar mix", url: "#listen", icon: "🎧" },
      ],
      embedUrl: "https://www.youtube.com/embed/example1",
    },
    {
      title: "Presea Trujillo",
      subtitle: "Special Edition",
      description:
        "Set grabado en vivo durante el tour Presea. Mezcla de reggaetón nuevo, trap y momentos de nostalgia musical.",
      tags: ["Live", "New 2025"],
      links: [{ text: "Play on SoundCloud", url: "#soundcloud", icon: "🎧" }],
      embedUrl: "https://soundcloud.com/example2",
    },
    {
      title: "Perreo Sessions Vol.2",
      subtitle: "Studio Mix",
      description:
        "Grabado en estudio, este mix une clásicos de Don Omar, Zion & Lennox con producciones modernas. Ideal para entrenar, bailar o recordar.",
      tags: ["Old School"],
      links: [{ text: "Escuchar ahora", url: "#listen", icon: "🎧" }],
      embedUrl: "https://www.youtube.com/embed/example3",
    },
  ];

  const filteredSets =
    activeFilter === "All"
      ? sets
      : sets.filter((set) => set.tags.includes(activeFilter));

  return (
    <section className="bg-gray-900 py-20 text-white md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column - Text */}
          <div className="lg:col-span-5">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Mixes & Sets<br />en Vivo
            </h2>
            <div className="mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              Cada mix es una historia. Grabados en vivo durante giras y fiestas
              en provincias, estos sets capturan la energía real del público, el
              calor, y la esencia de Cochinola.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Sets List */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {filteredSets.map((set, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="mb-1 text-2xl font-bold">{set.title}</h3>
                        <p className="text-sm font-semibold uppercase tracking-wide text-pink-400">
                          {set.subtitle}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {set.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-semibold text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-gray-300">
                      {set.description}
                    </p>

                    {/* Embedded Player Placeholder */}
                    <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-700">
                      <div className="flex h-full items-center justify-center text-gray-500">
                        [Embedded Player: {set.embedUrl}]
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {set.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 font-semibold transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
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
        </div>
      </div>
    </section>
  );
};

export default MixesSetsVivo;
