<template>
	<div relative overflow-hidden px-6 lg="px-8">
		<div grid mx-auto h-screen max-w-2xl place-content-center>
			<SvgoLogo :filled="true" :font-controlled="false" mx-auto mb-8 size-40 />

			<div text-center>
				<h1 animate-pulse text-4xl text-light-300 font-bold tracking-wider font-heading sm="text-6xl">
					{{ name.toUpperCase() }}
				</h1>
				<p mt-5 flex gap-1 text-neutral-300 leading-8>
					Powered by
					<NuxtLink :to="nuxtSite" target="_blank" text-accent underline>
						Nuxt 3
					</NuxtLink>
					-
					<NuxtLink :to="tauriSite" target="_blank" text-accent underline>
						Tauri 2
					</NuxtLink>
					-
					<NuxtLink :to="unoSite" target="_blank" text-accent underline>
						UnoCSS
					</NuxtLink>
				</p>
				<div mt-15>
					<Hyperlink :to="repo">
						Star on GitHub
					</Hyperlink>
				</div>
			</div>
		</div>

		<div fixed text-sm bottom-6 absolute-center-h>
			<p text-sm text-neutral-500>Made by {{ author }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { name, author, repo, tauriSite, nuxtSite, unoSite } = useConstants();

	definePageMeta({
		layout: "home"
	});
</script>
