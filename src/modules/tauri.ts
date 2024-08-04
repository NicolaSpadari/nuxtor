import { addImports, defineNuxtModule } from "nuxt/kit";
import * as tauriApp from "@tauri-apps/api/app";
import * as tauriShell from "@tauri-apps/plugin-shell";
import * as tauriOs from "@tauri-apps/plugin-os";
import * as tauriNotification from "@tauri-apps/plugin-notification";
import * as tauriFs from "@tauri-apps/plugin-fs";

const capitalize = (name: string) => {
	return name.charAt(0).toUpperCase() + name.slice(1);
};

const buildImport = (moduleName: string, moduleNamespace: Record<string, any>, prefix: string) => {
	Object.keys(moduleNamespace).filter((name) => name !== "default").forEach((name) => {
		const as = prefix ? prefix + capitalize(name) : name;
		addImports({ from: `@tauri-apps/${moduleName}/${name}`, name, as });
	});
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
		buildImport("api/app", tauriApp, `${options.prefix}App`);
		buildImport("plugin-shell", tauriShell, `${options.prefix}Shell`);
		buildImport("plugin-os", tauriOs, `${options.prefix}Os`);
		buildImport("plugin-notification", tauriNotification, `${options.prefix}Notification`);
		buildImport("plugin-fs", tauriFs, `${options.prefix}Fs`);
	}
});
