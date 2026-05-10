// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Use server output for Vercel SSR since hybrid is removed and we need API routes
  adapter: vercel(),
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