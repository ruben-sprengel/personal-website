// @ts-check
import { adapter as svelte } from '@wuchale/svelte';
import { adapter as js } from 'wuchale/adapter-vanilla';
import { defineConfig } from 'wuchale';

export default defineConfig({
	sourceLocale: 'de',
	otherLocales: ['en'],
	adapters: {
		main: svelte({
			heuristic: (_, details) => {
				// never translate form method attributes
				if (details.attribute === 'method') {
					return false;
				}

				// exclude other technical attributes:
				if (details.attribute === 'type' && details.element === 'input') {
					return false; // don't translate input types like "submit", "text", etc.
				}

				if (details.attribute === 'enctype') {
					return false; // don't translate form encoding types
				}
			}
		}),
		js: js({
			files: [
				'src/**/+{page,layout}.{js,ts}',
				'src/**/+{page,layout}.server.{js,ts}',
				'src/lib/features/**/*.{js,ts}'
			]
		})
	}
});
