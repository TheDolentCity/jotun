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
      title: 'Jotun RPG',
      components: {
        Aside: './src/components/overrides/AsideOverride.astro',
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
            { label: 'Rules', link: '/home/rules' },
          ],
        },
        {
          label: 'Setting',
          collapsed: true,
          autogenerate: {
            directory: 'setting',
          },
        },
        {
          label: 'Campaigns',
          items: [
            {
              label: 'FIRST STRIKE',
              link: '/campaigns/first-strike',
            },
          ],
        },
        {
          label: 'Operations',
          items: [
            {
              label: 'Operation: DUST DEMON',
              link: '/operations/operation-dust-demon',
            },
            {
              label: 'Operation: DIVING BELL',
              link: '/operations/operation-diving-bell',
            },
          ],
        },
        {
          label: 'Pilot',
          items: [
            {
              label: 'Building a Pilot',
              link: '/pilot/building-a-pilot',
            },
            {
              label: 'Primary Weapons',
              link: '/pilot/primary-weapons',
            },
            {
              label: 'Secondary Weapons',
              link: '/pilot/secondary-weapons',
            },
            {
              label: 'Ordnance Weapons',
              link: '/pilot/ordnance-weapons',
            },
            {
              label: 'Combat Suits',
              link: '/pilot/combat-suits',
            },
          ],
        },
        {
          label: 'Jotun',
          items: [
            {
              label: 'Building a Jotun',
              link: '/jotun/building-a-jotun',
            },
            {
              label: 'Frames',
              link: '/jotun/frames',
            },
            {
              label: 'Main Mounts',
              link: '/jotun/main-mounts',
            },
            {
              label: 'Minor Mounts',
              link: '/jotun/minor-mounts',
            },
            {
              label: 'Major Mounts',
              link: '/jotun/major-mounts',
            },
            {
              label: 'Colossal Mounts',
              link: '/jotun/colossal-mounts',
            },
            {
              label: 'Auto-mech AI',
              link: '/jotun/auto-mech-ai',
            },
          ],
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
