import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import TiposServicios from "@components/ServiciosPage/TiposServicios";
import DJSetDiscotecas from "@components/ServiciosPage/DJSetDiscotecas";
import DJBodas from "@components/ServiciosPage/DJBodas";
import EventosCorporativos from "@components/ServiciosPage/EventosCorporativos";
import ProduccionMusical from "@components/ServiciosPage/ProduccionMusical";
import TestimoniosServicios from "@components/ServiciosPage/TestimoniosServicios";
import CTAServiciosContacto from "@components/ServiciosPage/CTAServiciosContacto";
import SeoTags from "@components/SEO/SeoTags";

const ServiciosPage = () => {
  return (
    <Layout>
      <Hero
        badge="Experiencias Sonoras"
        h1="Servicios de DJ Paul:<br />Experiencias Sonoras para<br />Cada Tipo de <i class='font-instrument italic'>Evento</i>"
        h2="Cada evento necesita una energía distinta"
        description="Ya sea una discoteca, una boda o una marca que quiere conectar con su público, diseño experiencias musicales hechas a medida — con sonido, performance y producción profesional."
        primaryCTA={{
          text: "Cotizar un Show",
          link: "#contacto"
        }}
        secondaryCTA={{
          text: "Ver Paquetes de Bodas",
          link: "#bodas"
        }}
      />
      <TiposServicios />
      <DJSetDiscotecas />
      <DJBodas />
      <EventosCorporativos />
      <ProduccionMusical />
      <TestimoniosServicios />
      <CTAServiciosContacto />
    </Layout>
  );
};

export default ServiciosPage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="Paquetes DJ Paul – Bodas, Privados, Eventos Corporativos"
      description="Conoce los servicios de DJ Paul para bodas en Lima, Arequipa y Trujillo, eventos privados y shows corporativos. Paquetes con calidad profesional."
      url="https://djpaul.pe/servicios"
      image="https://djpaul.pe/og-servicios.jpg"
    />
  </>
);
