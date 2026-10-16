<p align="center">
  <img width="150" src="./public/logo.png" alt="NUXTOR Logo">
</p>

<h1 align="center">NUXTOR</h1>

<p align="center">
  <a href="https://github.com/NicolaSpadari/vitauri">ViTauri</a> 的精神续作，
  基于 <a href="https://nuxt.com">Nuxt 4</a> 与
  <a href="https://v2.tauri.app">Tauri 2</a> 构建。
  <br />
  打造极速的桌面端与移动端应用。
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/NicolaSpadari/nuxtor" />
  <img src="https://img.shields.io/github/license/NicolaSpadari/nuxtor" />
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <img src="./public/screenshot.png" alt="NUXTOR 截图">
</p>

<p align="center"><strong>由 Nuxt 4 强力驱动</strong></p>

📸 实时预览：  
https://github.com/NicolaSpadari/nuxtor/blob/main/preview.md

技术栈

• Nuxt v4

• Tauri v2

• Nuxt UI v4

• Tailwind CSS v4

• TypeScript

• ESLint

• 自动导入（含 Tauri API）

功能特性

• 在应用中执行 Shell 命令

• 发送操作系统级通知

• 获取系统信息

• 持久化键值存储

• 系统托盘图标

• 完整的 Nuxt 特性支持（路由、布局、中间件、模块等）

适用人群

✅ 希望在桌面 / 移动应用中享受 Nuxt 开发体验 的开发者  
✅ 已在使用 Vue / Nuxt / Tailwind 的团队  
✅ 面向 Windows / macOS / Linux / iOS / Android 平台的项目  

❌ 不适用于需要托管式 SSR 的场景（本项目有意禁用 SSR）

环境配置

🚀 包管理器为 pnpm（版本见 package.json 的 packageManager，Node 版本见 .nvmrc）。

• 开发服务器：http://localhost:3000（端口被占用时 pnpm tauri:dev 会自动选择下一个空闲端口）

• 需满足 [Tauri 前置条件](https://v2.tauri.app/start/prerequisites/)（Rust ≥ 1.90）

```sh
# 初始化新项目
npx degit NicolaSpadari/nuxtor my-nuxtor-app

cd my-nuxtor-app

# 安装依赖
pnpm install

# 启动开发模式
pnpm tauri:dev
```

⚠️ Nuxt SSR 已被禁用，以便 Tauri 充当后端服务。  

路由、中间件、组合式函数及其他所有 Nuxt 功能均可正常使用。

构建打包

```sh
pnpm tauri:build
```

输出目录：src-tauri/target

调试版构建

```sh
pnpm tauri:build:debug
```

启用后可在打包后的应用中访问控制台。

iOS 开发

需 macOS + Xcode + CocoaPods 环境。Xcode 项目已生成在 src-tauri/gen/apple。

```sh
# 模拟器
pnpm tauri:dev:ios

# 真机（开发服务器对局域网开放）
pnpm tauri:dev:ios --host

# 在 Xcode 中打开项目
pnpm tauri:dev:ios --open

# 生产构建
pnpm tauri:build:ios
```

在 .env 中设置开发团队（APPLE_DEVELOPMENT_TEAM，参考 .env.example），或在 Xcode 的 Signing & Capabilities 中设置。

Android 开发

需 Android Studio + SDK + NDK 环境（需设置 ANDROID_HOME、NDK_HOME 与 JAVA_HOME）。Gradle 项目已生成在 src-tauri/gen/android。

```sh
# 模拟器或已连接的设备
pnpm tauri:dev:android

# 在 Android Studio 中打开项目
pnpm tauri:dev:android --open

# 生产构建
pnpm tauri:build:android
```

升级 Tauri CLI 后，请使用 pnpm tauri android init / pnpm tauri ios init 重新生成移动端项目。

注意事项

• 权限位于 src-tauri/capabilities/：main.json 适用于所有平台，desktop.json 仅用于桌面端功能（托盘、菜单、shell）。

• Tauri API 通过 modules/tauri.ts 以 useTauri<模块><函数> 的形式自动导入。

• 新增 Tauri 插件时需在 src-tauri/src/lib.rs、capabilities 以及该模块中同步注册。

开源协议

MIT © 2024–至今 https://github.com/NicolaSpadari
