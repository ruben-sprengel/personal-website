<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	import { Star, ExternalLink, Award, Briefcase } from '@lucide/svelte';
	import { rawCareerData } from '$lib/features/career/data';
	import { Separator } from '$lib/components/ui/separator';
	import { formatPeriod } from '$lib/features/career/utils';

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

	function calculateTotalExperience(): { years: number; months: number } {
		let totalMonths = 0;
		const today = new Date();
		const currentMonth = today.getMonth() + 1;
		const currentYear = today.getFullYear();

		groupedCareerData.forEach((company) => {
			company.positions.forEach((position) => {
				const [startMonth, startYear] = position.start.split('/').map(Number);
				let endMonth, endYear;

				if (position.end.toLowerCase() === 'now') {
					endMonth = currentMonth;
					endYear = currentYear;
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

	function getExperienceString(showPlus: boolean): string {
		const { years, months } = totalExperience;
		const yearsText = `${years} ${years === 1 ? 'Jahr' : 'Jahre'}`;

		if (showPlus) {
			return `${years}${months > 0 ? '+' : ''} Jahre`;
		} else {
			const monthsText = months > 0 ? ` und ${months} ${months === 1 ? 'Monat' : 'Monate'}` : '';
			return `${yearsText}${monthsText}`;
		}
	}
</script>

<section id="career-section" class="w-full px-4 py-24">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-center">
		<h2 class="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">Werdegang</h2>

		<div
			class="mt-12 mb-12 flex flex-row items-center justify-center gap-4 text-center text-2xl font-bold text-amber-600"
		>
			<Briefcase size="48" class="text-amber-600" />
			{getExperienceString(true)}
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
								<TimelineItem data={position} />
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
				<Award class="text-amber-500" /> Weitere Zertifizierungen und Badges sind über mein LinkedIn
				Profil einsehbar.
			</span>
		</div>
	</div>
</section>
