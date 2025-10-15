import React from "react";

const MusicaDestacada = () => {
  return (
    <section className="musica-destacada">
      <h2>Producciones y canciones de DJ Paul</h2>
      <p>
        DJ Paul es también productor musical. Sus lanzamientos como La Alergia,
        Gileo y Ya Te Olvidé han sonado en fiestas y plataformas digitales,
        llevando el reggaetón peruano a otro nivel.
      </p>
      <div className="musica-grid">
        <img
          src="/images/la-alergia.jpg"
          alt="Portada canción La Alergia – DJ Paul"
        />
        <img src="/images/gileo.jpg" alt="Single Gileo de DJ Paul" />
      </div>
      <a href="https://open.spotify.com" className="btn">
        Escucha la música de DJ Paul en Spotify
      </a>
    </section>
  );
};

export default MusicaDestacada;
