import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths({ projects: ["tsconfig.json"] })],
	test: {
		include: ["e2e-tests/**/*.test.ts"],
		cache: false,
		root: ".",
		testTimeout: 1000 * 60 * 10, // 10 min for lengthy installs
		maxConcurrency: 3,
		globalSetup: ["e2e-tests/global-setup.ts"],
		setupFiles: ["e2e-tests/setup.ts", "dotenv/config"],
		reporters: ["json", "verbose", "hanging-process"],
		outputFile: {
			json: `./.e2e-logs${process.env.E2E_EXPERIMENTAL ? "-experimental" : ""}/${process.env.TEST_PM}/results.json`,
		},
	},
});
