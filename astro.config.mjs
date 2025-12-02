// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://begleridocs.github.io',
	integrations: [starlight({ title: 'https://begleridocs.github.io/' })
		starlight({
			title: 'Begleri Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/begleridocs/begleridocs.github.io' }],
			favicon: '/Be.svg',
			  logo: {    src: './src/assets/Be.webp',},
			sidebar: [
				{
					label: 'Contests',
					autogenerate: { directory: 'contests' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				},
			],
		}),
	],
});
