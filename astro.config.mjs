import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://credixa33.com',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'desktop-4c9k37b.tail007208.ts.net',
        '.ts.net',
        'localhost',
        '127.0.0.1',
      ],
      hmr: {
        clientPort: 4321,
      },
    },
  },
});
