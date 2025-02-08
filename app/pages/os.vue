<template>
	<LayoutTile
		title="OS Information"
		description="Read information about the operating system using the OS Information plugin."
	>
		<div class="overflow-hidden rounded-lg bg-neutral-800 shadow">
			<dl class="divide-y divide-neutral-600">
				<TabRow heading="Platform" :body="`${currentPlatform} ${currentVersion}`" />
				<TabRow heading="Arch" :body="currentArch" />
				<TabRow heading="Locale" :body="currentLocale" />
			</dl>
		</div>
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "OS Informations",
		icon: "lucide:info"
	});

	const currentPlatform = await useTauriOsPlatform();
	const currentArch = await useTauriOsArch();
	const currentVersion = await useTauriOsVersion();
	const currentLocale = await useTauriOsLocale() || "Not detectable";
</script>
