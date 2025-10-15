import React from "react";

const ProduccionMusical = () => {
  const examples = [
    {
      title: 'Intro "Cochinear"',
      subtitle: "Festival Cochinola",
      description: "Intro emblemático del festival más esperado del año",
    },
    {
      title: 'Sound design para Happening "Euforia"',
      subtitle: "Cochinola 2023",
      description: "Paisaje sonoro para performance de arte urbano",
    },
    {
      title: "Música para desfile urbano",
      subtitle: "Arequipa Fashion Night",
      description: "Composición original para pasarela de moda",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black py-20 text-white md:py-32" id="produccion">
      {/* Waveform Animation Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/waveform-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container relative z-10">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Producción Musical<br />Personalizada
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
          Si tu evento necesita una{" "}
          <span className="font-bold text-white">identidad sonora única</span>, puedo
          componer piezas exclusivas.
        </p>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
          Desde intros para happenings y performance art, hasta branding musical
          para festivales o marcas. Todo se produce con equipamiento profesional y
          mezclas listas para gran formato.
        </p>

        {/* Examples Grid */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Ejemplos de trabajos:
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {examples.map((example, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <h4 className="mb-2 text-xl font-bold">{example.title}</h4>
                <p className="mb-3 text-sm font-semibold text-purple-300">
                  {example.subtitle}
                </p>
                <p className="text-sm text-gray-400">{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Audio Preview Placeholder */}
        <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl bg-gray-800">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-6xl">🎧</div>
              <p className="text-gray-400">Embedded SoundCloud/Spotify Player</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/musica#produccion"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>🎧</span>
            <span>Escucha muestras de producción personalizada</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProduccionMusical;
