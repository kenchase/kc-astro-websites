# KC Astro Shared Theme

A shared component library and multisite theme system for Ken Chase's Astro websites, designed to maintain consistency across multiple sites while allowing for site-specific customization.

## Features

- 🎨 **Shared Components** - Reusable Header, Footer, and Layout components
- 💅 **SCSS Support** - Modular stylesheets with customizable variables
- 🎯 **CSS Custom Properties** - Easy theming and customization
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🔧 **TypeScript Ready** - Full TypeScript support for better development experience
- 🚀 **Local Development** - Easy setup for multi-site development

## Installation

Install the theme package in your Astro project:

```bash
npm install kc-astro-shared-theme sass
```

For local development with multiple sites:

```json
{
  "dependencies": {
    "kc-astro-shared-theme": "file:../kc-astro-shared-theme",
    "astro": "^5.8.1",
    "sass": "^1.89.1"
  }
}
```

## Quick Start

### 1. Import Components

```astro
---
import { BaseLayout, Header, Footer } from 'kc-astro-shared-theme';
import 'kc-astro-shared-theme/styles/main.scss';
---

<BaseLayout title="My Site" description="Site description">
  <Header siteName="My Site" navigationItems={[...]} />
  <main>
    <slot />
  </main>
  <Footer copyright="© 2025 My Site" />
</BaseLayout>
```

### 2. Customize with CSS Variables

```css
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-secondary-color;
  --font-family-base: 'Your-Font', sans-serif;
}
```

### 3. Google Tag Manager Support

```astro
<BaseLayout title="My Site" gtmId="GTM-XXXXXXX">
  <!-- Your content -->
</BaseLayout>
```

## Available Components

- **BaseLayout** - HTML document structure with optional GTM integration
- **Header** - Responsive navigation header with logo and menu
- **Footer** - Site footer with customizable content slots

## TypeScript Support

For TypeScript projects, create type declarations:

```typescript
// src/types/kc-astro-shared-theme.d.ts
declare module 'kc-astro-shared-theme' {
  export const BaseLayout: any;
  export const Header: any;
  export const Footer: any;
}

declare module 'kc-astro-shared-theme/styles/*' {
  const content: any;
  export default content;
}
```

## Customization

The theme uses CSS custom properties for easy customization. Override any of the default variables in your site's CSS:

```scss
// Import theme variables for SCSS usage
@import 'kc-astro-shared-theme/styles/variables';

// Override theme colors
$primary-color: #ef4444;
$secondary-color: #64748b;

// Use theme mixins
.my-button {
  @include button-style($primary-color);
}
```

## Development

### Project Structure

```
my-websites/
├── kc-astro-shared-theme/     # This theme package
├── site-1/                   # First website
├── site-2/                   # Second website
└── site-3/                   # Third website
```

### Making Changes

1. Update components in the theme package
2. Run `npm install` in consuming sites to pick up changes
3. Test across all sites before publishing

## License

MIT

## Author

Ken Chase
