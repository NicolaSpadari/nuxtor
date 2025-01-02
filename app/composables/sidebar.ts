export const useSidebar = () => {
	const showSidebar = useState("sidebar", () => false);

	return {
		showSidebar
	};
};
