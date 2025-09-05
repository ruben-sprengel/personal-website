<script lang="ts">
	import logo from '$lib/assets/rs-logo.png';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { contactOptions } from '$lib/features/contact/data';
	import { env } from '$env/dynamic/public';
</script>

<section
	id="hero-section"
	class="flex min-h-screen w-full flex-col items-center justify-center gap-12 px-4 py-16 lg:flex-row lg:gap-24"
>
	<div class="flex-shrink-0">
		<img
			src={logo}
			alt="Avatar von {env.PUBLIC_OWNER_NAME}"
			class="h-64 w-64 rounded-full shadow-2xl ring-4 ring-blue-600 ring-offset-4 ring-offset-white md:h-80 md:w-80 dark:ring-blue-700 dark:ring-offset-gray-950"
		/>
	</div>

	<div class="flex max-w-xl flex-col text-center lg:text-left">
		<div class="mb-8">
			<h1
				class="text-4xl font-extrabold tracking-tight text-blue-600 md:text-6xl dark:text-blue-700"
			>
				Moin!
			</h1>
			<p
				class="mt-4 text-xl leading-relaxed font-light text-gray-700 md:text-2xl dark:text-gray-400"
			>
				Mein Name ist {env.PUBLIC_OWNER_NAME}, ich bin ein leidenschaftlicher Fullstack Developer im
				digitalen Gesundheitswesen. Ich baue moderne, datengetriebene und benutzerzentrierte
				Software, die echten Mehrwert schafft.
			</p>
			<p
				class="mt-4 text-lg leading-relaxed font-light text-gray-700 md:text-xl dark:text-gray-400"
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
					rel="noopener"
					class={buttonVariants({ variant: 'outline', size: 'lg' })}
				>
					<svelte:component this={option.icon} class="mr-2 h-4 w-4" />
					{option.title}
				</a>
			{/each}
		</div>
	</div>
</section>
