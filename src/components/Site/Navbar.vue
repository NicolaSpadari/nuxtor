<template>
	<header class="top-0 z-10">
		<nav crate flex items-center justify-between py-6>
			<div class="flex lg:flex-1">
				<NuxtLink to="/" class="p-1.5 -m-1.5">
					<span class="sr-only">{{ name }}</span>
					<SvgoLogo :font-controlled="false" size-8 />
				</NuxtLink>
			</div>
			<div class="flex lg:hidden">
				<button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 -m-2.5">
					<span class="sr-only">Open main menu</span>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
			</div>
			<div hidden lg="flex gap-x-12">
				<NuxtLink to="/command" class="text-sm text-white font-semibold leading-6">Command</NuxtLink>
				<NuxtLink to="/notification" class="text-sm text-white font-semibold leading-6">Notification</NuxtLink>
				<NuxtLink to="/os" class="text-sm text-white font-semibold leading-6">OS Information</NuxtLink>
				<NuxtLink to="/this-page-does-not-exist" class="text-sm text-white font-semibold leading-6">404</NuxtLink>
			</div>
			<div hidden lg="flex flex-1 justify-end">
				<p class="text-sm text-white font-semibold leading-6">
					v{{ tauriVersion }}
				</p>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<!-- <div class="lg:hidden" role="dialog" aria-modal="true">
			<div class="fixed inset-0 z-10" />
			<div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
				<div class="flex items-center justify-between">
					<a href="#" class="p-1.5 -m-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
					</a>
					<button type="button" class="rounded-md p-2.5 text-gray-400 -m-2.5">
						<span class="sr-only">Close menu</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/25">
						<div class="py-6 space-y-2">
							<a href="#" class="block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 -mx-3 hover:bg-gray-800">Product</a>
							<a href="#" class="block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 -mx-3 hover:bg-gray-800">Features</a>
							<a href="#" class="block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 -mx-3 hover:bg-gray-800">Marketplace</a>
							<a href="#" class="block rounded-lg px-3 py-2 text-base text-white font-semibold leading-7 -mx-3 hover:bg-gray-800">Company</a>
						</div>
						<div class="py-6">
							<a href="#" class="block rounded-lg px-3 py-2.5 text-base text-white font-semibold leading-7 -mx-3 hover:bg-gray-800">Log in</a>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</header>
</template>

<script lang="ts" setup>
	const { name } = useConstants();
	const tauriVersion = await getTauriVersion();
</script>
