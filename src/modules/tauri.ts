import { addImports, defineNuxtModule } from "nuxt/kit";
import * as tauriApp from "@tauri-apps/api/app";
import * as tauriShell from "@tauri-apps/plugin-shell";
import * as tauriOs from "@tauri-apps/plugin-os";
import * as tauriNotification from "@tauri-apps/plugin-notification";
import * as tauriFs from "@tauri-apps/plugin-fs";

const capitalize = (name: string) => {
	return name.charAt(0).toUpperCase() + name.slice(1);
};

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "nuxt-tauri",
		configKey: "nuxt-tauri"
	},
	defaults: {
		prefix: "useTauri"
	},
	setup(options) {
		Object.keys(tauriApp).filter((name) => name !== "default").forEach((name) => {
			const prefix = `${options.prefix}App` || "";
			const as = prefix ? prefix + capitalize(name) : name;
			addImports({ from: "@tauri-apps/api/app", name, as });
		});
		Object.keys(tauriShell).filter((name) => name !== "default").forEach((name) => {
			const prefix = `${options.prefix}Shell` || "";
			const as = prefix ? prefix + capitalize(name) : name;
			addImports({ from: "@tauri-apps/plugin-shell", name, as });
		});
		Object.keys(tauriOs).filter((name) => name !== "default").forEach((name) => {
			const prefix = `${options.prefix}Os` || "";
			const as = prefix ? prefix + capitalize(name) : name;
			addImports({ from: "@tauri-apps/plugin-os", name, as });
		});
		Object.keys(tauriNotification).filter((name) => name !== "default").forEach((name) => {
			const prefix = `${options.prefix}Notification` || "";
			const as = prefix ? prefix + capitalize(name) : name;
			addImports({ from: "@tauri-apps/plugin-notification", name, as });
		});
		Object.keys(tauriFs).filter((name) => name !== "default").forEach((name) => {
			const prefix = `${options.prefix}Fs` || "";
			const as = prefix ? prefix + capitalize(name) : name;
			addImports({ from: "@tauri-apps/plugin-fs", name, as });
		});
	}
});
