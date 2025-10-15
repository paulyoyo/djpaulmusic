import React from "react";

const DJSetDiscotecas = () => {
  const features = [
    "DJ set 100% en vivo (sin playlists)",
    "Visuales personalizados (opcional)",
    "Show sincronizado con iluminación",
    "Intro musical exclusiva del evento (si se solicita)",
  ];

  return (
    <section className="bg-gray-900 py-20 text-white md:py-32" id="discotecas">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          DJ Set para<br />Discotecas & Eventos
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Two-Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Photo/Video */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/servicios/djpaul-performing.jpg"
              alt="DJ Paul performing at club"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-purple-600 px-4 py-2 text-sm font-bold">
              MI SERVICIO PRINCIPAL
            </div>

            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Sets de{" "}
              <span className="font-bold text-white">reggaetón y música urbana</span>{" "}
              diseñados específicamente para discotecas, festivales y eventos
              nocturnos.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Cada presentación se adapta al público local y al concepto del
              evento, manteniendo la pista encendida toda la noche.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Ideal para promotores o dueños de locales que buscan una experiencia
              de alto nivel y un DJ con puesta escénica completa.
            </p>

            {/* Includes List */}
            <div className="border-t border-white/20 pt-8">
              <h3 className="mb-4 text-xl font-bold">Incluye:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>📩</span>
                <span>Solicita disponibilidad para tu ciudad</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJSetDiscotecas;
