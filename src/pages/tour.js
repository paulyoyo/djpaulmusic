import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import ProximosShows from "@components/Tour/ProximosShows";
import AftermoviesSets from "@components/Tour/AftermoviesSets";
import GaleriaTour from "@components/Tour/GaleriaTour";
import CiudadesTour from "@components/Tour/CiudadesTour";
import BehindTour from "@components/Tour/BehindTour";
import VocesPublico from "@components/Tour/VocesPublico";
import CTATourFinal from "@components/Tour/CTATourFinal";
import SeoTags from "@components/SEO/SeoTags";

const TourPage = () => {
  return (
    <Layout>
      <Hero
        badge="Shows en vivo"
        h1="DJ Paul Tour 2025:<br />Shows, Ciudades &<br /><i class='font-instrument italic'>Energía en Vivo</i>"
        h2="Desde Arequipa hasta Pucallpa, cada show cuenta una historia distinta"
        description="Aquí están los momentos, las ciudades y las noches que marcan el Tour 2025 de DJ Paul."
        primaryCTA={{
          text: "Upcoming Dates",
          link: "#fechas"
        }}
        secondaryCTA={{
          text: "Watch Last Show",
          link: "#aftermovies"
        }}
      />
      <ProximosShows />
      <AftermoviesSets />
      <GaleriaTour />
      <CiudadesTour />
      <BehindTour />
      <VocesPublico />
      <CTATourFinal />
    </Layout>
  );
};

export default TourPage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="DJ Paul Tour – Eventos en Arequipa, Trujillo, Pucallpa"
      description="No te pierdas los próximos sets en vivo de DJ Paul. Reggaetón, Fiesta Old School y mucha energía en Arequipa, Trujillo, Pucallpa y más provincias."
      url="https://djpaul.pe/tour"
      image="https://djpaul.pe/og-tour.jpg"
    />
  </>
);
