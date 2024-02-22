import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      title: 'Jotun',
      components: {
        Sidebar: './src/components/overrides/SidebarOverride.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
      social: {
        github: 'https://github.com/TheDolentCity/jotun',
      },
      sidebar: [
        {
          label: 'Home',
          collapsed: false,
          items: [
            { label: 'Introduction', link: '/home/introduction' },
            { label: 'Game Setup', link: '/home/game-setup' },
          ],
        },
        {
          label: 'Rules',
          autogenerate: {
            directory: 'rules',
          },
        },
        {
          label: 'Setting',
          autogenerate: {
            directory: 'setting',
          },
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
