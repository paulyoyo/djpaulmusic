import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import Servicios from "@components/Inicio/Servicios/Servicios";
import Diferenciales from "@components/Inicio/Diferenciales/Diferenciales";
import MusicaDestacada from "@components/Inicio/MusicaDestacada/MusicaDestacada";
import ProyectoCochinola from "@components/Inicio/ProyectoCochinola/ProyectoCochinola";
import ShowsEnVivo from "@components/Inicio/ShowsEnVivo/ShowsEnVivo";
import TourFechas from "@components/Inicio/TourFechas/GoogleCalendarEvents";
import Testimonios from "@components/Inicio/Testimonios/Testimonios";
import CTACierre from "@components/Inicio/CTACierre/CTACierre";
import SeoTags from "@components/SEO/SeoTags";

const HomePage = () => {
  return (
    <Layout>
      <Hero
        badge="Disponible para eventos"
        h1="DJ Paul – Reggaetón,<br />Sets en Vivo y Música Urbana<br />desde Provincias del <i class='font-instrument italic'>Perú</i>"
        h2="Residente de Cochinola y arquitecto sonoro de las fiestas urbanas más potentes del país"
        description="Con sets de reggaetón old school, intros originales y producciones propias, DJ Paul convierte cada evento en una experiencia inolvidable, desde Lima hasta Pucallpa."
        primaryCTA={{
          text: "Reserva DJ para tu evento en Perú",
          link: "/servicios",
        }}
        secondaryCTA={{
          text: "Escucha la música de DJ Paul",
          link: "/musica",
        }}
      />
      <Diferenciales />
      <MusicaDestacada />
      <ShowsEnVivo />
      <TourFechas />
      <ProyectoCochinola />
      <Servicios />
      <Testimonios />
      <CTACierre />
    </Layout>
  );
};

export default HomePage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="DJ Paul | Reggaetón & Sets en Vivo | Arequipa, Trujillo, Piura"
      description="Descubre los mixes y sets en vivo de DJ Paul. Producción urbana, reggaetón old school, shows en provincias del Perú. Matrimonios en Lima, Arequipa y Trujillo."
      url="https://djpaul.pe/"
      image="https://djpaul.pe/og-image.jpg"
    />
  </>
);
