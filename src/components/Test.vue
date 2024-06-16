<template>
	<div text-center space-y-5>
		Hello from Nuxtor - Tauri v{{ version }}

		<p>Shell command result: {{ result }}</p>
	</div>
</template>

<script lang="ts" setup>
	const version = await getTauriVersion();

	const result = await Command.create("exec-sh", [
		"-c",
		"echo 'Hello World!'"
	]).execute();
</script>
