<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex min-h-screen items-center justify-center p-4">
	<div
		class="w-full max-w-lg rounded-xl bg-zinc-200 p-8 text-center shadow-lg md:p-12 dark:bg-zinc-900"
	>
		<h1 class="mb-4 text-6xl font-extrabold text-red-600 md:text-8xl dark:text-red-700">
			{$page.status || 'Oops!'}
		</h1>

		<h2 class="mb-6 text-3xl font-bold md:text-4xl">
			{$page.error?.message || 'Something went wrong.'}
		</h2>

		<p class="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
			Es tut uns leid, aber die Seite, die Sie suchen, konnte nicht gefunden werden oder es ist ein
			unerwarteter Fehler aufgetreten.
		</p>
	</div>
</section>
