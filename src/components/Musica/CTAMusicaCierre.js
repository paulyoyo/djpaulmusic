import React from "react";
import { Link } from "gatsby";

const CTAMusicaCierre = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-24 text-white md:py-40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Icon/Visual */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-white opacity-20 blur-xl"></div>
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl">
                <span className="text-5xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
            La música no es solo<br />para escucharla,<br />
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              es para vivirla.
            </span>
          </h2>

          <p className="mb-12 text-xl leading-relaxed text-gray-200 md:text-2xl">
            Sígueme y sé parte de las próximas noches donde el bajo manda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-purple-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>📩</span>
                <span>Suscríbete para nuevos lanzamientos</span>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:translate-x-0"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>📩</span>
                <span className="text-white">Suscríbete para nuevos lanzamientos</span>
              </span>
            </Link>

            <Link
              to="/tour"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-900"
            >
              <span>🎧</span>
              <span>Mira más sets en vivo</span>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="mt-16 border-t border-white/20 pt-12">
            <p className="mb-6 text-sm uppercase tracking-widest text-gray-300">
              Sígueme en redes
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com/djpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                aria-label="Instagram"
              >
                <span className="text-2xl">📷</span>
              </a>
              <a
                href="https://facebook.com/djpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                aria-label="Facebook"
              >
                <span className="text-2xl">📘</span>
              </a>
              <a
                href="https://twitter.com/djpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                aria-label="Twitter"
              >
                <span className="text-2xl">🐦</span>
              </a>
              <a
                href="https://tiktok.com/@djpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                aria-label="TikTok"
              >
                <span className="text-2xl">🎵</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAMusicaCierre;
