<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import CustThemeModeToogleButton from '$lib/components/ui-custom/cust-theme-mode-toogle-button.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import CustTogglei18nLocale from '$lib/components/ui-custom/CustTogglei18nLocale.svelte';
</script>

<div class="sticky top-0 z-50 w-full border-b bg-background">
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/" class={navigationMenuTriggerStyle()}>Ruben Sprengel</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<NavigationMenu.Root class="hidden sm:block">
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/#about-me-section" class={navigationMenuTriggerStyle()}>Über Mich</a>
						{/snippet}
					</NavigationMenu.Link>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/#skills-section" class={navigationMenuTriggerStyle()}>Expertise</a>
						{/snippet}
					</NavigationMenu.Link>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/#projects-section" class={navigationMenuTriggerStyle()}>Projekte</a>
						{/snippet}
					</NavigationMenu.Link>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/#career-section" class={navigationMenuTriggerStyle()}>Werdegang</a>
						{/snippet}
					</NavigationMenu.Link>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/#contact-section" class={navigationMenuTriggerStyle()}>Kontakt</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<NavigationMenu.Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<CustTogglei18nLocale />
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<CustThemeModeToogleButton />
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>
</div>
<Separator />
