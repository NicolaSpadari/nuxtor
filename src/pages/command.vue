<template>
	<div class="isolate">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="px-6 pb-10 pt-12 lg:px-8 lg:pt-22 sm:pt-16">
				<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
					<h2 class="text-3xl text-white font-bold tracking-tight">
						Command
					</h2>
					<p class="mt-6 text-lg text-gray-300 leading-8">
						Access the system shell. Allows you to spawn child processes and manage files and URLs using their default application.
					</p>
				</div>
			</div>
			<form class="px-6 pb-10 pt-12 lg:px-8 lg:pt-22 sm:pt-16" @submit.prevent="sendCommand()">
				<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6">
						<div>
							<label for="command-input" class="block text-sm text-white font-semibold leading-6">Command input</label>
							<div class="mt-2.5">
								<input id="command-input" v-model="input" type="text" name="command-input" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-emerald-500 focus:ring-inset">
							</div>
						</div>
						<div class="flex justify-end">
							<Btn type="submit">
								Send command
							</Btn>
						</div>
						<div mt-8>
							<label for="command-output" class="block text-sm text-white font-semibold leading-6">Command Output</label>
							<div class="mt-2.5">
								<textarea id="command-output" v-model="result" name="command-output" rows="10" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const input = ref("");
	const result = ref("");

	const sendCommand = async () => {
		const response = await Command.create("exec-sh", [
			"-c",
			input.value
		]).execute();

		result.value = JSON.stringify(response, null, 4);

		input.value = "";
	};
</script>
