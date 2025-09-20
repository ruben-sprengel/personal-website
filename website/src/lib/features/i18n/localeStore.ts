import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Locale } from '$lib/features/i18n/language';

const getInitialLocale = (): Locale => {
	if (browser) {
		const storedLocale = localStorage.getItem('locale');
		if (storedLocale && Object.values(Locale).includes(storedLocale as Locale)) {
			return storedLocale as Locale;
		}
	}
	return Locale.DE; //default
};

export const localeStore = writable<Locale>(getInitialLocale());

localeStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem('locale', value);
	}
});
