import { readFileSync, writeFileSync } from "node:fs";
import { parse, stringify } from "@iarna/toml";

type BumpMethod = "patch" | "minor" | "major";

const bumpVersion = (currentVersion: string) => {
	const method = <BumpMethod>process.argv[2] || "patch";

	const parts = currentVersion.split(".");
	let major = Number.parseInt(parts[0], 10);
	let minor = Number.parseInt(parts[1], 10);
	let patch = Number.parseInt(parts[2], 10);

	if (method === "patch")
		patch += 1;
	if (method === "minor")
		minor += 1;
	if (method === "major")
		major += 1;

	if (patch >= 10) {
		patch = 0;
		minor += 1;
		if (minor >= 10) {
			minor = 0;
			major += 1;
		}
	}

	return `${major}.${minor}.${patch}`;
};

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
const tauriConfig = JSON.parse(readFileSync("./src-tauri/tauri.conf.json", "utf-8"));
const tauriToml = parse(readFileSync("./src-tauri/Cargo.toml", "utf-8"));

packageJson.version = bumpVersion(packageJson.version);
tauriConfig.version = bumpVersion(tauriConfig.version);
tauriToml.package.version = bumpVersion(tauriToml.package.version);

writeFileSync("./package.json", JSON.stringify(packageJson, null, "\t"));
writeFileSync("./src-tauri/tauri.conf.json", JSON.stringify(tauriConfig, null, "\t"));
writeFileSync("./src-tauri/Cargo.toml", stringify(tauriToml));
