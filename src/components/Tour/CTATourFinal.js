import React from "react";
import { Link } from "gatsby";

const CTATourFinal = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black py-24 text-white md:py-40">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-pink-500 blur-3xl" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75"></div>
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl">
                <span className="text-5xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Bring DJ Paul<br />to Your City
          </h2>

          <p className="mb-12 text-xl leading-relaxed text-gray-300 md:text-2xl">
            ¿Quieres llevar la experiencia del tour a tu ciudad?
            <br />
            Escríbeme y coordinemos el próximo show.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              <span>📩</span>
              <span>Contactar para show</span>
              <div className="absolute right-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </div>
            </Link>

            <a
              href="/rider-tecnico.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              <span>🎧</span>
              <span>Ver Rider Técnico</span>
              <span className="text-sm opacity-70">(solo promotores)</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 border-t border-white/20 pt-12">
            <p className="mb-6 text-sm uppercase tracking-widest text-gray-400">
              Lo que incluye cada show
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl">🎚️</div>
                <h3 className="mb-2 font-bold">Producción Completa</h3>
                <p className="text-sm text-gray-400">
                  Sonido, luces, visuales e intros personalizados
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl">🎬</div>
                <h3 className="mb-2 font-bold">Contenido Audiovisual</h3>
                <p className="text-sm text-gray-400">
                  Grabación profesional y aftermovie opcional
                </p>
              </div>
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 text-3xl">⚡</div>
                <h3 className="mb-2 font-bold">Experiencia Garantizada</h3>
                <p className="text-sm text-gray-400">
                  Sets de 2-4 horas con energía de principio a fin
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16">
            <p className="mb-4 text-gray-400">Para consultas de disponibilidad:</p>
            <a
              href="mailto:booking@djpaul.pe"
              className="text-xl font-bold text-purple-300 hover:text-purple-200"
            >
              booking@djpaul.pe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATourFinal;
