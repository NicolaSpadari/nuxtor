<template>
	<div text-center space-y-5>
		<p>Hello from Nuxtor - Tauri v{{ version }}</p>
		<p>Running on {{ currentOS }}</p>

		<p>Shell command result: {{ result }}</p>

		<button @click="runNotification()">
			send notification
		</button>
	</div>
</template>

<script lang="ts" setup>
	const currentOS = await platform();
	const version = await getTauriVersion();

	const result = await Command.create("exec-sh", [
		"-c",
		"echo 'Hello World!'"
	]).execute();

	const runNotification = async () => {
		let permissionGranted = await isPermissionGranted();

		if (!permissionGranted) {
			const permission = await requestPermission();
			permissionGranted = permission === "granted";
		}

		if (permissionGranted) {
			sendNotification({
				title: "Hello Tauri",
				body: "Notification from tauri"
			});
		}
	};
</script>
