module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  env: {
    webextensions: true
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      version: "latest"
    }
  },
  rules: {
    "react-hooks/exhaustive-deps": false,
    "react/jsx-filename-extension": false
  }
};
