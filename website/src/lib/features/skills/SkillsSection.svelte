<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { skills } from '$lib/features/skills/data';
</script>

<section id="skills-section" class="w-full px-4 py-24">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
		<h2 class="text-4xl font-extrabold tracking-tight text-primary">Expertise</h2>
		<p class="mt-4 max-w-2xl text-xl font-light text-zinc-700 md:text-2xl dark:text-zinc-300">
			Ein Überblick über Schwerpunkte, die meine Arbeit prägen.
		</p>

		<div class="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each skills as skill (skill.title)}
				<Card.Root
					class="flex flex-col items-center justify-center rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary"
				>
					<Card.Header class="flex flex-col items-center">
						<svelte:component this={skill.icon} class="mb-4 h-16 w-16 text-primary" />
						<Card.Title class="mb-2 text-center text-2xl font-semibold">{skill.title}</Card.Title>
					</Card.Header>
					<Card.Content class="text-center">
						<p class="text-lg leading-relaxed font-light text-zinc-700 dark:text-zinc-300">
							{skill.description}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
