import webpack from "webpack";

export function buildLoaders(): Array<webpack.RuleSetRule> {
    const styleLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        styleLoaders,
    ]
}