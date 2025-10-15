import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import QueEsCochinola from "@components/CochPage/QueEsCochinola";
import RolDJPaul from "@components/CochPage/RolDJPaul";
import HappeningsConceptos from "@components/CochPage/HappeningsConceptos";
import SeoTags from "@components/SEO/SeoTags";

const CochPage = () => {
  return (
    <Layout>
      <Hero
        badge="Festival Inmersivo"
        h1="Cochinola:<br />El Festival que Reinventa<br />el <i class='font-instrument italic'>Reggaetón</i>"
        h2="Cochinola no es solo una fiesta: es una experiencia inmersiva de reggaetón, performance y arte visual"
        description="Una mezcla de música, happening y producción donde cada edición tiene su propio universo."
        primaryCTA={{
          text: "🎥 Ver el aftermovie más reciente",
          link: "#videos"
        }}
        secondaryCTA={{
          text: "🎧 Escuchar el intro oficial 2025",
          link: "/musica"
        }}
      />
      <QueEsCochinola />
      <RolDJPaul />
      <HappeningsConceptos />
      {/* Additional sections to be added */}
    </Layout>
  );
};

export default CochPage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="Cochinola – DJ Paul | Propuesta Urbana & Sinfónica"
      description="Cochinola: una mezcla de orquesta, producción urbana y fiesta. Mira los mejores momentos, videos y fotos del proyecto por todo el país."
      url="https://djpaul.pe/cochinola"
      image="https://djpaul.pe/og-cochinola.jpg"
    />
  </>
);
