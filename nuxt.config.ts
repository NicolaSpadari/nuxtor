export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/ui",
		"@vueuse/nuxt",
		"nuxt-svgo"
	],
	ssr: false,
	ignore: ["**/src-tauri/**"],
	app: {
		head: {
			title: "Nuxtor",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "format-detection", content: "no" },
				{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" }
			]
		},
		pageTransition: {
			name: "page",
			mode: "out-in"
		},
		layoutTransition: {
			name: "layout",
			mode: "out-in"
		}
	},
	css: ["@/assets/css/main.css"],
	svgo: {
		autoImportPath: "@/assets/"
	},
	imports: {
		presets: [
			{
				from: "zod",
				imports: [
					"z",
					{
						name: "infer",
						as: "zInfer",
						type: true
					}
				]
			}
		]
	},
	eslint: {
		config: {
			standalone: false
		}
	},
	icon: {
		clientBundle: {
			scan: {
				globInclude: ["**/*.{vue,ts}"]
			}
		}
	},
	router: {
		options: {
			scrollBehaviorType: "smooth"
		}
	},
	experimental: {
		typedPages: true
	},
	vite: {
		clearScreen: false,
		envPrefix: ["VITE_", "TAURI_"],
		optimizeDeps: {
			include: ["zod"]
		},
		server: {
			strictPort: true
		}
	},
	vue: {
		optionsApi: false
	},
	typescript: {
		nodeTsConfig: {
			include: ["../scripts/**/*"]
		}
	},
	// Makes the dev server reachable from physical iOS devices
	devServer: {
		host: "0"
	},
	sourcemap: {
		client: false,
		server: false
	},
	devtools: {
		enabled: false
	},
	telemetry: false,
	compatibilityDate: "2026-10-01"
});
