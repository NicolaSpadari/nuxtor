<template>
	<UContainer class="relative overflow-hidden h-screen">
		<div class="grid size-full place-content-center gap-y-8">
			<SvgoLogo :filled="true" :font-controlled="false" class="mx-auto size-40" />

			<div class="flex flex-col items-center gap-y-5 md:gap-y-7">
				<h1 class="animate-pulse text-3xl sm:text-4xl text-pretty font-bold text-(--ui-text-highlighted) font-heading">
					{{ app.name.toUpperCase() }}
				</h1>
				<p class="leading-7 text-pretty">
					Powered by
					<ULink :to="app.nuxtSite" target="_blank" :external="true">
						Nuxt 3
					</ULink>
					-
					<ULink :to="app.tauriSite" target="_blank" :external="true">
						Tauri 2
					</ULink>
					-
					<ULink :to="app.nuxtUiSite" target="_blank" :external="true">
						NuxtUI 3
					</ULink>
				</p>
				<UButton :to="app.repo">
					Star on GitHub
				</UButton>
			</div>
		</div>

		<div class="fixed bottom-6 text-sm absolute-center-h">
			<p class="text-sm text-(--ui-text-muted)">
				Made by {{ app.author }}
			</p>
		</div>
	</UContainer>
</template>

<script lang="ts" setup>
	const { app } = useAppConfig();

	definePageMeta({
		layout: "home"
	});
</script>
