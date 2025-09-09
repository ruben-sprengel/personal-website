<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { Position } from '$lib/features/career/types';
	import { formatPeriod } from '$lib/features/career/utils';

	interface Props {
		data: Position;
	}

	let { data }: Props = $props();

	const titleClass = data.isCurrent ? 'font-bold text-lg text-primary' : 'font-semibold';
</script>

<div class="relative mb-6 flex items-start gap-4">
	<div
		class="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full"
		class:bg-primary={data.isCurrent}
		class:bg-gray-400={!data.isCurrent}
	></div>

	<div class="flex-1">
		<h4 class={titleClass}>{data.title}</h4>
		<p class="mb-1 text-sm text-muted-foreground">{formatPeriod(data.start, data.end)}</p>
		<p class="text-wrap">{data.description}</p>
		<div class="flex flex-wrap gap-2 p-2">
			{#each data.skills as skill (skill.id)}
				<Badge variant="outline">{skill.name}</Badge>
			{/each}
		</div>
	</div>
</div>
