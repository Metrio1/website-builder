module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["vite.config.js", "dist", ".eslintrc.cjs", "build", "pdfTest"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" }, "import/extensions": [".js", ".jsx"] },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    'import/prefer-default-export': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": "off",
    "no-unused-vars": 0,
    "react/prop-types": 0,
    "max-len": ["error", {"code": 100, "ignoreUrls": true}],
    "prettier/prettier": "error",
  },
};