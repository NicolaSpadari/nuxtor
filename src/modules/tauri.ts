import { addImports, defineNuxtModule } from "nuxt/kit";
import * as tauriApp from "@tauri-apps/api/app";
import * as tauriShell from "@tauri-apps/plugin-shell";
import * as tauriOs from "@tauri-apps/plugin-os";
import * as tauriNotification from "@tauri-apps/plugin-notification";

export default defineNuxtModule({
	meta: {
		name: "nuxt-tauri",
		configKey: "nuxt-tauri"
	},
	setup() {
		Object.keys(tauriApp).filter((name) => name !== "default").forEach((name) => {
			addImports({ from: "@tauri-apps/api/app", name });
		});
		Object.keys(tauriShell).filter((name) => name !== "default").forEach((name) => {
			addImports({ from: "@tauri-apps/plugin-shell", name });
		});
		Object.keys(tauriOs).filter((name) => name !== "default").forEach((name) => {
			addImports({ from: "@tauri-apps/plugin-os", name });
		});
		Object.keys(tauriNotification).filter((name) => name !== "default").forEach((name) => {
			addImports({ from: "@tauri-apps/plugin-notification", name });
		});
	}
});
