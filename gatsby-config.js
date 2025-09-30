/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Dj Paul is in the house", // Título por defecto
    description:
      "DJ Paul – sets de reggaetón old school, intros originales y producciones propias. Disponible para bodas, discotecas y eventos en todo el Perú.", // Descripción por defecto
    siteUrl: "https://www.djpaul.pe", // La URL de tu dominio
    author: "@djpaulpe", // Opcional: para Twitter cards
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt", // Robots.txt
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
