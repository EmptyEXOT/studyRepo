import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/styleLoader';
import { buildSvgLoader } from './loaders/svgLoader';

export function buildLoaders({
    isDev,
}: IBuildOptions): Array<webpack.RuleSetRule> {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            nsSeparator: '~',
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const svgLoader = buildSvgLoader();

    const styleLoaders = buildStyleLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoaders];
}
