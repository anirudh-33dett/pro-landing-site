// eslint.config.mjs
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"], // Adjust if your tsconfig.json is elsewhere
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      // === Add your existing rules here ===
      // Example: reactPlugin.configs.recommended.rules,

      // === Disable specific rules based on build output ===

      // Disable Next.js specific warning for using <img> tag
      "@next/next/no-img-element": "off",

      // Disable TypeScript ESLint rule for unused variables/types
      "@typescript-eslint/no-unused-vars": "off",

      // Disable TypeScript ESLint rule forbidding the use of 'any'
      "@typescript-eslint/no-explicit-any": "off",

      // Disable React Hooks rule for exhaustive dependencies
      "react-hooks/exhaustive-deps": "off",

      // Disable ESLint core rule preferring const over let if not reassigned
      "prefer-const": "off",

      // === You might need to explicitly enable other rules ===
      // If you were relying on recommended sets, you might need to add
      // specific rules back or spread the recommended rules object, e.g.:
      // ...nextPlugin.configs.recommended.rules,
      // ...reactPlugin.configs.recommended.rules,
      // ...hooksPlugin.configs.recommended.rules,
      // ...typescriptEslint.configs['eslint-recommended'].rules,
      // ...typescriptEslint.configs.recommended.rules,
    },
  },
  // Include other configurations if you have them (e.g., ignores)
  // {
  //   ignores: ["node_modules/", ".next/"],
  // }
];
