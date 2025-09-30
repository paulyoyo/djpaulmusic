import React from "react";

const SeoTags = ({ title, description, url, image }) => {
  const defaultTitle = "DJ Paul – DJ de Reggaetón y Eventos en Perú";
  const defaultDescription =
    "DJ Paul – DJ de reggaetón old school y productor musical en Perú. Disponible para bodas, discotecas y eventos corporativos.";
  const defaultUrl = "https://djpaul.com.pe/";
  const defaultImage = "https://djpaul.com.pe/og-image.jpg";

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="author" content="DJ Paul" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </>
  );
};

export default SeoTags;
