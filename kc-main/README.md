# Ken Chase Main

The main portfolio website for Ken Chase, built with Astro and the KC Astro Shared Theme.

## Overview

This is Ken Chase's primary website showcasing web design, photography, music, and providing contact information. The site leverages a shared theme package for consistent styling and components across the Ken Chase web ecosystem.

## Technology Stack

- **Framework**: Astro 5.8+
- **Styling**: SCSS with shared theme variables
- **Theme**: KC Astro Shared Theme (local package)
- **Analytics**: Google Tag Manager
- **Development**: TypeScript support

## Project Structure

```
src/
├── components/          # Site-specific components
├── layouts/
│   └── Layout.astro    # Main layout using shared theme
├── pages/              # Site pages
│   └── index.astro     # Homepage
├── styles/             # Site-specific styles
│   └── custom.scss     # Theme overrides and custom styles
└── types/              # TypeScript declarations
    └── kc-astro-shared-theme.d.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository** (if applicable)
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Visit** `http://localhost:4321`

## Development

### Using Shared Theme

The site uses the KC Astro Shared Theme for consistent components and styling:

```astro
---
import { BaseLayout, Header, Footer } from 'kc-astro-shared-theme';
import 'kc-astro-shared-theme/styles/main.scss';
---
```

### Site Navigation

The main navigation includes:

- About
- Web Design
- Photography
- Music
- Contact

### Customization

Site-specific styles are in `src/styles/custom.scss`. Override theme variables here:

```scss
// Brand colors for Ken Chase
$primary-color: #your-brand-color;
$accent-color: #your-accent-color;
```

### Analytics

Google Tag Manager is configured via the shared theme. The GTM ID is passed as a prop to the BaseLayout component.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Theme Development

This site uses a local version of the KC Astro Shared Theme located at `../kc-astro-shared-theme`.

When making theme changes:

1. Update the theme package
2. Run `npm install` to pick up changes
3. Test across all sites

## Content Sections

### About

Personal introduction and professional background

### Web Design

Portfolio of web development projects

### Photography

Gallery of photography work

### Music

Information about musical projects and compositions

### Contact

Contact form and professional contact information

## Deployment

[Add deployment instructions specific to your hosting setup]

## Contributing

This is a personal portfolio site. For theme-related improvements, contribute to the KC Astro Shared Theme package.

## License

© 2025 Ken Chase. All rights reserved.
