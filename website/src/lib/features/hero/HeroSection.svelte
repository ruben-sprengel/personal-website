<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { contactOptions } from '$lib/features/contact/data';
	import { env } from '$env/dynamic/public';
</script>

<section
	id="hero-section"
	class="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-4 py-16 lg:flex-row lg:gap-24"
>
	<div class="flex-shrink-0">
		<enhanced:img
			src="/src/lib/assets/rs-logo.png"
			alt="Avatar von {env.PUBLIC_OWNER_NAME}"
			class="h-64 w-64 rounded-full shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-white md:h-80 md:w-80 dark:ring-offset-gray-950"
			fetchpriority="high"
		/>
	</div>

	<div class="flex max-w-xl flex-col text-center lg:text-left">
		<div class="mb-8">
			<h1 class="text-4xl font-extrabold tracking-tight text-primary md:text-6xl">Moin!</h1>
			<p class="mt-4 text-xl leading-relaxed font-light md:text-2xl">
				Mein Name ist {env.PUBLIC_OWNER_NAME}, ich bin ein leidenschaftlicher Fullstack Developer im
				digitalen Gesundheitswesen. Ich baue moderne, cloud-native Software, welche durch
				datengetriebene und benutzerzentrierte Ansätze spürbare Mehrwerte schafft.
			</p>
			<p
				class="mt-4 text-lg leading-relaxed font-light text-zinc-700 md:text-xl dark:text-zinc-300"
			>
				Als Teil des Data Driven Services Teams bei der ITSC GmbH gestalte ich den digitalen Wandel
				bei gesetzlichen Krankenkassen aktiv mit – agil, skalierbar und zukunftsorientiert.
			</p>
		</div>

		<div class="flex flex-row items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
</section>
