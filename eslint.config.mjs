import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { createNodeResolver, importX } from "eslint-plugin-import-x";
import prettierPlugin from "eslint-plugin-prettier";
import sonarjs, { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  {
    plugins: {
      "@typescript-eslint": tseslint,
      "import-x": importX,
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
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        }),
        createNodeResolver({
          extensions: [".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx", ".mts", ".cts"],
        }),
      ],
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...(sonarjsConfigs.recommended?.rules ?? {}),
      ...(prettierConfig.rules ?? {}),
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], "type"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          "newlines-between-types": "always",
          pathGroupsExcludedImportTypes: ["builtin"],
          sortTypesGroup: true,
        },
      ],
      "prettier/prettier": "error",
    },
  },
]);

export default eslintConfig;
