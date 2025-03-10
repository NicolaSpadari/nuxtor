<template>
	<USlideover :open="showSidebar" @update:open="showSidebar = false">
		<template #title>
			<div class="flex gap-x-3">
				<Icon name="local:logo" class="size-6" />
				<span class="uppercase">{{ name }}</span>
			</div>
		</template>
		<template #description>
			<VisuallyHidden>Description</VisuallyHidden>
		</template>

		<template #body>
			<UNavigationMenu
				orientation="vertical"
				:items="items"
			/>
		</template>
	</USlideover>
</template>

<script lang="ts" setup>
	const { app: { name } } = useAppConfig();
	const { pages } = usePages();
	const { showSidebar } = useSidebar();
	const tauriVersion = await useTauriAppGetTauriVersion();

	const items = ref<any[]>([
		pages,
		[
			{
				label: `v${tauriVersion}`,
				disabled: true
			}
		]
	]);
</script>
