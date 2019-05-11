/* eslint-env node */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry: {
    "js/index": "./src/js/index.js",
    "js/editor": "./src/js/Editor.jsx",
    "js/popup": "./src/js/popup.js",
    "css/index": "./src/scss/index.scss",
    "css/editorpage": "./src/scss/editorpage.scss",
    "css/popup": "./src/scss/popup.scss"
  },
  output: {
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/img",
        to: "img"
      },
      {
        from: "src/html",
        to: "html"
      },
      {
        from: "src/manifest.json",
        to: "manifest.json"
      }
    ])
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
