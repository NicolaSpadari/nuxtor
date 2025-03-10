import eslintConfig from "@antfu/eslint-config";
import nuxtConfig from "./.nuxt/eslint.config.mjs";

export default eslintConfig(
	// General
	{
		typescript: true,
		vue: true,
		stylistic: {
			indent: "tab",
			quotes: "double"
		},
		rules: {
			curly: "off",
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
			"vue/comma-dangle": ["warn", "never"],
			"antfu/top-level-function": "off",
			"antfu/if-newline": "off",
			"new-cap": "off",
			"node/prefer-global/process": ["off"]
		}
	},

	// Vue
	{
		files: ["**/*.vue"],
		rules: {
			"style/indent": "off"
		}
	},

	nuxtConfig()
);
