<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { contactOptions } from '$lib/features/contact/data';
	import { env } from '$env/dynamic/public';
</script>

<section
	id="hero-section"
	class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-24"
>
	<div class="grid max-w-6xl gap-16 md:grid-cols-2">
		<div>
			<div class="mb-8 text-center leading-relaxed md:text-left">
				<h1 class="text-4xl font-extrabold text-primary md:text-6xl">Moin!</h1>
				<h2 class="mt-4 text-2xl md:text-4xl">Ich bin {env.PUBLIC_OWNER_NAME}.</h2>
				<h3 class="mt-4 text-2xl font-light text-zinc-700 md:text-4xl dark:text-zinc-300">
					Ich baue mit Leidenschaft moderne Software, welche spürbare Mehrwerte schafft.
				</h3>
			</div>

			<div class="flex flex-row items-center justify-center gap-4 sm:flex-row md:justify-start">
				{#each contactOptions as option (option.id)}
					<a
						href={option.link}
						target="_blank"
						rel="noopener noreferrer external"
						class={buttonVariants({ variant: 'outline', size: 'lg' })}
					>
						<svelte:component this={option.icon} class="mr-2 h-4 w-4" />
						{option.title}
					</a>
				{/each}
			</div>
		</div>

		<div class="flex justify-center md:justify-end">
			<enhanced:img
				src="/src/lib/assets/rs-logo.png"
				alt="Avatar von {env.PUBLIC_OWNER_NAME}"
				class="h-64 w-64 rounded-full shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-white md:h-80 md:w-80 dark:ring-offset-gray-950"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>
