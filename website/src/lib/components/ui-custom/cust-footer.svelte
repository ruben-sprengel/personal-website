<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { env } from '$env/dynamic/public';

	const currentYear = new Date().getFullYear();
</script>

<footer
	class="w-full bg-zinc-200 py-8 text-center text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200"
>
	<p>&copy; {currentYear} {env.PUBLIC_OWNER_NAME}. Alle Rechte vorbehalten.</p>

	<p>
		<a href="/datenschutz" class={buttonVariants({ variant: 'link', size: 'lg' })}> Datenschutz </a>
		<a href="/impressum" class={buttonVariants({ variant: 'link', size: 'lg' })}> Impressum </a>
	</p>
</footer>
