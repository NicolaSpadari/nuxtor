<template>
	<UContainer class="relative overflow-hidden h-screen">
		<div class="grid size-full place-content-center gap-y-8">
			<SvgoLogo :filled="true" :font-controlled="false" class="mx-auto size-40" />

			<div class="flex flex-col items-center gap-y-3">
				<h1 class="animate-pulse text-3xl sm:text-4xl text-pretty font-bold font-heading md:mb-5">
					{{ app.name.toUpperCase() }}
				</h1>
				<p class="leading-7 text-pretty">
					Powered by
				</p>

				<div class="flex flex-wrap justify-center gap-1 md:gap-3">
					<UButton
						variant="ghost"
						size="xl"
						:to="app.nuxtSite"
						target="_blank"
						external
					>
						Nuxt 4
					</UButton>
					<UButton
						variant="ghost"
						size="xl"
						:to="app.nuxtUiSite"
						target="_blank"
						external
					>
						NuxtUI 4
					</UButton>
					<UButton
						variant="ghost"
						size="xl"
						:to="app.tauriSite"
						target="_blank"
						external
					>
						Tauri 2
					</UButton>
				</div>
			</div>

			<div class="flex justify-center">
				<UButton
					:to="app.repo"
				>
					Star on GitHub
				</UButton>
			</div>
		</div>

		<div class="fixed bottom-6 text-sm absolute-center-h">
			<div class="flex items-center gap-1 text-(--ui-text-muted)">
				<p class="text-sm">
					Made by
				</p>
				<ULink :to="app.repo" external target="_blank">
					{{ app.author }}
				</ULink>
			</div>
		</div>
	</UContainer>
</template>

<script lang="ts" setup>
	const { app } = useAppConfig();

	definePageMeta({
		layout: "home"
	});
</script>
