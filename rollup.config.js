// ES Module
import esbuild from "rollup-plugin-esbuild";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.exports["."].import,
        format: "esm",
        sourcemap: true,
      },
      {
        file: pkg.exports["."].require,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      esbuild({
        include: /\.jsx?$/, // default, inferred from `loaders` option
        minify: process.env.NODE_ENV === "production",
        jsx: "automatic", // default, or 'preserve'
      }),
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      typescript(),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
