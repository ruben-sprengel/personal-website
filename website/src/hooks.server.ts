import { loadCatalog, loadIDs, key } from './locales/loader.ssr.svelte.js';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { locales } from 'virtual:wuchale/locales';
import { get } from 'svelte/store';
import { localeStore } from '$lib/features/i18n/localeStore';

// load at server startup
loadLocales(key, loadIDs, loadCatalog, locales);

export const handle = async ({ event, resolve }) => {
	const locale = get(localeStore);

	return await runWithLocale(locale, () => resolve(event));
};
