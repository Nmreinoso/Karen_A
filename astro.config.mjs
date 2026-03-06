import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Nmreinoso.github.io',
  base: '/Karen_A',
  trailingSlash: 'always', // This prevents internal link breakage on GH Pages
  build: {
    format: 'directory', // Ensures /resume becomes /resume/index.html
  }
});
