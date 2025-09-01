import type { Skill } from '$lib/features/skills/types';
import { Server, ShieldCheck, Database, LayoutGrid } from '@lucide/svelte';

const skills: Skill[] = [
	{
		id: 1,
		icon: Server,
		title: 'Full Stack Entwicklung',
		description:
			'Ich konzipiere, entwickle und betreue datengetriebene Anwendungen – von der Datenbank, ueber das Backend bis hin zur Benutzeroberfläche.'
	},
	{
		id: 2,
		icon: ShieldCheck,
		title: 'DevOps & DevSecOps',
		description:
			'Automatisierung von Workflows, CI/CD-Pipelines und die Integration von Sicherheitsaspekten in den gesamten Entwicklungsprozess.'
	},
	{
		id: 3,
		icon: Database,
		title: 'Data Engineering',
		description:
			'Entwicklung von Datenpipelines, Transformationen und Architekturen zur Bereitstellung von Daten für datengetriebene Services.'
	},
	{
		id: 4,
		icon: LayoutGrid,
		title: 'Design & Architektur',
		description:
			'Konzeption von skalierbaren, wartbaren und robusten Systemarchitekturen, um komplexe Anforderungen effizient zu lösen.'
	}
];

export { skills };
