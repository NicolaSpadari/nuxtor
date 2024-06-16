<template>
	<div grid h-screen place-content-center>
		<Test />

		{{ data }}
	</div>
</template>

<script lang="ts" setup>
	const { data } = await useFetch("https://jsonplaceholder.typicode.com/todos/1");
</script>
