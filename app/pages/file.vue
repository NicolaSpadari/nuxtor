<template>
	<LayoutTile
		title="File System"
		description="Access the file system. For this demo the only allowed permission is read/write to the Documents folder (no sub directories)."
	>
		<UForm :state="inputState" :schema="schema" class="flex flex-col gap-y-4 items-end" @submit="createFile">
			<UFormField label="Text file name (with extension)" name="fileName">
				<UInput v-model="inputState.fileName" variant="subtle" size="lg" />
			</UFormField>

			<UFormField label="File content" name="fileContent">
				<UTextarea v-model="inputState.fileContent" variant="subtle" size="lg" :rows="10" />
			</UFormField>

			<UButton type="submit" size="lg">
				Create file
			</UButton>
		</UForm>
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "Files",
		icon: "lucide:file-text",
		category: "storage",
		description: "Create and manage files"
	});

	const schema = z.object({
		fileName: z.string({
			error: "File name is required"
		}).nonempty().regex(/^[\w,\s-]+\.[A-Z0-9]+$/i, {
			message: "Invalid filename format"
		}),
		fileContent: z.string({
			error: "File content is required"
		}).nonempty()
	});

	type Schema = zInfer<typeof schema>;

	const inputState = ref<Partial<Schema>>({
		fileName: undefined,
		fileContent: undefined
	});

	const toast = useToast();

	const createFile = async () => {
		try {
			const fileExists = await useTauriFsExists(inputState.value.fileName!, {
				baseDir: useTauriFsBaseDirectory.Document
			});

			if (fileExists) {
				toast.add({
					title: "Error",
					description: "The file already exists",
					color: "error"
				});

				return;
			}

			await useTauriFsWriteTextFile(inputState.value.fileName!, inputState.value.fileContent!, {
				baseDir: useTauriFsBaseDirectory.Document
			});
			toast.add({
				title: "Success",
				description: "The file has been created",
				color: "success"
			});
			inputState.value.fileName = inputState.value.fileContent = undefined;
		} catch (err) {
			toast.add({
				title: "Error",
				description: String(err),
				color: "error"
			});
		}
	};
</script>
