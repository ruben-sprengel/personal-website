<script>
	export let title;
	export let period;
	export let description;
	export let isCurrent = false;

	const titleClass = isCurrent ? 'font-bold text-lg text-primary' : 'font-semibold text-base';
</script>

<div class="relative mb-6 flex items-start gap-4">
	<div
		class="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full"
		class:bg-primary={isCurrent}
		class:bg-gray-400={!isCurrent}
	></div>

	<div class="flex-1">
		<h4 class={titleClass}>{title}</h4>
		<p class="mb-1 text-sm text-muted-foreground">{period}</p>
		<p>{description}</p>
	</div>
</div>
