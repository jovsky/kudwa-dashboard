import { FlatCompat } from "@eslint/eslintrc"
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import { Linter } from "eslint"
import prettierPlugin from "eslint-plugin-prettier"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "simple-import-sort": simpleImportSort,
      "@tanstack/query": tanstackQueryPlugin,
    },
    rules: {
      ...Linter.recommended,
      ...typescriptPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tanstackQueryPlugin.configs.recommended.rules,

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expression": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Prettier integration
      "prettier/prettier": "error",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // Import sorting rules
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Others
      "import/no-anonymous-default-export": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]

export default eslintConfig
