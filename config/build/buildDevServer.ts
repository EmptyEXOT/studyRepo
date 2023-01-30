import {IBuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
    }
}