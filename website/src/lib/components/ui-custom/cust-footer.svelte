<script>
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { PUBLIC_OWNER_NAME } from '$env/static/public';
</script>

<footer class="w-full bg-zinc-200 py-8 text-center text-sm dark:bg-zinc-900">
	<p>&copy; 2025 {PUBLIC_OWNER_NAME}. Alle Rechte vorbehalten.</p>

	<p>
		<a href="/datenschutz" rel="noopener" class={buttonVariants({ variant: 'link', size: 'lg' })}>
			Datenschutz
		</a>
		<a href="/impressum" rel="noopener" class={buttonVariants({ variant: 'link', size: 'lg' })}>
			Impressum
		</a>
	</p>
</footer>
