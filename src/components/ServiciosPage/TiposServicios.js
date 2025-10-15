import React from "react";

const TiposServicios = () => {
  const services = [
    {
      icon: "🎧",
      title: "DJ Set para Discotecas & Eventos",
      description:
        "Sets en vivo diseñados para elevar la pista y mantener la energía al máximo nivel.",
      anchor: "#discotecas",
    },
    {
      icon: "💍",
      title: "DJ para Bodas",
      description:
        "Música y animación adaptadas al estilo de los novios. Opcional: DJ Paul o staff de DJs profesionales.",
      anchor: "#bodas",
    },
    {
      icon: "🏢",
      title: "Eventos Corporativos",
      description:
        "Experiencias musicales para empresas, fiestas BTL y lanzamientos de marca.",
      anchor: "#corporativos",
    },
    {
      icon: "🎛️",
      title: "Producción Musical Personalizada",
      description:
        "Creación de intros, sound design y piezas para happenings o branding sonoro.",
      anchor: "#produccion",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Tipos de Servicios
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* 4-Column Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.anchor}
              className="group overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* CTA Link */}
              <div className="flex items-center gap-2 font-semibold text-purple-600 transition-all duration-300 group-hover:gap-4">
                <span>Ver más</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposServicios;
