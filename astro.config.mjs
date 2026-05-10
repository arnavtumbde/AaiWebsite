import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  output: 'hybrid', // Best setting for blogs with API routes
  adapter: vercel(), // Do not put any includeFiles hacks in here
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sanity({
      projectId: 'dmsuaqcf',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2023-05-03',
    }),
  ],
});