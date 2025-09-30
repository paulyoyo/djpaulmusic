# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based music website for DJ Paul, built from the Gatsby minimal starter. The project uses React with styled-components for styling and includes standard Gatsby plugins for image optimization, manifest generation, and site mapping.

## Development Commands

- `npm run develop` or `npm start` - Start development server at http://localhost:8000
- `npm run build` - Build production site to `public/` directory
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and public directories

## Architecture

### Core Technologies
- **Gatsby 5.13.1** - Static site generator
- **React 18.2.0** - UI framework
- **styled-components 6.1.6** - CSS-in-JS styling

### Project Structure
```
src/
├── pages/           # Gatsby pages (file-system routing)
│   ├── index.js     # Homepage
│   └── 404.js       # 404 error page
└── images/          # Static images
    └── icon.png     # Site icon/favicon
```

### Styling Approach
The project currently uses inline styles objects in React components. When adding styled-components, follow the existing pattern and use the configured `gatsby-plugin-styled-components`.

### Gatsby Configuration
Key plugins configured in `gatsby-config.js`:
- `gatsby-plugin-styled-components` - styled-components support
- `gatsby-plugin-image` + `gatsby-plugin-sharp` - Image optimization
- `gatsby-plugin-manifest` - PWA manifest (icon: `src/images/icon.png`)
- `gatsby-plugin-sitemap` - XML sitemap generation
- `gatsby-source-filesystem` - File system source for images

### Site Metadata
- Title: "Dj Paul Music"
- Site URL: Currently placeholder (`https://www.yourdomain.tld`)

## Development Notes

- Pages are automatically routed based on files in `src/pages/`
- The site includes both development and production conditional rendering (see 404.js:33-39)
- Images should be placed in `src/images/` and can be processed through Gatsby's image optimization pipeline
- The site is configured for deployment on Netlify as shown in README.md