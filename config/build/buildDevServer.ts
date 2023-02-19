import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/config';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
    };
}
