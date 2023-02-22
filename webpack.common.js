/* eslint-env node */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: {
    "js/index": "./src/js/index.ts",
    "js/editor": "./src/js/Editor.tsx",
    "js/popup": "./src/js/popup.ts"
  },
  output: {
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new MonacoWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/img",
          to: "img"
        },
        {
          from: "src/html",
          to: "html"
        },
        {
          from: "src/css",
          to: "css"
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
          from: "src/js/boilerplates",
          to: "js/boilerplates"
        },
        {
          from: "src/manifest.json",
          to: "manifest.json"
        },
        {
          from: "src/editor.html",
          to: "editor.html"
        }
      ]
    })
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
        test: /\.ttf$/,
        use: ["file-loader"]
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
