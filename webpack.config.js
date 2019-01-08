const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'js/index': './src/js/index.js',
        'js/customize': './src/js/customize.js',
        'js/popup': './src/js/popup.js',
        'css/style': './src/css/style.css',
        'css/customize': './src/css/customize.css',
        'css/popup': './src/css/popup.css'
    },
    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
            from: 'src/img',
            to: 'img'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/html',
            to: 'html'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/manifest.json',
            to: 'manifest.json'
        }]),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}
