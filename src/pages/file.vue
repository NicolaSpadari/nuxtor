<template>
	<LayoutTile
		title="File System"
		description="Access the file system. For this demo the only allowed permission is read/write to the Documents folder (no sub directories)."
	>
		<form @submit.prevent="createDummyFile()">
			<div mx-auto max-w-xl lg="mr-0 max-w-lg">
				<div grid grid-cols-1 gap-x-8 gap-y-6>
					<div>
						<label for="filename-input" block text-sm text-white font-semibold leading-6>
							Text file name
							<span text-neutral-400 font-light>(with extension)</span>
						</label>
						<div mt="2.5">
							<input id="filename-input" v-model="fileName" type="text" name="filename-input" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
						</div>
					</div>
					<div mt-8>
						<label for="filecontent-input" block text-sm text-white font-semibold leading-6>File content</label>
						<div mt="2.5">
							<textarea id="filecontent-input" v-model="fileContent" name="filecontent-input" rows="10" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset" />
						</div>
					</div>
					<div flex justify-end gap-3>
						<div v-if="done" h-full flex-center text-emerald-400 space-x-1>
							<p>Done</p>
							<Icon name="heroicons-solid:check" size-4 />
						</div>
						<div v-if="error" h-full flex-center text-red-400 space-x-1>
							<p>Error</p>
							<Icon name="heroicons-solid:exclamation-triangle" size-4 />
						</div>
						<Btn type="submit" :disabled="fileName === ''">
							Create file
						</Btn>
					</div>
				</div>
			</div>
		</form>
	</LayoutTile>
</template>

<script lang="ts" setup>
	const fileName = ref("");
	const fileContent = ref("");
	const done = ref(false);
	const error = ref(false);

	const createDummyFile = async () => {
		try {
			const fileExists = await useTauriFsExists(fileName.value, {
				baseDir: useTauriFsBaseDirectory.Document
			});

			if (!fileExists) {
				await useTauriFsWriteTextFile(fileName.value, fileContent.value, {
					baseDir: useTauriFsBaseDirectory.Document
				});
				done.value = true;
				fileName.value = fileContent.value = "";
				setTimeout(() => done.value = false, 3000);
			}
		} catch (err) {
			console.error("Error creating file:", err);
			error.value = true;
			setTimeout(() => error.value = false, 3000);
		}
	};
</script>
