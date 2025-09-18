// @ts-check
import { adapter as svelte } from "@wuchale/svelte";
import { defineConfig } from "wuchale";

export default defineConfig({
	sourceLocale: 'de',
	otherLocales: ["en"],
	adapters: {
		main: svelte(),
	},
});
