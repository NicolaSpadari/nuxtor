<template>
	<button class="disabled:(cursor-not-allowed opacity-60)" gap-1 rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm transition-colors hover="bg-emerald-600" focus-visible="outline-2 outline-emerald-600 outline-offset-2 outline">
		<slot />
	</button>
</template>
