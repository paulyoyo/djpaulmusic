import React, { useState } from "react";

const CTAServiciosContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    tipoEvento: "",
    ciudad: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-900 py-24 text-white md:py-40">
      {/* Parallax Crowd Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/servicios/crowd-background.jpg"
          alt="Crowd background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            ¿Quieres que tu evento<br />suene diferente?
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          <p className="mb-12 text-center text-xl text-gray-300 md:text-2xl">
            Cuéntame tu idea y te enviaré una propuesta con el formato ideal para tu
            público.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-12 max-w-2xl space-y-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-12"
          >
            <div>
              <label htmlFor="nombre" className="mb-2 block font-semibold">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div>
              <label htmlFor="tipoEvento" className="mb-2 block font-semibold">
                Tipo de evento
              </label>
              <select
                id="tipoEvento"
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/20 px-4 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="discoteca">Discoteca / Club</option>
                <option value="boda">Boda</option>
                <option value="corporativo">Evento Corporativo</option>
                <option value="produccion">Producción Musical</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="ciudad" className="mb-2 block font-semibold">
                Ciudad
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="w-full rounded-lg bg-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="¿En qué ciudad?"
                required
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block font-semibold">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg bg-white/20 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Cuéntame más sobre tu evento..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              📩 Solicitar cotización personalizada
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="text-center">
            <p className="mb-4 text-gray-400">O contáctame directamente:</p>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-900"
            >
              <span>📞</span>
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAServiciosContacto;
