module.exports = {
  extends: "@cybozu/eslint-config/presets/react-prettier",
  env: {
    webextensions: true
  },
  parser: "babel-eslint",
  settings: {
    react: {
      version: "latest"
    }
  }
};
