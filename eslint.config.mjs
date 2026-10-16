// @ts-check
import eslintConfig from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	eslintConfig(
		{
			typescript: true,
			vue: true,
			stylistic: {
				indent: "tab",
				quotes: "double"
			},
			ignores: [
				".github/**",
				"src-tauri/**",
				"**/*.md",
				"pnpm-workspace.yaml"
			],
			rules: {
				curly: "off",
				"new-cap": "off",
				"no-console": "off",
				"no-new-func": "off",
				"style/semi": ["error", "always"],
				"style/indent": ["error", "tab"],
				"style/quote-props": ["warn", "as-needed"],
				"style/comma-dangle": ["warn", "never"],
				"style/brace-style": ["warn", "1tbs"],
				"style/arrow-parens": ["error", "always"],
				"vue/block-order": ["error", {
					order: ["template", "script", "style"]
				}],
				"vue/script-indent": ["error", "tab", {
					baseIndent: 1
				}],
				"antfu/top-level-function": "off",
				"antfu/if-newline": "off",
				"node/prefer-global/process": "off",
				"unicorn/prefer-includes": "off"
			}
		},
		{
			files: ["**/*.vue"],
			rules: {
				"style/indent": "off"
			}
		}
	)
);
