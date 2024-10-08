import {
	defineConfig,
	presetAttributify,
	presetTagify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	shortcuts: [
		["crate", "mx-auto max-w-7xl px-4 lg:px-8 sm:px-6"],
		["flex-center", "flex justify-center items-center"],
		["absolute-center-h", "left-50% transform -translate-x-50%"],
		["absolute-center-v", "top-50% transform -translate-y-50%"]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetTypography()
	],
	theme: {
		fontFamily: {
			heading: "Montserrat",
			text: "Inter"
		},
		breakpoints: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			uw: "2000px"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
