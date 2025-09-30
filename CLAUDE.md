# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DJ Paul Music is a Gatsby-based music website for DJ Paul, a reggaeton DJ and music producer in Peru. The project showcases DJ services, music productions, live shows, and tour dates. Built from the Gatsby minimal starter with React, SCSS, and styled-components.

## Development Commands

- `npm run develop` or `npm start` - Start development server at http://localhost:8000
- `npm run build` - Build production site to `public/` directory
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and public directories

## Architecture

### Core Technologies
- **Gatsby 5.13.1** - Static site generator with file-system routing
- **React 18.2.0** - UI framework
- **SCSS/Sass 1.93.2** - Primary styling approach using modular SCSS architecture
- **styled-components 6.1.6** - Available but not currently used (SCSS preferred)

### Project Structure
```
src/
├── pages/           # Gatsby pages (file-system routing)
│   ├── index.js     # Homepage
│   └── 404.js       # 404 error page
├── components/      # React components organized by feature
│   ├── Hero/
│   ├── Header/
│   ├── Footer/
│   ├── layout/Layout.jsx     # Main layout wrapper with Header/Footer
│   ├── SEO/SeoTags.jsx       # Reusable SEO meta tags component
│   └── [other feature components]/
├── assets/
│   └── scss/        # Modular SCSS architecture
│       ├── main.scss           # Entry point (imported in gatsby-browser.js)
│       ├── base/               # Reset, typography
│       ├── components/         # Component-specific styles
│       ├── layout/             # Layout styles (header, footer)
│       ├── pages/              # Page-specific styles
│       ├── theme/              # Theme configuration
│       └── utils/              # Utilities and mixins
└── images/          # Static images
```

### Path Aliases (configured in gatsby-node.js)
The project uses Webpack aliases for cleaner imports:
- `@components` → `src/components`
- `@ui` → `src/components/ui`
- `@layout` → `src/components/layout`
- `@assets` → `src/assets`
- `@utils` → `src/utils`
- `@hooks` → `src/hooks`

Example usage: `import Layout from "@layout/Layout"`

### Styling Architecture
- **Primary approach**: Modular SCSS using `@forward` in main.scss
- Global styles imported via gatsby-browser.js
- Component styles organized in `src/assets/scss/components/`
- Uses BEM or semantic class naming conventions
- styled-components is configured but not actively used

### Site Configuration (gatsby-config.js)
**Site Metadata:**
- Title: "Dj Paul is in the house"
- Description: Spanish language description about DJ Paul's services
- Site URL: https://www.djpaul.pe
- Twitter handle: @djpaulpe

**Key Plugins:**
- `gatsby-plugin-sass` - SCSS compilation
- `gatsby-plugin-styled-components` - styled-components support (available but not in use)
- `gatsby-plugin-image` + `gatsby-plugin-sharp` + `gatsby-transformer-sharp` - Image optimization
- `gatsby-plugin-manifest` - PWA manifest (icon: `src/images/icon.png`)
- `gatsby-plugin-sitemap` - XML sitemap generation
- `gatsby-plugin-robots-txt` - Robots.txt with allow all policy
- `gatsby-source-filesystem` - File system source for images

### SEO Implementation
- Custom `<SeoTags>` component in src/components/SEO/SeoTags.jsx
- Used in Gatsby's Head API export on each page
- Supports title, description, URL, and image props
- Includes Open Graph and Twitter Card meta tags
- Default values configured in component

### Layout Pattern
- Consistent layout via `src/components/layout/Layout.jsx`
- Wraps all pages with Header, main content area, and Footer
- Used in page components: `<Layout>{content}</Layout>`

## Development Notes

- Pages are automatically routed based on files in `src/pages/`
- The site uses Spanish language content for Peru audience
- Global SCSS is imported in gatsby-browser.js:4
- Images should be placed in `src/images/` for Gatsby's image optimization
- The site is configured for deployment (deployment method not specified in codebase)
- Path aliases are preferred for imports to maintain clean, portable code
