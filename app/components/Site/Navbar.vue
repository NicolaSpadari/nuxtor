<template>
	<UHeader>
		<template #title>
			<NuxtLink to="/" class="group/logo">
				<SvgoLogo :font-controlled="false" class="opacity-70 group-hover/logo:opacity-100 transition-opacity size-6" />
			</NuxtLink>
		</template>
		<UNavigationMenu
			:items="pages"
			variant="link"
			:ui="{
				viewportWrapper: 'w-2xl absolute-center-h',
				list: 'gap-x-3'
			}"
		/>
		<template #body>
			<UNavigationMenu
				:items="pages"
				orientation="vertical"
				variant="link"
			/>
		</template>
		<template #right>
			<UBadge variant="subtle">
				Tauri v{{ tauriVersion }}
			</UBadge>
		</template>
	</UHeader>
</template>

<script lang="ts" setup>
	const { pages } = usePages();
	const tauriVersion = await useTauriAppGetTauriVersion();
</script>
