<template>
	<Transition
		enter-from-class="opacity-0" enter-active-class="ease-in-out duration-500" enter-to-class="opacity-100"
		leave-from-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-to-class="opacity-0"
	>
		<div v-if="showSidebar" class="relative z-20 lg:hidden" role="dialog" aria-modal="true">
			<div class="fixed inset-0 overflow-hidden">
				<div class="h-full flex flex-col overflow-y-auto bg-neutral-800/70 px-4 py-6 backdrop-blur-md">
					<div class="flex items-center justify-between">
						<NuxtLink to="/" class="p-1.5 -m-1.5">
							<SvgoLogo :filled="true" :font-controlled="false" size-8 />
						</NuxtLink>
						<button type="button" class="rounded-md p-2.5 text-neutral-300 -m-2.5" @click="showSidebar = false">
							<i-heroicons-solid-x-mark size-6 />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/25">
							<div class="py-6 space-y-2">
								<NuxtLink to="/commands" class="block px-3 py-2 text-base text-white font-semibold leading-7 -mx-3">
									Commands
								</NuxtLink>
								<NuxtLink to="/notifications" class="block px-3 py-2 text-base text-white font-semibold leading-7 -mx-3">
									Notifications
								</NuxtLink>
								<NuxtLink to="/os" class="block px-3 py-2 text-base text-white font-semibold leading-7 -mx-3">
									OS Informations
								</NuxtLink>
								<NuxtLink to="/foo" class="block px-3 py-2 text-base text-white font-semibold leading-7 -mx-3">
									404
								</NuxtLink>
							</div>
							<div class="py-6">
								<p class="px-3 text-base text-white font-semibold leading-7 -mx-3">
									v{{ tauriVersion }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
	const tauriVersion = await getTauriVersion();
	const { showSidebar } = useSidebar();
</script>

<style scoped>
	.router-link-exact-active:not(.home){
		@apply text-emerald-500;
	}
</style>
