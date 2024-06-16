import { internalIpV4 } from "internal-ip";

// @ts-expect-error process is a nodejs global
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"nuxt-svgo",
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
	experimental: {
		typedPages: true
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	svgo: {
		autoImportPath: "@/assets/"
	},
	vite: {
		clearScreen: false,
		envPrefix: ["VITE_", "TAURI_"],
		server: {
			strictPort: true,
			hmr: mobile
				? {
					protocol: "ws",
					host: await internalIpV4(),
					port: 3001
				}
				: undefined,
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
	eslint: {
		config: {
			standalone: false
		}
	}
});
