<template>
	<LayoutTile
		title="OS Information"
		description="Read information about the operating system using the OS Information plugin."
	>
		<UAccordion :items="items" type="multiple" />
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "OS Informations",
		icon: "lucide:info",
		category: "system",
		description: "Read operating system informations."
	});

	const items = ref([
		{
			label: "System",
			icon: "lucide:monitor",
			content: `${useTauriOsPlatform()} ${useTauriOsVersion()}`
		},
		{
			label: "Arch",
			icon: "lucide:microchip",
			content: useTauriOsArch()
		},
		{
			label: "Locale",
			icon: "lucide:globe",
			content: await useTauriOsLocale() || "Not detectable"
		}
	]);
</script>
