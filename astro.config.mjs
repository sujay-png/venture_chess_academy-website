// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://venturechessacademy.com',
  build: {
    // Inline compiled CSS into HTML so 1st-party stylesheets never block initial render
    inlineStylesheets: 'always',
  },
});
