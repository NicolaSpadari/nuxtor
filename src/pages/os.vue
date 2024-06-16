<template>
	<LayoutTile
		title="OS Information"
		description="Read information about the operating system using the OS Information plugin."
	>
		<div class="overflow-hidden bg-neutral-800 shadow sm:rounded-lg">
			<dl class="divide-y divide-neutral-600">
				<TabRow heading="Platform" :body="`${currentPlatform} ${currentVersion}`" />
				<TabRow heading="Arch" :body="currentArch" />
				<TabRow heading="Locale" :body="currentLocale" />
			</dl>
		</div>
	</LayoutTile>
</template>

<script lang="ts" setup>
	const currentPlatform = await platform();
	const currentArch = await arch();
	const currentVersion = await version();
	const currentLocale = await locale() || "Not detectable";
</script>
