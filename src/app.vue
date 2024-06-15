<template>
	<Body bg-dark-800 text-white>
		<NuxtPage />
	</Body>
</template>

<style lang="scss">
	html {
	-webkit-tap-highlight-color: transparent;
	scroll-behavior: smooth;
	@apply min-h-screen;
}
body {
	@apply overflow-x-hidden;
}
img {
	-webkit-user-drag: none;
	@apply select-none;
}

// Transitions
.fade-enter-active,
.fade-leave-active {
	@apply transition-opacity ease-in-out duration-300;
}
.fade-enter-from,
.fade-leave-to {
	@apply opacity-0;
}
</style>
