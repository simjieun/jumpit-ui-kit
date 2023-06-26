// ES Module
import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.exports["."].import,
      format: "esm",
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
  ],
  plugins: [
    esbuild({
      include: /\.jsx?$/, // default, inferred from `loaders` option
      minify: process.env.NODE_ENV === "production",
      jsx: "automatic", // default, or 'preserve'
    }),
  ],
  external: ["react", "react-dom", "styled-components"],
};
