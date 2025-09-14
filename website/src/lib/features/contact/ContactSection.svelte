<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { buttonVariants } from '$lib/components/ui/button';
	import { contactOptions } from '$lib/features/contact/data';
	import { MessagesSquare } from '@lucide/svelte';
</script>

<section id="contact-section" class="flex w-full items-center justify-center px-4 py-24">
	<div class="max-w-6xl">
		<div class="mb-8 text-center md:text-left">
			<h1 class="text-4xl font-extrabold tracking-tight text-primary md:text-6xl">Kontakt</h1>
		</div>
		<p class="mt-4 text-xl font-light text-zinc-700 md:text-2xl dark:text-zinc-300">
			Haben Sie Fragen zu meinen Projekten oder möchten Sie einfach in Kontakt treten?
		</p>

		<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each contactOptions as option (option.id)}
				<Card.Root
					class="flex flex-col items-center justify-center rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary"
				>
					<Card.Header class="flex flex-col items-center">
						<svelte:component this={option.icon} class="mb-4 h-16 w-16 text-primary" />
						<Card.Title class="mb-2 text-center text-2xl font-semibold">{option.title}</Card.Title>
					</Card.Header>
					<Card.Content class="text-center">
						<p class="text-lg leading-relaxed font-light text-zinc-700 dark:text-zinc-300">
							{option.description}
						</p>
						<div class="mt-4">
							<a
								href={option.link}
								target="_blank"
								rel="noopener noreferrer external"
								aria-label="{option.title} Profil"
								class={buttonVariants({ variant: 'outline', size: 'lg' })}
							>
								Kontakt <MessagesSquare />
							</a>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
