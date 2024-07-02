import { defineConfig } from "bumpp";

export default defineConfig({
	release: "patch",
	commit: false,
	tag: false,
	push: false,
	files: [
		"package.json",
		"src-tauri/tauri.conf.json",
		"src-tauri/Cargo.toml"
	]
});
