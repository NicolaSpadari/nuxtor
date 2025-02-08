<template>
	<div class="relative overflow-hidden px-6" lg="px-8">
		<div class="grid mx-auto h-screen max-w-2xl place-content-center">
			<SvgoLogo :filled="true" :font-controlled="false" class="mx-auto mb-8 size-40" />

			<div class="text-center">
				<h1 class="animate-pulse text-4xl text-light-300 font-bold tracking-wider font-heading" sm="text-6xl">
					{{ app.name.toUpperCase() }}
				</h1>
				<p class="mt-5 flex gap-1 text-neutral-300 leading-8">
					Powered by
					<NuxtLink :to="app.nuxtSite" target="_blank" class="text-accent underline">
						Nuxt 3
					</NuxtLink>
					-
					<NuxtLink :to="app.tauriSite" target="_blank" class="text-accent underline">
						Tauri 2
					</NuxtLink>
					-
					<NuxtLink :to="app.NuxtUiSite" target="_blank" class="text-accent underline">
						NuxtUI 3
					</NuxtLink>
				</p>
				<div class="mt-15">
					<Hyperlink :to="app.repo">
						Star on GitHub
					</Hyperlink>
				</div>
			</div>
		</div>

		<div class="fixed bottom-6 text-sm absolute-center-h">
			<p class="text-sm text-neutral-500">
				Made by {{ app.author }}
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { app } = useAppConfig();

	definePageMeta({
		layout: "home"
	});
</script>
