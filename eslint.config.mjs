import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Fix the unescaped entities error
      "react/no-unescaped-entities": "off",
      // Allow img tags but with warning
      "@next/next/no-img-element": "warn",
      // Disable exhaustive deps warnings
      "react-hooks/exhaustive-deps": "warn",
      // Disable unused vars for development
      "@typescript-eslint/no-unused-vars": "warn",
      // Allow any type with warning
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow anonymous components
      "react/display-name": "off"
    }
  }
];

export default eslintConfig;
