<template>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="px-6 pb-10 pt-12 sm:pt-16 lg:px-8 lg:pt-22">
			<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
				<h2 class="text-3xl font-bold tracking-tight">
					{{ props.title }}
				</h2>
				<p class="mt-6 text-lg text-(--ui-text-muted) leading-8">
					{{ props.description }}
				</p>
			</div>
		</div>
		<div class="px-6 pb-10 pt-12 sm:pt-16 lg:px-8 lg:pt-22">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		title: string
		description: string
	}>();
</script>
