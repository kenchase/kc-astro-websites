declare module 'kc-astro-shared-theme' {
  export const BaseLayout: any;
  export const Header: any;
  export const Footer: any;
  export const Heading: any;
  // Add any other components you currently use
}

declare module 'kc-astro-shared-theme/styles/*' {
  const content: any;
  export default content;
}
