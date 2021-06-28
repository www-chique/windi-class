import colors from "windicss/colors";
import lineClamp from "windicss/plugin/line-clamp";
import { defineConfig } from "windicss/helpers";

// windi.config.js
export default defineConfig({
	plugins: [lineClamp],
	theme: {
		extend: {
			colors: {
				brand: {
					light: "var(--brand--light)",
					DEFAULT: "var(--brand)",
					dark: "var(--brand--dark)",
					link: "var(--brand-link)",
				},
				screen: {
					DEFAULT: "var(--screen)",
					accent: "var(--screen-accent)",
				},
				foreground: {
					DEFAULT: "var(--foreground)",
					light: "var(--foreground-light)",
					lighter: "var(--foreground-lighter)",
					lightest: "var(--foreground-lightest)",
				},
				surface: {
					overlay: "var(--surface-overlay)",
					lightest: "var(--surface-lightest)",
					lighter: "var(--surface-lighter)",
					light: "var(--surface-light)",
					dark: "var(--surface-dark)",
					darker: "var(--surface-darker)",
					darkest: "var(--surface-darkest)",
				},
				ghost: {
					DEFAULT: "var(--ghost)",
					dark: "var(--ghost-dark)",
				},
				radio: "var(--radio)",
				gray: colors.trueGray,
			},
			boxShadow: {
				input: "0px 4px 4px rgba(0, 0, 0, var(--shadow-strength-input));",
				clickable: "0px 3px 8px rgba(0, 0, 0, calc(var(--shadow-strength-card) * 3)), 0px 3px 1px rgba(0, 0, 0, var(--shadow-strength-card));",
			},
			dropShadow: {
				icon: "3px 5px 3px rgba(0, 0, 0, var(--shadow-strength-icon));",
			},
			borderRadius: {
				custom: "0.875rem",
			},
		},
	},
});
