<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	import { Star, ExternalLink, Award, Badge } from '@lucide/svelte';
	import { rawCareerData } from '$lib/features/career/data';
	import { Separator } from '$lib/components/ui/separator';

	const groupedCareerData = rawCareerData.map((companyGroup, companyIndex) => {
		const positionsWithIds = companyGroup.positions.map((position, positionIndex) => ({
			...position,
			id: `pos-${companyIndex}-${positionIndex}`
		}));

		return {
			...companyGroup,
			id: `comp-${companyIndex}`,
			positions: positionsWithIds
		};
	});

	const monthNames = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];

	function formatPeriod(start: string, end: string) {
		if (!start) return '';

		const [startMonth, startYear] = start.split('/').map(Number);

		const startString = `${monthNames[startMonth - 1]} ${startYear}`;

		let endString;
		if (end.toLowerCase() === 'now') {
			endString = 'heute';
		} else {
			const [endMonth, endYear] = end.split('/').map(Number);
			endString = `${monthNames[endMonth - 1]} ${endYear}`;
		}

		return `${startString} - ${endString}`;
	}

	function calculateTotalExperience() {
		let totalMonths = 0;

		groupedCareerData.forEach((company) => {
			company.positions.forEach((position) => {
				const [startMonth, startYear] = position.start.split('/').map(Number);

				let endMonth, endYear;
				if (position.end.toLowerCase() === 'now') {
					const today = new Date();
					endMonth = today.getMonth() + 1;
					endYear = today.getFullYear();
				} else {
					[endMonth, endYear] = position.end.split('/').map(Number);
				}

				totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
			});
		});

		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;

		return { years, months };
	}

	const totalExperience = calculateTotalExperience();
</script>

<section class="container mx-auto max-w-2xl py-12">
	<h2 class="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Werdegang</h2>

	<div class="mt-12 mb-12 text-center">
		<span class="text-2xl font-bold text-amber-600">
			{totalExperience.years} Jahre
			{#if totalExperience.months > 0}
				und {totalExperience.months} Monate
			{/if}
		</span>
		<p class="mt-2 text-lg text-zinc-700 dark:text-zinc-300">Berufserfahrung</p>
	</div>

	<div class="space-y-10">
		{#each groupedCareerData as companyGroup (companyGroup.id)}
			<div class="flex items-start gap-4">
				<div class="flex flex-col items-center pt-2">
					<div class="mt-2 w-0.5 flex-grow bg-zinc-100 dark:bg-zinc-900"></div>
				</div>

				<div class="flex-1">
					<h3 class="text-lg font-bold">{companyGroup.company}</h3>
					<p class="mb-4 text-sm text-zinc-700 dark:text-zinc-300">
						{formatPeriod(companyGroup.start, companyGroup.end)}
					</p>

					<div class="-mt-2 space-y-6">
						{#each companyGroup.positions as position (position.id)}
							<TimelineItem
								title={position.title}
								period={formatPeriod(position.start, position.end)}
								description={position.description}
								isCurrent={position.isCurrent}
							/>

							<Separator />
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<a
			class="flex flex-row items-center gap-2 pl-4 text-lg"
			href="https://www.ihk.de/bremen-bremerhaven/bilden-qualifizieren/berufliche-ausbildung/berufe-a-z/fachinformatiker-1305336"
			rel="noopener noreferrer external"
			target="_blank"
		>
			<Star size="38" class="text-amber-500" /> 2013: Fachinformatiker - Fachrichtung Systemintegration
			<ExternalLink size="14" />
		</a>

		<span class="flex flex-row items-center gap-2 pl-4 text-sm text-zinc-700 dark:text-zinc-300">
			Weitere Zertifizierungen <Award class="text-amber-500" /> und Badges <Badge
				class="text-amber-500"
			/> können Sie über mein LinkedIn Profil einsehen.</span
		>
	</div>
</section>
