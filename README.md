<p align="center">
  <img width="150" src="./public/logo.png" alt="NUXTOR Logo">
</p>

<h1 align="center">NUXTOR</h1>

<p align="center">
  A spiritual successor of <a href="https://github.com/NicolaSpadari/vitauri">ViTauri</a>,
  built with <a href="https://nuxt.com">Nuxt 4</a> and
  <a href="https://v2.tauri.app">Tauri 2</a>.
  <br />
  Build blazing fast desktop & mobile applications.
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/NicolaSpadari/nuxtor" />
  <img src="https://img.shields.io/github/license/NicolaSpadari/nuxtor" />
</p>

<p align="center">
  <img src="./public/screenshot.png" alt="NUXTOR Screenshot">
</p>

<p align="center"><strong>Powered by Nuxt 4</strong></p>

📸 **Live Previews**:  
[iOS · Android · Commands · File System · Notifications · OS Info · Storage · Webview](https://github.com/NicolaSpadari/nuxtor/blob/main/preview.md)

---

## Tech Stack

- Nuxt v4
- Tauri v2
- Nuxt UI v4
- Tailwind CSS v4
- TypeScript
- ESLint
- Auto imports (including Tauri APIs)

---

## What It Does

- Run shell commands from the app
- Send OS-level notifications
- Access system information
- Persistent key–value storage
- System tray icon
- Full Nuxt feature support (routing, layouts, middleware, modules, etc.)

---

## Who Is This For?

✅ Developers who want **Nuxt DX** in a desktop / mobile app  
✅ Teams already using **Vue / Nuxt / Tailwind**  
✅ Projects targeting **Windows / macOS / Linux / iOS / Android**  

❌ Not suitable if you require hosted SSR (SSR is intentionally disabled)

---

## Setup

> 🚀 **Bun is the default package manager.**  
> To use npm / pnpm / yarn, update `package.json` and `tauri.conf.json`.

- Frontend: `http://localhost:3000`
- Tauri backend: `http://localhost:3001`
- Ports are configurable in `nuxt.config.ts` and `tauri.conf.json`

bash
Scaffold a new project

npx degit NicolaSpadari/nuxtor my-nuxtor-app

cd my-nuxtor-app

Install dependencies

bun install

Start development mode

bun run tauri:dev


> ⚠️ **Nuxt SSR is disabled** so Tauri can act as the backend.  
> Routing, middleware, composables, and all other Nuxt features remain fully functional.

---

## Build

bash
bun run tauri:build


Output: `src-tauri/target`

### Debug Build

bash
bun run tauri:build:debug


Enables console access inside the bundled app.

---

## iOS Development

Requires **macOS + Xcode**.

bash
First-time setup

brew install cocoapods
tauri ios init

Development

bun tauri:ios:dev

Production build

bun tauri:build:ios


In Xcode:
- Enable **Automatically manage signing**
- Select your personal **Development Team**

---

## Android Development

Requires **Android Studio + SDK + NDK**.

bash
First-time setup

tauri android init

Development

bun tauri:android:dev

Production build

bun tauri:build:android


---

## Notes

- Tauri v2 introduces breaking changes (package names, permissions).
- Permissions must be declared in `src-tauri/capabilities/main.json`.
- Tauri APIs are auto-imported via `app/modules/tauri.ts`.
- Adding new Tauri plugins requires updating this module.

---

## License

MIT © 2024–Present [Nicola Spadari](https://github.com/NicolaSpadari)
