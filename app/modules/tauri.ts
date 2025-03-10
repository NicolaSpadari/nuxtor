import * as tauriApp from "@tauri-apps/api/app";
import * as tauriWebviewWindow from "@tauri-apps/api/webviewWindow";
import * as tauriFs from "@tauri-apps/plugin-fs";
import * as tauriNotification from "@tauri-apps/plugin-notification";
import * as tauriOs from "@tauri-apps/plugin-os";
import * as tauriShell from "@tauri-apps/plugin-shell";
import * as tauriStore from "@tauri-apps/plugin-store";
import { addImports, defineNuxtModule } from "nuxt/kit";

const capitalize = (name: string) => {
	return name.charAt(0).toUpperCase() + name.slice(1);
};

const tauriModules = [
	{ module: tauriApp, prefix: "App", importPath: "@tauri-apps/api/app" },
	{ module: tauriWebviewWindow, prefix: "WebviewWindow", importPath: "@tauri-apps/api/webviewWindow" },
	{ module: tauriShell, prefix: "Shell", importPath: "@tauri-apps/plugin-shell" },
	{ module: tauriOs, prefix: "Os", importPath: "@tauri-apps/plugin-os" },
	{ module: tauriNotification, prefix: "Notification", importPath: "@tauri-apps/plugin-notification" },
	{ module: tauriFs, prefix: "Fs", importPath: "@tauri-apps/plugin-fs" },
	{ module: tauriStore, prefix: "Store", importPath: "@tauri-apps/plugin-store" }
];

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "nuxt-tauri",
		configKey: "tauri"
	},
	defaults: {
		prefix: "useTauri"
	},
	setup(options) {
		tauriModules.forEach(({ module, prefix, importPath }) => {
			Object.keys(module).filter((name) => name !== "default").forEach((name) => {
				const prefixedName = `${options.prefix}${prefix}` || "";
				const as = prefixedName ? prefixedName + capitalize(name) : name;
				addImports({ from: importPath, name, as });
			});
		});
	}
});
