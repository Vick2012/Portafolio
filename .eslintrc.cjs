module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-undef": "off", // Desactivamos no-undef para evitar el error 'React' is not defined
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/react-in-jsx-scope": "off", // No es necesario importar React con jsx: "react-jsx"
    "react/prop-types": "off", // No usamos PropTypes con TypeScript
  },
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
  },
};