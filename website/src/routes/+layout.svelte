<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/rs-logo.png';
	import { ModeWatcher } from 'mode-watcher';
	import CustNavigationMenue from '$lib/components/ui-custom/cust-navigation-menue.svelte';
	import CustFooter from '$lib/components/ui-custom/cust-footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Ruben Sprengel</title>
	<meta name="description" content="Personal Website von Ruben Sprengel" />
</svelte:head>

<ModeWatcher />
<CustNavigationMenue />
{@render children?.()}
<CustFooter />
