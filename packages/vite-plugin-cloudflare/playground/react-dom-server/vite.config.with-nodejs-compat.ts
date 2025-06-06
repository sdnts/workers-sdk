import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		cloudflare({
			inspectorPort: false,
			persistState: false,
			configPath: "wrangler.with-nodejs-compat.jsonc",
		}),
	],
});
