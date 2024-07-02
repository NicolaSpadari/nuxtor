<template>
	<LayoutTile
		title="OS Information"
		description="Read information about the operating system using the OS Information plugin."
	>
		<div overflow-hidden bg-neutral-800 shadow rounded-lg>
			<dl divide-y divide-neutral-600>
				<TabRow heading="Platform" :body="`${currentPlatform} ${currentVersion}`" />
				<TabRow heading="Arch" :body="currentArch" />
				<TabRow heading="Locale" :body="currentLocale" />
			</dl>
		</div>
	</LayoutTile>
</template>

<script lang="ts" setup>
	const currentPlatform = await useTauriOsPlatform();
	const currentArch = await useTauriOsArch();
	const currentVersion = await useTauriOsVersion();
	const currentLocale = await useTauriOsLocale() || "Not detectable";
</script>
