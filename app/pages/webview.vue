<template>
	<LayoutTile
		title="Webview window"
		description="Create new webview in a detached window. This will create a new window flagged 'secondary' that has the same permissions as the main one. If you need more windows, update the permissions under capabilities > main or create a new capabilities file for the new window only."
	>
		<div class="flex flex-col items-center gap-6">
			<UButton variant="subtle" @click="openWindow((new Date).valueOf().toString(), app.repo)">
				Create external Webview
			</UButton>
			<UButton variant="subtle" @click="openWindow('secondary', '/os')">
				Create internal Webview
			</UButton>
		</div>
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "Webview",
		icon: "lucide:app-window",
		category: "interface",
		description: "Create new webview in a detached window"
	});

	const { app } = useAppConfig();
	const toast = useToast();

	const openWindow = async (id: string, page: string) => {
		const webview = new useTauriWebviewWindowWebviewWindow(id, {
			title: "Nuxtor webview",
			url: page,
			width: 1280,
			height: 720
		});

		webview.once("tauri://created", () => {
			toast.add({
				title: "Success",
				description: "Webview created",
				color: "success"
			});
		});
		webview.once("tauri://error", (error) => {
			toast.add({
				title: "Error",
				description: (error as any).payload,
				color: "error"
			});
		});
	};
</script>
