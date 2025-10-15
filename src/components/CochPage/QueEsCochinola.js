import React from "react";

const QueEsCochinola = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Qué Es Cochinola
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Two Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Logo Treatment */}
            <div className="mb-8">
              <div className="inline-block rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 shadow-2xl">
                <h3 className="text-4xl font-bold text-white md:text-5xl">
                  COCHINOLA
                </h3>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Nacida como una{" "}
              <span className="font-bold text-gray-900">
                fiesta underground de reggaetón old school
              </span>
              , Cochinola se convirtió en el{" "}
              <span className="font-bold text-purple-600">
                festival itinerante más importante del género en Perú
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Es un espacio donde la{" "}
              <span className="font-semibold text-pink-600">sensualidad</span>, la{" "}
              <span className="font-semibold text-purple-600">
                libertad corporal
              </span>{" "}
              y la{" "}
              <span className="font-semibold text-orange-600">
                energía latina
              </span>{" "}
              se transforman en arte en movimiento.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Cada edición viaja por distintas ciudades del país:{" "}
              <span className="font-bold">
                Arequipa, Trujillo, Pucallpa, Piura
              </span>
              , llevando una propuesta visual, musical y escénica única.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <div className="mb-2 text-3xl font-bold text-purple-600">10+</div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                  Ediciones
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-pink-600">8</div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                  Ciudades
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                  Asistentes
                </div>
              </div>
            </div>
          </div>

          {/* Right: Photo/Video */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {/* Video/Photo Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
                <img
                  src="/images/cochinola/audience-smoke-lights.jpg"
                  alt="Cochinola - Público con humo y luces"
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="text-center">
                <div className="mb-2 text-4xl">🔥</div>
                <div className="font-bold text-gray-900">Festival</div>
                <div className="text-sm text-gray-600">Itinerante</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueEsCochinola;
