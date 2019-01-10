const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'js/index': './src/js/index.js',
        'js/editorpage': './src/js/editorpage.js',
        'js/popup': './src/js/popup.js',
        'css/style': './src/scss/style.scss',
        'css/editorpage': './src/scss/editorpage.scss',
        'css/popup': './src/scss/popup.scss'
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
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
}
