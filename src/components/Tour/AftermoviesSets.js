import React from "react";

const AftermoviesSets = () => {
  const videos = [
    {
      title: "Aftermovie Cochinola Arequipa 2025",
      description: "Una noche donde el reggaetón y la gente fueron uno solo.",
      city: "Arequipa",
      event: "Cochinola",
      year: "2025",
      thumbnail: "/images/tour/cochinola-arequipa-2025.jpg",
      videoUrl: "https://www.youtube.com/embed/example1",
    },
    {
      title: "DJ Paul Live @ Presea Trujillo 2024",
      description: "Old School vibes con los hits más recientes.",
      city: "Trujillo",
      event: "Presea",
      year: "2024",
      thumbnail: "/images/tour/presea-trujillo-2024.jpg",
      videoUrl: "https://www.youtube.com/embed/example2",
    },
    {
      title: "Cochinola Pucallpa – Jungle Edition",
      description: "Visuales selváticos, luces cálidas, beats húmedos.",
      city: "Pucallpa",
      event: "Cochinola Amazon",
      year: "2025",
      thumbnail: "/images/tour/cochinola-pucallpa-2025.jpg",
      videoUrl: "https://www.youtube.com/embed/example3",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 text-white md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Aftermovies &<br />
          Sets Destacados
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
          Lo que pasa en la pista se queda en la memoria.
          <br />
          Aquí algunos highlights del tour, capturados con la intensidad del
          momento.
        </p>

        {/* 3-Column Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-gray-800 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-all duration-300 group-hover:bg-black/70">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="ml-1 h-10 w-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Label Tags */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold">
                    {video.city}
                  </span>
                  <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold">
                    {video.event}
                  </span>
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-bold">
                    {video.year}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">🎬 {video.title}</h3>
                <p className="italic leading-relaxed text-gray-400">
                  "{video.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/videos"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-xl"
          >
            <span>▶️</span>
            <span>Ver todos los sets grabados en vivo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AftermoviesSets;
