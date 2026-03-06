import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Nmreinoso.github.io',
  base: '/Karen_A',
  output: 'static',
  // This helps Astro handle trailing slashes for GitHub Pages
  build: {
    format: 'directory'
  }
});
