import React from "react";

const RolDJPaul = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 text-white md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          El Rol de DJ Paul<br />en Cochinola
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Hero Split Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image/Video */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/cochinola/djpaul-creative-director.jpg"
                alt="DJ Paul - Director Creativo de Sonido"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Mi participación va{" "}
              <span className="font-bold text-white">más allá del set en cabina</span>.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              En cada edición de Cochinola soy responsable del{" "}
              <span className="font-semibold text-purple-300">diseño sonoro del evento</span>, la{" "}
              <span className="font-semibold text-pink-300">
                composición de intros temáticas
              </span>{" "}
              y la{" "}
              <span className="font-semibold text-orange-300">
                dirección musical de los happenings
              </span>
              .
            </p>
            <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
              Cada pieza musical está pensada para reforzar el concepto visual del
              festival, integrando beats, vocal chops y elementos cinematográficos
              con el sonido del reggaetón moderno.
            </p>

            {/* Pull Quote */}
            <div className="my-12 border-l-4 border-purple-500 bg-white/10 p-8 backdrop-blur-sm">
              <blockquote className="text-2xl font-bold italic leading-relaxed md:text-3xl">
                "Cochinola no se escucha,<br />se vive."
              </blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-purple-300">
                — DJ Paul
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4 border-t border-white/20 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-600">
                  <span className="text-2xl">🎚️</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Diseño Sonoro</h3>
                  <p className="text-sm text-gray-400">
                    Creación de paisajes sonoros para cada edición
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-600">
                  <span className="text-2xl">🎼</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Intros Temáticas</h3>
                  <p className="text-sm text-gray-400">
                    Composiciones originales para cada ciudad y concepto
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600">
                  <span className="text-2xl">🎭</span>
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Dirección Musical</h3>
                  <p className="text-sm text-gray-400">
                    Sincronización de música con performances y visuales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolDJPaul;
