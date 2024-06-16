<template>
	<main class="grid place-items-center px-6 py-24 lg:px-8 sm:py-32">
		<div class="text-center">
			<p class="text-base text-emerald-500 font-semibold">
				404
			</p>
			<h1 class="mt-4 text-3xl text-neutral-300 font-bold tracking-tight sm:text-5xl">
				Page not found
			</h1>
			<p class="mt-6 text-base text-neutral-400 leading-7">
				Sorry, we couldn't find the page you're looking for.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Hyperlink to="/">
					Back
				</Hyperlink>
			</div>
		</div>
	</main>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "blank"
	});
</script>
