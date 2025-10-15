import React from "react";

const DJBodas = () => {
  const features = [
    "Música segmentada por momentos (coctel, cena, baile, fiesta)",
    "Reunión previa para definir estilo y setlist",
    "Equipos de sonido y luces (opcional)",
    "Cobertura: Lima, Trujillo y Arequipa",
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-20 md:py-32" id="bodas">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          DJ para Bodas
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Two-Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Hago que la música de tu boda se convierta en historia.
            </p>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <p className="mb-4 font-bold text-gray-900">Ofrezco dos formatos:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-2xl">1️⃣</span>
                  <div>
                    <p className="font-semibold text-purple-600">DJ Paul en persona</p>
                    <p className="text-sm text-gray-600">
                      Ideal para bodas grandes y temáticas urbanas o elegantes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-2xl">2️⃣</span>
                  <div>
                    <p className="font-semibold text-pink-600">DJ del staff de DJ Paul</p>
                    <p className="text-sm text-gray-600">
                      Con curaduría, entrenamiento y estilo musical supervisado
                      directamente por mí.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Características:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-600">♥</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>💌</span>
                <span>Cotizar tu boda con DJ Paul o su staff</span>
              </a>
            </div>
          </div>

          {/* Right: Photo with Testimonial Overlay */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/servicios/wedding-dancefloor.jpg"
                alt="Wedding dance floor with DJ Paul"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Testimonial Overlay */}
            <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
              <p className="mb-2 italic text-gray-700">
                "Nuestro matrimonio fue una locura, cada momento tuvo su canción
                perfecta."
              </p>
              <p className="text-sm font-semibold text-purple-600">
                — Carla & Diego, Trujillo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJBodas;
