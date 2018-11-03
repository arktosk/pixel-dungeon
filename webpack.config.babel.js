import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/build`,
        filename: 'js/bundle.js'
    },
    watch: true,
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title:    'Pixel Dungeon',
            favicon:  './public/favicon.png',
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
}