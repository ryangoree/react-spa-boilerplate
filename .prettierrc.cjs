// A minimal config for extensions when in languages not supported by biome and
// for tailwind.
// https://biomejs.dev/internals/language-support/
/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
};
