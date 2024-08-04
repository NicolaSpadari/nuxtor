<template>
	<Transition
		enter-from-class="opacity-0" enter-active-class="ease-in-out duration-500" enter-to-class="opacity-100"
		leave-from-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-to-class="opacity-0"
	>
		<div v-if="showSidebar" relative z-20 lg="hidden" role="dialog" aria-modal="true">
			<div fixed inset-0 overflow-hidden>
				<div crate h-full flex flex-col overflow-y-auto bg="neutral-800/70" py-6 backdrop-blur-md>
					<div flex items-center justify-between>
						<NuxtLink to="/" p-1.5 m="-1.5">
							<SvgoLogo :filled="true" :font-controlled="false" size-8 />
						</NuxtLink>
						<button type="button" rounded-md p-2.5 text-neutral-300 m="2.5" @click="showSidebar = false">
							<Icon name="heroicons-solid:x-mark" size-6 />
						</button>
					</div>
					<div mt-6 flow-root>
						<div my="-6" divide-y divide="gray-500/25">
							<div py-6 space-y-2>
								<NavLink to="/commands">
									Commands
								</NavLink>
								<NavLink to="/notifications">
									Notifications
								</NavLink>
								<NavLink to="/os">
									OS Informations
								</NavLink>
								<NavLink to="/foo">
									404
								</NavLink>
							</div>
							<div py-6>
								<p px-3 text-base text-white font-semibold leading-7 mx="-3">
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
	const tauriVersion = await useTauriAppGetTauriVersion();
	const { showSidebar } = useSidebar();
</script>

<style scoped>
	.router-link-exact-active:not(.home){
		@apply text-emerald-500;
	}
</style>
