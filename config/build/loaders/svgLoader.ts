export const buildSvgLoader = () => ({
    test: /\.svg$/,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                native: false,
            },
        },
    ],
});
