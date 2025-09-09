import type { Company } from '$lib/features/career/types';

const rawCareerData: Company[] = [
	{
		company: 'ITSC GmbH',
		start: '04/2021',
		end: 'now',
		positions: [
			{
				title: 'Full Stack Developer',
				start: '01/2023',
				end: 'now',
				description:
					'Konzeption und Entwicklung moderner, cloud-nativer Software, die durch datengetriebene und benutzerzentrierte Ansätze spürbaren Mehrwert für Versicherte und Krankenkassen schafft.',
				skills: [
					{
						id: 1,
						name: 'Full Stack Software Entwicklung'
					},
					{
						id: 2,
						name: 'DevOps'
					},
					{
						id: 3,
						name: ' DevSecOps'
					},
					{
						id: 4,
						name: 'Data Engineering'
					},
					{
						id: 5,
						name: 'Architektur & Design'
					},
					{
						id: 6,
						name: 'cloud-native'
					},
					{
						id: 7,
						name: 'Scrum'
					}
				],
				isCurrent: true
			},
			{
				title: 'DevOps Engineer',
				start: '04/2021',
				end: '12/2022',
				description: '',
				skills: [
					{
						id: 1,
						name: 'Docker'
					},
					{
						id: 2,
						name: 'Kubernetes'
					},
					{
						id: 3,
						name: 'CICD'
					},
					{
						id: 4,
						name: 'Observability'
					},
					{
						id: 5,
						name: 'Monitoring & Alerting'
					},
					{
						id: 6,
						name: 'IaC'
					},
					{
						id: 7,
						name: 'Datenbanken'
					},
					{
						id: 8,
						name: 'Linux'
					},
					{
						id: 9,
						name: 'Scrum'
					}
				],
				isCurrent: false
			}
		]
	},
	{
		company: 'Vergangene Firmen',
		start: '11/2013',
		end: '03/2021',
		positions: [
			{
				title: 'Vergangene Positionen (Bereich IT)',
				start: '11/2013',
				end: '03/2021',
				description: 'Details sind über mein LinkedIn Profil einsehbar.',
				skills: [],
				isCurrent: false
			}
		]
	}
];

export { rawCareerData };
