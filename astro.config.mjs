import { defineConfig } from 'astro/config';

export default defineConfig({
  // Ensure this matches your GitHub URL exactly
  site: 'https://Nmreinoso.github.io',
  // This MUST match your repository name exactly
  base: '/Karen_A',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
