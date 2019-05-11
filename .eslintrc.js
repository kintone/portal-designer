module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  env: {
    webextensions: true
  },
  parser: "babel-eslint",
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
