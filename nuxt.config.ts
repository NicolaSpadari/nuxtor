import { internalIpV4 } from "internal-ip";

// @ts-expect-error process is a nodejs global
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

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
				from: "@tauri-apps/plugin-shell",
				imports: ["Command"]
			},
			{
				from: "@tauri-apps/plugin-os",
				imports: ["platform"]
			},
			{
				from: "@tauri-apps/plugin-notification",
				imports: ["sendNotification", "requestPermission", "isPermissionGranted"]
			}
		]
	},
	vite: {
		clearScreen: false,
		envPrefix: ["VITE_", "TAURI_"],
		server: {
			strictPort: true,
			hmr: mobile ? {
				protocol: "ws",
				host: await internalIpV4(),
				port: 3001,
			} : undefined,
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
