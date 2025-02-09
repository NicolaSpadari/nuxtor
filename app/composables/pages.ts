export const usePages = () => {
	const router = useRouter();

	const pages = router.getRoutes().filter((route) => route.name !== "index" && route.name !== "all").map((route) => {
		return {
			label: route.meta.name,
			to: route.path,
			icon: route.meta.icon
		};
	});

	return {
		pages
	};
};
