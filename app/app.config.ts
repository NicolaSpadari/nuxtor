export default defineAppConfig({
	app: {
		name: "Nuxtor",
		author: "Nicola Spadari",
		repo: "https://github.com/NicolaSpadari/nuxtor",
		tauriSite: "https://tauri.app",
		nuxtSite: "https://nuxt.com",
		nuxtUiSite: "https://ui3.nuxt.dev"
	},
	ui: {
		colors: {
			neutral: "zinc"
		},
		button: {
			slots: {
				base: "cursor-pointer"
			}
		}
	}
});
