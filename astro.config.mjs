import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
    imageService: false,
    speedInsights: {
      enabled: false,
    },
  }),
  integrations: [
    starlight({
      title: 'Jotun',
      components: {
        MarkdownContent: './src/components/overrides/MarkdownContentOverride.astro',
        Sidebar: './src/components/overrides/SidebarOverride.astro',
      },
      customCss: ['./src/tailwind.css'],
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
        {
          label: 'Pilot',
          items: [
            { label: 'Primary Weapons', link: '/pilot/primary-weapons' },
            { label: 'Secondary Weapons', link: '/pilot/secondary-weapons' },
            { label: 'Ordnance Weapons', link: '/pilot/ordnance-weapons' },
          ],
        },
        {
          label: 'Jotun',
          autogenerate: {
            directory: 'jotun',
          },
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
