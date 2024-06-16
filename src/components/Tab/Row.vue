<template>
	<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
		<dt class="flex items-center text-sm text-light-200 font-medium">
			{{ props.heading }}
		</dt>
		<dd class="flex items-center text-sm text-neutral-300 leading-6 sm:col-span-2 sm:mt-0">
			{{ props.body }}
		</dd>
	</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		heading: string
		body: string
	}>();
</script>
