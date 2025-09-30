import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <h1>DJ Paul – DJ de Reggaetón y Eventos en Perú</h1>
      <h2>
        Residente de Cochinola y arquitecto sonoro de las fiestas urbanas más
        potentes del país.
      </h2>
      <p>
        Con sets de reggaetón old school, intros originales y producciones
        propias, DJ Paul convierte cada evento en una experiencia inolvidable,
        desde Lima hasta Pucallpa.
      </p>
      <div className="hero-cta">
        <a href="#contacto" className="btn">
          Reserva DJ para tu evento en Perú
        </a>
        <a href="#musica" className="btn secondary">
          Escucha la música de DJ Paul
        </a>
      </div>
    </section>
  );
};

export default Hero;
