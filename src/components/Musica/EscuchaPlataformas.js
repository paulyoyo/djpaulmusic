import React from "react";

const EscuchaPlataformas = () => {
  const platforms = [
    {
      name: "SoundCloud",
      icon: "🎧",
      url: "https://soundcloud.com/djpaul",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
    },
    {
      name: "YouTube",
      icon: "▶️",
      url: "https://youtube.com/@djpaul",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
    },
    {
      name: "Spotify",
      icon: "💿",
      url: "https://open.spotify.com/artist/djpaul",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      name: "Apple Music",
      icon: "🔊",
      url: "https://music.apple.com/artist/djpaul",
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 text-white md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Escucha en Todas<br />las Plataformas
          </h2>
          <div className="mx-auto mb-12 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          <p className="mb-16 text-xl leading-relaxed text-gray-300 md:text-2xl">
            Encuéntrame en todas las plataformas.<br />
            Escucha, guarda y comparte mis sets para mantener viva la energía en tu
            ciudad.
          </p>

          {/* Platform Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${platform.color} p-8 shadow-xl transition-all duration-300 ${platform.hoverColor} hover:scale-105 hover:shadow-2xl`}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 text-6xl">{platform.icon}</div>
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    className="h-6 w-6"
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
              </a>
            ))}
          </div>

          {/* Social Stats (Optional) */}
          <div className="mt-16 grid gap-8 border-t border-gray-800 pt-12 sm:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-purple-400">50K+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">
                Reproducciones
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-pink-400">10K+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">
                Seguidores
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-400">100+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">
                Sets Publicados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscuchaPlataformas;
