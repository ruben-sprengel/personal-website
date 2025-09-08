<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { buttonVariants } from '$lib/components/ui/button';
	import { contactOptions } from '$lib/features/contact/data';
</script>

<section id="contact-section" class="w-full px-4 py-24">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
		<h2 class="text-4xl font-extrabold tracking-tight text-blue-600 md:text-5xl dark:text-blue-700">
			Kontakt
		</h2>
		<p class="mt-4 max-w-2xl text-xl font-light text-gray-700 md:text-2xl dark:text-gray-400">
			Haben Sie Fragen zu meinen Projekten oder möchten Sie einfach in Kontakt treten?
		</p>

		<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each contactOptions as option (option.id)}
				<Card.Root
					class="flex flex-col items-center justify-center rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary"
				>
					<Card.Header class="flex flex-col items-center">
						<svelte:component
							this={option.icon}
							class="mb-4 h-16 w-16 text-blue-600 dark:text-blue-700"
						/>
						<Card.Title class="mb-2 text-center text-2xl font-semibold">{option.title}</Card.Title>
					</Card.Header>
					<Card.Content class="text-center">
						<p class="text-lg leading-relaxed font-light text-gray-600 dark:text-gray-400">
							{option.description}
						</p>
						<div class="mt-4">
							<a
								href={option.link}
								target="_blank"
								rel="noopener noreferrer external"
								class={buttonVariants({ variant: 'outline', size: 'lg' })}
							>
								> Kontaktieren via {option.title}
							</a>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
