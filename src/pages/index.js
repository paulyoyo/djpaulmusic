import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import SeoTags from "@components/SEO/SeoTags";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      {/* otras secciones */}
    </Layout>
  );
};

export default HomePage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="DJ Paul – DJ de Reggaetón y Eventos en Perú"
      description="DJ Paul – sets de reggaetón old school, intros originales y producciones propias. Disponible para bodas, discotecas y eventos en todo el Perú."
      url="https://djpaul.pe/"
      image="https://djpaul.pe/og-image.jpg"
    />
  </>
);
