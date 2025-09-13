<script lang="ts">
	import ContactSection from '$lib/features/contact/ContactSection.svelte';
	import HeroSection from '$lib/features/hero/HeroSection.svelte';
	import ProjectsSection from '$lib/features/projects/ProjectsSection.svelte';
	import SkillsSection from '$lib/features/skills/SkillsSection.svelte';
	import CareerSection from '$lib/features/career/CareerSection.svelte';
</script>

<svelte:head>
	<title>Ruben Sprengel</title>
	<meta name="description" content="Personal Website von Ruben Sprengel" />
</svelte:head>

<HeroSection />

<SkillsSection />

<ProjectsSection />

<CareerSection />

<ContactSection />
