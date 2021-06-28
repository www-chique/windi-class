// Svelte app
import App from "./App.svelte";

if (typeof (window as any).global === "undefined") {
	(window as any).global = window;
}

const app = new App({
	target: document.body,
});

export default app;

// WindiCSS
import "virtual:windi.css";
