export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/eslint"
	],
	app: {
		head: {
			title: "Nuxtor",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "format-detection", content: "no" }
			],
			bodyAttrs: {
				class: "font-text antialiased"
			},
			link: [
				{ rel: "shortcut-icon", href: "/favicon.svg" }
			],
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
	},
	experimental: {
		typedPages: true
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	imports: {
		presets: [
			{
				from: "@tauri-apps/api/app",
				imports: ["getName", "getVersion", "getTauriVersion"]
			},
			{
				from: "@tauri-apps/api/shell",
				imports: ["Command"]
			},
			{
				from: "@tauri-apps/api/os",
				imports: ["platform"]
			},
			{
				from: "@tauri-apps/api/notification",
				imports: ["sendNotification", "requestPermission", "isPermissionGranted"]
			}
		]
	},
	vite: {
		clearScreen: false,
		envPrefix: ["VITE_", "TAURI_"],
		server: {
			strictPort: true,
			hmr: {
				protocol: "ws",
				host: "0.0.0.0",
				port: 3001
			},
			watch: {
				ignored: ["**/src-tauri/**"]
			}
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag.startsWith("i-")
		}
	},
	srcDir: "src/",
	ssr: false,
	devServer: {
		host: "0.0.0.0"
	},
	nitro: {
		prerender: {
			routes: ["/"]
		}
	},
	// sourcemap: {
	// 	server: true,
	// 	client: false
	// }
});
