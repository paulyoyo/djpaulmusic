import React from "react";

const ShowsEnVivo = () => {
  return (
    <section className="shows-en-vivo">
      <h2>DJ Paul en vivo – sets de reggaetón y música urbana</h2>
      <p>
        Presentaciones en discotecas de Lima, Arequipa, Trujillo y más. DJ Paul
        adapta cada set para que el público cante, baile y viva la experiencia
        del reggaetón old school con energía moderna.
      </p>
      <div className="video-embed">
        <iframe
          title="Set en vivo DJ Paul – Discoteca Élite Arequipa"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XXXXXXX"
          allowFullScreen
        />
      </div>
      <a href="https://youtube.com" className="btn secondary">
        Mira más sets en YouTube
      </a>
    </section>
  );
};

export default ShowsEnVivo;
