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
      title: 'Jotun RPG (alpha)',
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
          label: 'Introduction',
          link: '/introduction',
        },
        {
          label: 'Rules',
          autogenerate: {
            directory: 'rules',
          },
        },
        {
          label: 'Setting',
          collapsed: true,
          autogenerate: {
            directory: 'setting',
          },
        },
        {
          label: 'Non-Player Characters',
          collapsed: true,
          autogenerate: {
            directory: 'non-player-characters',
          },
        },
        {
          label: 'Player Characters',
          collapsed: true,
          autogenerate: {
            directory: 'player-characters',
          },
        },
        {
          label: 'Documents',
          collapsed: true,
          autogenerate: {
            directory: 'documents',
          },
        },
        {
          label: 'Campaigns',
          collapsed: true,
          items: [
            {
              label: 'First Strike',
              items: [
                {
                  label: 'Campaign',
                  link: '/campaigns/first-strike/first-strike-campaign',
                },
                {
                  label: 'Operation: DUST DEMON',
                  link: '/campaigns/first-strike/operation-dust-demon',
                },
                {
                  label: 'Operation: DIVING BELL',
                  link: '/campaigns/first-strike/operation-diving-bell',
                },
                {
                  label: 'Operation: CRYSTAL EYE',
                  link: '/campaigns/first-strike/operation-crystal-eye',
                },
                {
                  label: 'Battle of Red Stars',
                  link: '/campaigns/first-strike/battle-of-red-stars',
                },
              ],
            },
          ],
        },
        {
          label: 'Building a Pilot',
          collapsed: true,
          items: [
            {
              label: 'Building a Pilot',
              link: '/building-a-pilot/building-a-pilot',
            },
            {
              label: 'Primary Weapons',
              link: '/building-a-pilot/primary-weapons',
            },
            {
              label: 'Secondary Weapons',
              link: '/building-a-pilot/secondary-weapons',
            },
            {
              label: 'Ordnance Weapons',
              link: '/building-a-pilot/ordnance-weapons',
            },
            {
              label: 'Combat Suits',
              link: '/building-a-pilot/combat-suits',
            },
          ],
        },
        {
          label: 'Building a Jotun',
          collapsed: true,
          items: [
            {
              label: 'Building a Jotun',
              link: '/building-a-jotun/building-a-jotun',
            },
            {
              label: 'Frames',
              link: '/building-a-jotun/frames',
            },
            {
              label: 'Main Mounts',
              link: '/building-a-jotun/main-mounts',
            },
            {
              label: 'Minor Mounts',
              link: '/building-a-jotun/minor-mounts',
            },
            {
              label: 'Major Mounts',
              link: '/building-a-jotun/major-mounts',
            },
            {
              label: 'Colossal Mounts',
              link: '/building-a-jotun/colossal-mounts',
            },
            {
              label: 'Drones',
              link: '/building-a-jotun/drones',
            },
            {
              label: 'Building an AI',
              link: '/building-a-jotun/building-an-ai',
            },
          ],
        },
        // {
        //   label: 'NPC Templates',
        //   collapsed: true,
        //   autogenerate: {
        //     directory: 'npc-templates',
        //   },
        // },
      ],
    }),
    tailwind(),
    react(),
  ],
});
