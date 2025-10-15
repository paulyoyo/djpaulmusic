import React from "react";

const EventosCorporativos = () => {
  const features = [
    "Musicalización y animación de eventos empresariales",
    "Producción de jingles o intros corporativas",
    "Sincronización con visuales / mapping (opcional)",
    "Staff profesional de DJs para eventos simultáneos",
  ];

  const clients = [
    "Cliente 1",
    "Cliente 2",
    "Cliente 3",
    "Cliente 4",
  ];

  return (
    <section className="py-20 md:py-32" id="corporativos">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          Eventos Corporativos<br />& Marcas
        </h2>
        <div className="mx-auto mb-16 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Split Layout (5/7) */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Logos */}
          <div className="lg:col-span-5">
            <h3 className="mb-8 text-center text-xl font-bold text-gray-700">
              Clientes que han confiado
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-xl bg-gray-100 p-8"
                >
                  <div className="text-center text-gray-400">
                    <div className="mb-2 text-4xl">🏢</div>
                    <p className="text-sm font-semibold">{client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6 lg:col-span-7">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Llevo la{" "}
              <span className="font-bold text-purple-600">
                identidad sonora de tu marca
              </span>{" "}
              a otro nivel.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Mis servicios para empresas incluyen desde la musicalización de
              fiestas internas hasta la creación de ambientaciones para
              lanzamientos o experiencias BTL.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Cada proyecto se diseña de acuerdo con los valores de la marca, su
              público y el tipo de evento.
            </p>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Incluye:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-600">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>📩</span>
                <span>Solicita un paquete corporativo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventosCorporativos;
