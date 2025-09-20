import { locales } from 'virtual:wuchale/locales';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
import '../locales/loader.svelte.js';
import '../locales/loader.js';

import { localeStore } from '$lib/features/i18n/localeStore';
import { get } from 'svelte/store';
import { Locale } from '$lib/features/i18n/language';

export const load = async () => {
	let locale = Locale.DE;

	if (browser) {
		locale = get(localeStore);
	}

	if (!locales.includes(locale)) {
		return;
	}

	if (browser) {
		await loadLocale(locale);
	}
};
