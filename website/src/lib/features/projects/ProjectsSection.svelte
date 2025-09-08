<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Github, Store } from '@lucide/svelte';
	import { projects } from '$lib/features/projects/data';
</script>

<section id="projects-section" class="w-full px-4 py-24">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
		<h2 class="text-4xl font-extrabold tracking-tight text-blue-600 md:text-5xl dark:text-blue-700">
			Projekte
		</h2>
		<p class="mt-4 max-w-2xl text-xl font-light text-gray-700 md:text-2xl dark:text-gray-400">
			Einige meiner aktuellen privaten Projekte und Beiträge auf GitHub.
		</p>

		<div class="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each projects as project (project.id)}
				<Card.Root
					class="flex flex-col justify-between rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary"
				>
					<Card.Header>
						<Card.Title class="text-center text-2xl font-semibold">{project.title}</Card.Title>
					</Card.Header>
					<Card.Content class="text-center">
						<p class="mb-4 text-lg leading-relaxed font-light text-gray-600 dark:text-gray-400">
							{project.description}
						</p>
					</Card.Content>
					<Card.Footer class="flex flex-col gap-2">
						<div class="flex flex-row flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<Badge variant="default" class="text-white">{tag}</Badge>
							{/each}
						</div>
						<div class="mt-4 flex flex-row gap-2">
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer external"
								class={buttonVariants({ variant: 'outline', size: 'lg' })}
							>
								<Github class="mr-2 h-4 w-4" />
								GitHub
							</a>
							{#if project.jetbrainsMarketplaceLink}
								<a
									href={project.jetbrainsMarketplaceLink}
									target="_blank"
									rel="noopener noreferrer external"
									class={buttonVariants({ variant: 'outline', size: 'lg' })}
								>
									<Store class="mr-2 h-4 w-4" />
									Jetbrains Marketplace
								</a>
							{/if}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
