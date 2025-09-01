<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import CustThemeModeToogleButton from './cust-theme-mode-toogle-button.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	const projects: { title: string; href: string; description: string }[] = [
		{
			title: 'Jetbrains Svelte Template Plugin',
			href: '/projekte/jetbrains-svelte-templates',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Personal Website',
			href: '/projekte/personal-website',
			description: 'For sighted users to preview content available behind a link.'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<div class="m-4 flex items-center justify-center">
	<NavigationMenu.Root>
		<NavigationMenu.List class="flex gap-4">
			<NavigationMenu.Item>
				<NavigationMenu.Link>
					{#snippet child()}
						<a href="/" class={navigationMenuTriggerStyle()}>Ruben Sprengel</a>
					{/snippet}
				</NavigationMenu.Link>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Projekte</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul class="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
						{#each projects as project, i (i)}
							{@render ListItem({
								href: project.href,
								title: project.title,
								content: project.description
							})}
						{/each}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
			<NavigationMenu.Item>
				<CustThemeModeToogleButton />
			</NavigationMenu.Item>
		</NavigationMenu.List>
	</NavigationMenu.Root>
</div>

<Separator />
