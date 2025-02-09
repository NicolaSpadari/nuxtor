<template>
	<div class="grid place-items-center py-12 md:py-24">
		<div class="flex flex-col items-center gap-y-4 md:gap-y-8">
			<p class="text-(--ui-success) font-semibold">
				404
			</p>
			<div class="text-center space-y-3">
				<h1 class="text-3xl font-bold tracking-tight" sm="text-5xl">
					Page not found
				</h1>
				<p class="text-base text-(--ui-muted) leading-7">
					Sorry, we couldn't find the page you're looking for.
				</p>
			</div>
			<UButton to="/" variant="outline" size="lg" :ui="{ base: 'px-5' }">
				Go home
			</UButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
	definePageMeta({
		layout: "blank"
	});
</script>
