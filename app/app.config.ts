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
		formField: {
			slots: {
				root: "w-full"
			}
		},
		input: {
			slots: {
				root: "w-full"
			}
		},
		textarea: {
			slots: {
				root: "w-full",
				base: "resize-none"
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
