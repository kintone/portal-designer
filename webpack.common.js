/* eslint-env node */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: {
    "js/index": "./src/js/index.ts",
    "js/editor": "./src/js/Editor.tsx",
    "js/popup": "./src/js/popup.ts",
    "css/index": "./src/scss/index.scss",
    "css/editor": "./src/scss/editor.scss",
    "css/popup": "./src/scss/popup.scss"
  },
  output: {
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new MonacoWebpackPlugin(),
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
        from: "src/_locales/en",
        to: "_locales/en"
      },
      {
        from: "src/_locales/en",
        to: "_locales/ja"
      },
      {
        from: "src/js/templates",
        to: "js/templates"
      },
      {
        from: "src/manifest.json",
        to: "manifest.json"
      },
      {
        from: "src/editor.html",
        to: "editor.html"
      }
    ])
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
