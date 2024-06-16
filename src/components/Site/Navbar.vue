<template>
	<header class="top-0 z-10">
		<nav flex items-center justify-between py-6 crate>
			<div class="flex lg:flex-1">
				<NuxtLink to="/" class="home p-1.5 -m-1.5">
					<span class="sr-only">{{ name }}</span>
					<SvgoLogo :font-controlled="false" size-8 />
				</NuxtLink>
			</div>
			<div class="flex lg:hidden">
				<button type="button" @click="showSidebar = true" class="inline-flex items-center justify-center rounded-md p-2.5 text-neutral-300 -m-2.5">
					<i-heroicons-solid-bars-3 size-6 />
				</button>
			</div>
			<div hidden lg="flex gap-x-12">
				<NuxtLink to="/commands" class="text-sm text-white font-semibold leading-6">
					Commands
				</NuxtLink>
				<NuxtLink to="/notifications" class="text-sm text-white font-semibold leading-6">
					Notifications
				</NuxtLink>
				<NuxtLink to="/os" class="text-sm text-white font-semibold leading-6">
					OS Informations
				</NuxtLink>
				<NuxtLink to="/foo" class="text-sm text-white font-semibold leading-6">
					404
				</NuxtLink>
			</div>
			<div hidden lg="flex flex-1 justify-end">
				<p class="text-sm text-white font-semibold leading-6">
					v{{ tauriVersion }}
				</p>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	const { name } = useConstants();
	const { showSidebar } = useSidebar();
	const tauriVersion = await getTauriVersion();
</script>

<style scoped>
	.router-link-exact-active:not(.home){
		@apply text-emerald-500;
	}
</style>
