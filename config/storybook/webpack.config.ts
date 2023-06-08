import path from 'path';
import webpack from 'webpack';
import { IBuildPaths } from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/styleLoader';
import { buildSvgLoader } from '../build/loaders/svgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map(
        (rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        },
    );
    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildStyleLoader(true));
    config.resolve.modules.push(paths.src);
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
        }),
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
