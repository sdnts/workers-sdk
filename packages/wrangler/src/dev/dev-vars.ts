import * as path from "node:path";
import { loadDotEnv } from "../config";
import { logger } from "../logger";
import type { Config } from "../config";

/**
 * Get the Worker `vars` bindings for a `wrangler dev` instance of a Worker.
 *
 * The `vars` bindings can be specified in the Wrangler configuration file.
 * But "secret" `vars` are usually only provided at the server -
 * either by creating them in the Dashboard UI, or using the `wrangler secret` command.
 *
 * It is useful during development, to provide these types of variable locally.
 * When running `wrangler dev` we will look for a file called `.dev.vars`, situated
 * next to the User's Wrangler configuration file (or in the current working directory if there is no
 * Wrangler configuration). If the `--env <env>` option is set, we'll first look for
 * `.dev.vars.<env>`.
 *
 * Any values in this file, formatted like a `dotenv` file, will add to or override `vars`
 * bindings provided in the Wrangler configuration file.
 */
export function getVarsForDev(
	config: Pick<Config, "userConfigPath" | "vars">,
	env: string | undefined,
	silent = false
): Config["vars"] {
	const configDir = path.resolve(
		config.userConfigPath ? path.dirname(config.userConfigPath) : "."
	);
	const devVarsPath = path.resolve(configDir, ".dev.vars");
	const loaded = loadDotEnv(devVarsPath, env);
	if (loaded !== undefined) {
		const devVarsRelativePath = path.relative(process.cwd(), loaded.path);
		if (!silent) {
			logger.log(`Using vars defined in ${devVarsRelativePath}`);
		}
		return {
			...config.vars,
			...loaded.parsed,
		};
	} else {
		return config.vars;
	}
}
