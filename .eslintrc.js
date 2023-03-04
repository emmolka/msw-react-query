module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "prettier", "react-app", "react-app/jest"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier", "react", "react-hooks"],
  rules: {
    semi: [2, "always"],
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": 0,
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "object-curly-newline": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
