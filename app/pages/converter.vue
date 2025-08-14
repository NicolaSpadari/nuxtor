<template>
	<LayoutTile
		title="Video Converter"
		description="Convert mp4 files to gif."
	>
		<div class="space-y-6 md:space-y-8">
			<div class="flex flex-col gap-y-4 items-start">
				<UButton @click="selectFile" size="lg">
					Select MP4 File
				</UButton>
				<p v-if="inputPath">Input file: {{ inputPath }}</p>
				<p v-if="outputPath">Output file: {{ outputPath }}</p>
			</div>

			<UButton @click="convertFile" :disabled="!inputPath || !outputPath || loading" size="lg">
				<span v-if="loading">Converting...</span>
				<span v-else>Convert to GIF</span>
			</UButton>
		</div>
	</LayoutTile>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { open, save } from '@tauri-apps/api/dialog';
import { invoke } from '@tauri-apps/api/tauri';

definePageMeta({
	name: "Converter",
	icon: "lucide:film",
	description: "Convert mp4 to gif",
	category: "media"
});

const inputPath = ref<string | null>(null);
const outputPath = ref<string | null>(null);
const loading = ref(false);
const toast = useToast();

const selectFile = async () => {
	const selected = await open({
		multiple: false,
		filters: [{
			name: 'Video',
			extensions: ['mp4']
		}]
	});

	if (typeof selected === 'string') {
		inputPath.value = selected;
		// Suggest output path
		outputPath.value = selected.replace(/\.mp4$/, '.gif');
	}
};

const convertFile = async () => {
	if (!inputPath.value || !outputPath.value) {
		return;
	}

	const savePath = await save({
		defaultPath: outputPath.value,
		filters: [{
			name: 'GIF',
			extensions: ['gif']
		}]
	});

	if (!savePath) {
		return;
	}
	outputPath.value = savePath;

	loading.value = true;
	try {
		await invoke('convert_to_gif', {
			inputPath: inputPath.value,
			outputPath: outputPath.value
		});
		toast.add({
			title: 'Success',
			description: 'File converted successfully!',
			color: 'success'
		});
	} catch (error) {
		toast.add({
			title: 'Error',
			description: String(error),
			color: 'error'
		});
	} finally {
		loading.value = false;
	}
};
</script>
