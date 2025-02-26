export const usePages = () => {
	const router = useRouter();

	const routes = router.getRoutes().filter((route) => route.name !== "index" && route.name !== "all");

	const categorizedRoutes = routes.reduce((acc, route) => {
		const category = route.meta.category as string;
		if (!category) return acc;

		if (!acc[category]) {
			acc[category] = {
				label: category.charAt(0).toUpperCase() + category.slice(1),
				icon: route.meta.categoryIcon || "i-lucide-folder",
				to: route.path,
				children: []
			};
		}

		acc[category].children.push({
			label: route.meta.name as string,
			description: route.meta.description as string,
			icon: `i-${route.meta.icon}`,
			to: route.path
		});

		return acc;
	}, {} as Record<string, any>);

	const pages = Object.values(categorizedRoutes);

	return {
		pages
	};
};
