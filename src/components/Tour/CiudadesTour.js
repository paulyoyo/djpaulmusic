import React from "react";
import { Link } from "gatsby";

const CiudadesTour = () => {
  const cities = [
    { name: "Arequipa", slug: "arequipa", region: "Sur", featured: true },
    { name: "Trujillo", slug: "trujillo", region: "Norte", featured: true },
    { name: "Pucallpa", slug: "pucallpa", region: "Selva", featured: true },
    { name: "Piura", slug: "piura", region: "Norte", featured: false },
    { name: "Huancayo", slug: "huancayo", region: "Centro", featured: false },
    { name: "Cajamarca", slug: "cajamarca", region: "Norte", featured: false },
    { name: "Huánuco", slug: "huanuco", region: "Centro", featured: false },
    { name: "Chiclayo", slug: "chiclayo", region: "Norte", featured: false },
    { name: "Ica", slug: "ica", region: "Sur", featured: false },
    { name: "Moyobamba", slug: "moyobamba", region: "Selva", featured: false },
    { name: "Ilo", slug: "ilo", region: "Sur", featured: false },
    { name: "Moquegua", slug: "moquegua", region: "Sur", featured: false },
    { name: "Huacho", slug: "huacho", region: "Centro", featured: false },
    { name: "Iquitos", slug: "iquitos", region: "Selva", featured: false },
  ];

  const getRegionColor = (region) => {
    switch (region) {
      case "Sur":
        return "from-purple-600 to-purple-700";
      case "Norte":
        return "from-pink-600 to-pink-700";
      case "Centro":
        return "from-blue-600 to-blue-700";
      case "Selva":
        return "from-green-600 to-green-700";
      default:
        return "from-gray-600 to-gray-700";
    }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Ciudades del Tour
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-700 md:text-xl">
          Este tour conecta todo el Perú.
          <br />
          Descubre cómo vibra cada ciudad, revive sus momentos y siente el sonido
          que las une.
        </p>

        {/* Interactive City Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((city, index) => (
            <Link
              key={index}
              to={`/shows/${city.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${getRegionColor(
                city.region
              )} p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                city.featured ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {/* Featured Badge */}
              {city.featured && (
                <div className="absolute right-4 top-4">
                  <span className="text-2xl">⭐</span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-2 text-2xl font-bold">{city.name}</h3>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide opacity-80">
                  {city.region}
                </p>

                {/* Icon */}
                <div className="mb-4 text-4xl opacity-70">📍</div>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Ver eventos</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white blur-2xl"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Region Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700"></div>
            <span className="text-sm font-semibold text-gray-700">Sur</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-pink-600 to-pink-700"></div>
            <span className="text-sm font-semibold text-gray-700">Norte</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <span className="text-sm font-semibold text-gray-700">Centro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-green-600 to-green-700"></div>
            <span className="text-sm font-semibold text-gray-700">Selva</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/ciudades"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-xl"
          >
            <span>🗺️</span>
            <span>Explora cada ciudad del tour</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CiudadesTour;
