export default defineNuxtRouteMiddleware(() => {
	const { showSidebar } = useSidebar();
	showSidebar.value = false;
});
