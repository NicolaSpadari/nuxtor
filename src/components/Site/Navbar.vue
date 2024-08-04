<template>
	<header top-0 z-10>
		<nav flex items-center justify-between py-6 crate>
			<div flex lg="flex-1">
				<NuxtLink to="/" class="home" p-1.5 m="-1.5">
					<SvgoLogo :font-controlled="false" size-8 />
				</NuxtLink>
			</div>
			<div flex lg="hidden">
				<button type="button" @click="showSidebar = true" inline-flex items-center justify-center rounded-md p-2.5 text-neutral-300 m="-2.5">
					<Icon name="heroicons-solid:bars-3" size-6 />
				</button>
			</div>
			<div hidden lg="flex gap-x-12">
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
			</div>
			<div hidden lg="flex flex-1 justify-end">
				<p text-sm text-white font-semibold leading-6>
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
