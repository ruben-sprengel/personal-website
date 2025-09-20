<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import { localeStore } from '$lib/features/i18n/localeStore';
	import { Locale } from '$lib/features/i18n/language';
	import { loadLocale } from 'wuchale/load-utils';
	import { get } from 'svelte/store';

	async function toggleLanguage() {
		localeStore.update((currentLocale) => {
			return currentLocale === Locale.DE ? Locale.EN : Locale.DE;
		});

		const locale = get(localeStore);
		await loadLocale(locale);
	}
</script>

<Button
	variant="outline"
	size="icon"
	onclick={toggleLanguage}
	aria-label="Sprache wechseln"
	class="cursor-pointer"
>
	{#if $localeStore === Locale.DE}
		<span class="text-lg">DE</span>
	{:else}
		<span class="text-lg">EN</span>
	{/if}
</Button>
