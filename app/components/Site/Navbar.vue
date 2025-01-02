<template>
	<header class="top-0 z-10">
		<nav crate class="flex items-center justify-between py-6">
			<div class="flex" lg="flex-1">
				<NuxtLink to="/" class="home p-1.5 -m-1.5">
					<SvgoLogo :font-controlled="false" class="size-8" />
				</NuxtLink>
			</div>
			<div class="flex" lg="hidden">
				<button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-neutral-300 -m-2.5" @click="showSidebar = true">
					<Icon name="heroicons-solid:bars-3" class="size-6" />
				</button>
			</div>
			<div class="hidden" lg="flex gap-x-12">
				<NavLink to="/commands">
					Commands
				</NavLink>
				<NavLink to="/notifications">
					Notifications
				</NavLink>
				<NavLink to="/os">
					OS Informations
				</NavLink>
				<NavLink to="/file">
					File
				</NavLink>
				<NavLink to="/store">
					Store
				</NavLink>
			</div>
			<div class="hidden" lg="flex flex-1 justify-end">
				<p class="text-sm text-white font-semibold leading-6">
					v{{ tauriVersion }}
				</p>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	const { showSidebar } = useSidebar();
	const tauriVersion = await useTauriAppGetTauriVersion();
</script>

<style scoped>
	.router-link-exact-active:not(.home){
		@apply text-emerald-500;
	}
</style>
