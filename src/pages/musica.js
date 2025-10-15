import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import NuevosLanzamientos from "@components/Musica/NuevosLanzamientos";
import MixesSetsVivo from "@components/Musica/MixesSetsVivo";
import VideosLivePerformances from "@components/Musica/VideosLivePerformances";
import ProduccionOriginal from "@components/Musica/ProduccionOriginal";
import EscuchaPlataformas from "@components/Musica/EscuchaPlataformas";
import TestimoniosMusica from "@components/Musica/TestimoniosMusica";
import CTAMusicaCierre from "@components/Musica/CTAMusicaCierre";
import SeoTags from "@components/SEO/SeoTags";

const MusicaPage = () => {
  return (
    <Layout>
      <Hero
        badge="Escucha ahora"
        h1="Música & Producción<br />de <i class='font-instrument italic'>DJ Paul</i>"
        h2="Vibra con mis últimos lanzamientos, sets en vivo y producciones originales"
        description="Desde las noches intensas de Arequipa hasta los perreos interminables en Trujillo, esta es la música que está encendiendo pistas en todo el Perú."
        primaryCTA={{
          text: "🎵 Escucha ahora en SoundCloud",
          link: "https://soundcloud.com/djpaul"
        }}
        secondaryCTA={{
          text: "Ver en YouTube",
          link: "https://youtube.com/@djpaul"
        }}
      />
      <NuevosLanzamientos />
      <MixesSetsVivo />
      <VideosLivePerformances />
      <ProduccionOriginal />
      <EscuchaPlataformas />
      <TestimoniosMusica />
      <CTAMusicaCierre />
    </Layout>
  );
};

export default MusicaPage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="DJ Paul – Mixes & Producción | Reggaetón Perú"
      description="Escucha los nuevos singles, mixes y sets en vivo de DJ Paul. Producciones urbanas que hacen vibrar las discotecas del Perú."
      url="https://djpaul.pe/musica"
      image="https://djpaul.pe/og-musica.jpg"
    />
  </>
);
