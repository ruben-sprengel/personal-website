import type { ContactOption } from '$lib/features/contact/types';
import { Github, Linkedin } from '@lucide/svelte';

const contactOptions: ContactOption[] = [
	{
		id: 1,
		icon: Linkedin,
		title: 'LinkedIn',
		description: 'Vernetzen Sie sich auf LinkedIn mit mir.',
		link: 'https://linkedin.com/in/ruben-sprengel'
	},
	{
		id: 2,
		icon: Github,
		title: 'GitHub',
		description:
			'Folgen Sie mir auf GitHub, um meine neuesten Projekte und Open-Source-Beiträge zu sehen.',
		link: 'https://github.com/ruben-sprengel'
	}
];

export { contactOptions };
