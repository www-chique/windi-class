const preprocess = require("svelte-preprocess");

module.exports = {
	extensions: [".svelte"],
	preprocess: [
		preprocess({
			typescript: true,
			scss: true,
			defaults: { script: "typescript", style: "scss" },
		}),
	],
};
