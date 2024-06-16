<template>
	<Html min-h-screen>
		<Body overflow-x-hidden bg-dark-800 text-white>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<style lang="scss">
	html {
		-webkit-tap-highlight-color: transparent;
		scroll-behavior: smooth;
	}
	img {
		-webkit-user-drag: none;
		@apply select-none;
	}

	// Transitions
	.page-enter-active,
	.page-leave-active {
		@apply transition-opacity ease-in-out duration-300;
	}
	.layout-enter-active,
	.layout-leave-active {
		@apply transition-opacity ease-in-out duration-500;
	}
	.page-enter-from,
	.page-leave-to,
	.layout-enter-from,
	.layout-leave-to {
		@apply opacity-0;
	}
</style>
