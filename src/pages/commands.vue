<template>
	<LayoutTile
		title="Commands"
		description="Access the system shell. Allows you to spawn child processes and manage files and URLs using their default application."
	>
		<form @submit.prevent="sendCommand()">
			<div mx-auto max-w-xl lg="mr-0 max-w-lg">
				<div grid grid-cols-1 gap-x-8 gap-y-6>
					<div>
						<label for="command-input" block text-sm text-white font-semibold leading-6>Command input</label>
						<div mt="2.5">
							<input id="command-input" v-model="input" type="text" name="command-input" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
						</div>
					</div>
					<div flex justify-end>
						<Btn type="submit">
							Send command
						</Btn>
					</div>
					<div mt-8>
						<label for="command-output" block text-sm text-white font-semibold leading-6>Command Output</label>
						<div mt="2.5">
							<textarea id="command-output" v-model="result" name="command-output" rows="10" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset" />
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

	const sendCommand = async () => {
		try{
			const response = await useTauriShellCommand.create("exec-sh", [
				"-c",
				input.value
			]).execute();

			result.value = JSON.stringify(response, null, 4);
		}catch(error){
			result.value = JSON.stringify(error, null, 4);
		}finally{
			input.value = "";
		}
	};
</script>
