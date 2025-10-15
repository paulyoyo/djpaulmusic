import React from "react";

const BehindTour = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 text-white md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Behind the Tour /<br />Producción en Movimiento
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Horizontal Split Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Photo */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/tour/backstage-equipment.jpg"
                alt="Backstage - Producción del tour"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Small gallery below */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/tour/setup-1.jpg"
                  alt="Setup 1"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/tour/setup-2.jpg"
                  alt="Setup 2"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/tour/setup-3.jpg"
                  alt="Setup 3"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              <p>
                Detrás de cada fecha hay una{" "}
                <span className="font-bold text-white">producción completa</span>
                : visuales, intros, luces y sonido sincronizado.
              </p>
              <p>
                Todo el tour se diseña con la misma atención al detalle que una
                canción.
              </p>
              <p>
                Cada ciudad tiene su{" "}
                <span className="font-semibold text-purple-300">propio intro</span>,
                su{" "}
                <span className="font-semibold text-pink-300">propio clima</span> y
                su{" "}
                <span className="font-semibold text-blue-300">
                  propia historia sonora
                </span>
                .
              </p>

              {/* Production Highlights */}
              <div className="mt-8 space-y-4 border-t border-white/20 pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-600">
                    <span className="text-2xl">🎚️</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">
                      Sonido Profesional
                    </h3>
                    <p className="text-sm text-gray-400">
                      Equipos de alta gama sincronizados con visuales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">
                      Iluminación Dinámica
                    </h3>
                    <p className="text-sm text-gray-400">
                      Diseño lumínico adaptado a cada espacio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-white">
                      Visuales Personalizados
                    </h3>
                    <p className="text-sm text-gray-400">
                      Intros y proyecciones únicas por ciudad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTour;
