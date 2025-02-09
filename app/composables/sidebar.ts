export const useSidebar = () => {
	const showSidebar = useState("showSidebar", () => false);

	return {
		showSidebar
	};
};
