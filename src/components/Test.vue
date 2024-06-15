<template>
	<div text-center space-y-5>
		Hello from Nuxtor {{ version }}
	</div>
</template>

<script lang="ts" setup>
	const version = await getTauriVersion();
</script>