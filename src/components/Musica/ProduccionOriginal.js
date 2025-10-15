import React from "react";
import { Link } from "gatsby";

const ProduccionOriginal = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 text-white md:py-32">
      {/* Waveform Animation Background (decorative) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/waveform-pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Icon/Badge */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl">
              <span className="text-4xl">🎚️</span>
            </div>
          </div>

          <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Producción Original &<br />Intros Exclusivas
          </h2>
          <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          {/* Main Content */}
          <div className="space-y-8 text-center">
            <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
              Además de mezclar en vivo, produzco{" "}
              <span className="font-bold text-white">intros y beats personalizados</span>{" "}
              para eventos y artistas.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Mis intros se han convertido en parte de la identidad de Cochinola:
              temas como{" "}
              <span className="font-semibold text-pink-400">"Cochinear"</span> y{" "}
              <span className="font-semibold text-pink-400">"La Alergia"</span> son
              producidos 100% por mí, mezclando samples analógicos, voces filtradas
              y texturas oscuras con punch moderno.
            </p>

            {/* Studio Photo Placeholder */}
            <div className="my-12 overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-video w-full bg-gradient-to-r from-purple-800 to-pink-800">
                <img
                  src="/images/studio-photo.jpg"
                  alt="DJ Paul en el estudio de producción"
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Production Highlights */}
            <div className="grid gap-6 pt-8 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">🎹</div>
                <h3 className="mb-2 text-lg font-bold">Samples Analógicos</h3>
                <p className="text-sm text-gray-300">
                  Sintetizadores vintage y texturas orgánicas
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">🎤</div>
                <h3 className="mb-2 text-lg font-bold">Voces Filtradas</h3>
                <p className="text-sm text-gray-300">
                  Procesamiento único y efectos personalizados
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-3 text-4xl">⚡</div>
                <h3 className="mb-2 text-lg font-bold">Punch Moderno</h3>
                <p className="text-sm text-gray-300">
                  Mezcla y masterización de alta calidad
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="https://soundcloud.com/djpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold shadow-2xl transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-purple-500/50"
              >
                <span>🔗</span>
                <span>Explora mis producciones originales en SoundCloud</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProduccionOriginal;
