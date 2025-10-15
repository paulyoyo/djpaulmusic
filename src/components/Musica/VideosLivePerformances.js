import React from "react";

const VideosLivePerformances = () => {
  const videos = [
    {
      title: "Cochinola Pucallpa 2025",
      subtitle: "Aftermovie Oficial",
      city: "Pucallpa",
      thumbnail: "/images/videos/cochinola-pucallpa.jpg",
      videoUrl: "https://www.youtube.com/embed/example1",
    },
    {
      title: "DJ Paul Live – Presea Arequipa 2024",
      subtitle: "Full Set",
      city: "Arequipa",
      thumbnail: "/images/videos/presea-arequipa.jpg",
      videoUrl: "https://www.youtube.com/embed/example2",
    },
    {
      title: "Highlights del Tour Cochinola Trujillo",
      subtitle: "Mejores Momentos",
      city: "Trujillo",
      thumbnail: "/images/videos/cochinola-trujillo.jpg",
      videoUrl: "https://www.youtube.com/embed/example3",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Videos / Live Performances
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
          Las cámaras capturan lo que las palabras no pueden: el momento exacto en
          que la pista se enciende. Mira mis presentaciones en vivo y revive esas
          noches donde el bajo no se detuvo.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Video Thumbnail with Play Overlay */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="ml-1 h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* City Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                  📍 {video.city}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  🎬 {video.title}
                </h3>
                <p className="text-sm font-semibold text-purple-600">
                  {video.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-xl">
            Ver más videos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideosLivePerformances;
