<template>
	<LayoutTile
		title="Store"
		description="Persistent key-value store. Allows you to handle state to a file which can be saved and loaded on demand including between app restarts."
	>
		<form @submit.prevent="setStoreValue()">
			<div class="mx-auto max-w-xl" lg="mr-0 max-w-lg">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6">
					<div>
						<label for="store-value" class="block text-sm text-white font-semibold leading-6">Store value</label>
						<div class="mt-2.5">
							<input id="store-value" v-model="input" type="text" name="store-value" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset" sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
						</div>
					</div>
					<div class="flex justify-end">
						<Btn type="submit">
							Send command
						</Btn>
					</div>
					<div class="mt-8">
						<label for="store-data" class="block text-sm text-white font-semibold leading-6">Current Store data</label>
						<div class="mt-2.5">
							<textarea id="store-data" v-model="result" name="store-data" rows="10" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset" sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset" />
						</div>
					</div>
				</div>
			</div>
		</form>
	</LayoutTile>
</template>

<script lang="ts" setup>
	const input = ref("");
	const result = ref("");
	const autosave = ref(false);

	const store = await useTauriStoreLoad("store.bin", {
		autoSave: autosave.value
	});

	const getStoreValue = async () => {
		try {
			result.value = await store.get<string>("myData") || "";
		} catch (error) {
			result.value = JSON.stringify(error, null, 4);
		}
	};

	await getStoreValue();

	const setStoreValue = async () => {
		try {
			await store.set("myData", input.value);
			await getStoreValue();
		} catch (error) {
			result.value = JSON.stringify(error, null, 4);
		} finally {
			input.value = "";
		}
	};
</script>
