import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Hero/Hero";
import SeoTags from "@components/SEO/SeoTags";

const BlogPage = () => {
  return (
    <Layout>
      <Hero
        badge="Noticias y sets"
        h1="Blog de DJ Paul –<br />Sets Locales, Aftermovies<br />y <i class='font-instrument italic'>Noticias</i>"
        h2="Mantente al día con las últimas presentaciones, sets en vivo y noticias del circuito urbano peruano"
        description="Revive los mejores momentos de cada show, descubre los sets más recientes de DJ Paul en diferentes ciudades del Perú, y entérate de las novedades del mundo de la música urbana."
        primaryCTA={{
          text: "Ver últimos posts",
          link: "#posts"
        }}
        secondaryCTA={{
          text: "Suscríbete al newsletter",
          link: "/contact"
        }}
      />
      <section className="py-20">
        <div className="container">
          <h2 className="mb-10 text-center text-4xl font-bold">Últimas Publicaciones</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog post cards will go here */}
            <article className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Set en Vivo: DJ Paul en Cochinola Arequipa 2025
              </h3>
              <p className="mb-4 text-gray-600">
                Revive la noche de Cochinola en Arequipa con DJ Paul. Fotos, video,
                mix completo, ambiente y energía total...
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Leer más →
              </a>
            </article>
            {/* Add more blog post cards */}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="mb-10 text-center text-4xl font-bold">Sets por Ciudad</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg">
            Explora los sets y presentaciones de DJ Paul organizados por ciudad.
            Desde Arequipa hasta Pucallpa, cada lugar tiene su propia energía.
          </p>
          {/* Add city-based content filter here */}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

// API Head
export const Head = () => (
  <>
    <html lang="es" />
    <SeoTags
      title="Blog DJ Paul – Sets en Vivo, Aftermovies y Noticias"
      description="Lee sobre los sets en vivo de DJ Paul, aftermovies de Cochinola y las últimas noticias del reggaetón y música urbana en Perú."
      url="https://djpaul.pe/blog"
      image="https://djpaul.pe/og-blog.jpg"
    />
  </>
);
