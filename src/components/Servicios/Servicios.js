mport React from "react";

const Servicios = () => {
  return (
    <section className="servicios">
      <h2>Servicios de DJ Paul – eventos privados, bodas y corporativos</h2>
      <div className="servicios-grid">
        <div className="card">
          <h3>Club Night – DJ para discotecas y fiestas urbanas</h3>
        </div>
        <div className="card">
          <h3>
            Private & Weddings – DJ para matrimonios y fiestas privadas en Perú
          </h3>
        </div>
        <div className="card">
          <h3>Corporate – DJ para eventos corporativos</h3>
        </div>
      </div>
      <p>
        Paquetes diseñados para cada tipo de evento, con música que conecta y
        producción de nivel internacional.
      </p>
      <a href="#contacto" className="btn">
        Solicita propuesta personalizada de DJ Paul
      </a>
    </section>
  );
};

export default Servicios;
