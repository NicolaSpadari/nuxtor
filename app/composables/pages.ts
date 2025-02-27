export const usePages = () => {
	const router = useRouter();
	const { pageCategories } = useAppConfig();

	const routes = router.getRoutes().filter((route) => route.name !== "index" && route.name !== "all");

	const categorizedRoutes = routes.reduce((acc, route) => {
		const category = route.meta.category as string || "other";
		if (!category) return acc;

		if (!acc[category]) {
			acc[category] = {
				label: pageCategories[category as keyof typeof pageCategories]?.label,
				icon: pageCategories[category as keyof typeof pageCategories]?.icon || "i-lucide-folder",
				to: route.path,
				children: []
			};
		}

		acc[category].children.push({
			label: route.meta.name as string || route.name,
			description: route.meta.description as string,
			icon: route.meta.icon || "i-lucide-file",
			to: route.path
		});

		return acc;
	}, {} as Record<string, any>);

	const pages = Object.values(categorizedRoutes);

	return {
		pages
	};
};
