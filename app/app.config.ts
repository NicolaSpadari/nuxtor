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
			primary: "green",
			neutral: "zinc"
		},
		button: {
			slots: {
				base: "cursor-pointer"
			}
		},
		navigationMenu: {
			slots: {
				link: "cursor-pointer",
			},
			variants: {
				disabled: {
					true: {
						link: "cursor-text"
					}
				}
			}
		}
	}
});
