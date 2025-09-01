import type { Project } from '$lib/features/projects/types';

const projects: Project[] = [
	{
		id: 1,
		title: 'Jetbrains Svelte Templates',
		description:
			'jetbrains-svelte-templates is a compact collection of Live Templates for JetBrains IDEs (like WebStorm and IntelliJ IDEA Ultimate) designed to speed up your Svelte & SvelteKit development. Use these templates to quickly insert essential code and boost your workflow.',
		githubLink: 'https://github.com/ruben-sprengel/jetbrains-svelte-templates',
		jetbrainsMarketplaceLink: 'https://plugins.jetbrains.com/plugin/28046-svelte-templates',
		tags: ['Svelte', 'SvelteKit', 'Jetbrains Plugin']
	},
	{
		id: 2,
		title: 'Personal Website',
		description:
			'Entwickelt mit SvelteKit und TailwindCSS sowie shadcn/svelte für ein modernes Design. Die Webseite ist mein persönliches Schaufenster, um Projekte wie das Jetbrains Svelte Templates Plugin und weitere Arbeiten vorzustellen.',
		githubLink: 'https://github.com/ruben-sprengel/projekt-2',
		tags: ['Svelte', 'SvelteKit', 'TailwindCSS', 'shadcn/svelte', 'TypeScript']
	}
];

export { projects };
