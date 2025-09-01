import type { Component } from 'svelte';
import type { IconProps } from '@lucide/svelte';

interface Skill {
	id: number;
	icon: Component<IconProps>;
	title: string;
	description: string;
}

export type { Skill };
