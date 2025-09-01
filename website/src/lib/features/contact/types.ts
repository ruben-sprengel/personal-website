import type { Component } from 'svelte';
import type { IconProps } from '@lucide/svelte';

interface ContactOption {
	id: number;
	icon: Component<IconProps>;
	title: string;
	description: string;
	link: string;
}

export type { ContactOption };
