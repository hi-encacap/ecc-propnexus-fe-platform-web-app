import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import sonarjs from "eslint-plugin-sonarjs";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  {
    plugins: {
      "@typescript-eslint": tseslint,
      sonarjs: sonarjs,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...(sonarjs.configs.recommended?.rules ?? {}),
      ...(prettierConfig.rules ?? {}),
      "prettier/prettier": "error",
    },
  },
]);

export default eslintConfig;
