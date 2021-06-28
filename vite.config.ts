import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

module.exports = defineConfig(({ mode }) => {
	return {
		optimizeDeps: {
			exclude: ["@roxi/routify"],
		},
		plugins: [
			svelte(),
			WindiCSS({
				scan: {
					dirs: ["./"],
				},
			}),
		],
		server: {
			port: 5000,
			strictPort: true,
		},
	};
});
