import React from "react";

const HappeningsConceptos = () => {
  const editions = [
    {
      year: "2023",
      name: "Euforia",
      icon: "🩶",
      description: "Performance sobre la pérdida del control en la pista.",
      image: "/images/cochinola/euforia-2023.jpg",
    },
    {
      year: "2024",
      name: "Deseo",
      icon: "💋",
      description: "Exploración del cuerpo y la mirada femenina.",
      image: "/images/cochinola/deseo-2024.jpg",
    },
    {
      year: "2025",
      name: "Caos",
      icon: "🔥",
      description: "Beats industriales, luces rojas y visuales glitch.",
      image: "/images/cochinola/caos-2025.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Happenings &<br />Conceptos Escénicos
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700 md:text-xl">
          Cada edición de Cochinola tiene una{" "}
          <span className="font-bold text-purple-600">
            temática visual y escénica distinta
          </span>
          : desde reinterpretaciones del cine latino, hasta símbolos del deseo y
          la cultura popular.
        </p>

        {/* Full-width Image Gallery with Paragraphs */}
        <div className="space-y-16">
          {editions.map((edition, index) => (
            <div key={index} className={index % 2 === 0 ? "" : "lg:flex-row-reverse"}>
              {/* Image */}
              <div className="mb-8 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={edition.image}
                  alt={`Cochinola ${edition.name} ${edition.year}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Edition Info */}
              <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white">
                  <span className="text-3xl">{edition.icon}</span>
                  <span className="text-xl font-bold">
                    "{edition.name} {edition.year}"
                  </span>
                </div>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
                  {edition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Text */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center md:p-12">
          <p className="text-xl font-medium leading-relaxed text-gray-800 md:text-2xl">
            Los happenings combinan{" "}
            <span className="font-bold text-purple-600">coreografía</span>,{" "}
            <span className="font-bold text-pink-600">arte visual</span> y{" "}
            <span className="font-bold text-orange-600">música creada especialmente</span> para el momento.
            <br />
            Son el puente entre lo teatral y lo callejero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HappeningsConceptos;
