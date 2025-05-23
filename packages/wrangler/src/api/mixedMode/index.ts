import path from "node:path";
import { getBasePath } from "../../paths";
import { requireApiToken, requireAuth } from "../../user";
import { startWorker } from "../startDevWorker";
import type { StartDevWorkerInput, Worker } from "../startDevWorker/types";

type BindingsOpt = StartDevWorkerInput["bindings"];

type MixedModeSession = Pick<Worker, "ready" | "dispose"> & {
	["setConfig"]: (bindings: BindingsOpt) => Promise<void>;
	["mixedModeConnectionString"]: MixedModeConnectionString;
};

declare const __brand: unique symbol;
export type MixedModeConnectionString = Awaited<Worker["url"]> & {
	[__brand]: "MixedModeConnectionString";
};

export async function startMixedModeSession(
	bindings: BindingsOpt
): Promise<MixedModeSession> {
	const proxyServerWorkerWranglerConfig = path.resolve(
		getBasePath(),
		"templates/mixedMode/proxyServerWorker/wrangler.jsonc"
	);

	const worker = await startWorker({
		config: proxyServerWorkerWranglerConfig,
		dev: {
			remote: true,
			auth: {
				accountId: await requireAuth({}),
				apiToken: requireApiToken(),
			},
		},
		bindings,
	});

	const mixedModeConnectionString =
		(await worker.url) as MixedModeConnectionString;

	const setConfig = async (newBindings: BindingsOpt) => {
		await worker.setConfig({ bindings: newBindings });
	};

	return {
		ready: worker.ready,
		mixedModeConnectionString,
		setConfig,
		dispose: worker.dispose,
	};
}
