module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-indent": [2, 4],
    "import/no-unresolved": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/button-has-type": 1,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "react/jsx-props-no-spreading": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/function-component-definition": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
  },
  globals: {
    __IS_DEV__: true,
    __API_URL__: true,
  },
};
