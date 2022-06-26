import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import json from "@rollup/plugin-json";
import css from "rollup-plugin-css-only";

const OUT_DIR = "public/build";

export default [
  {
    input: "src/dev-site/index.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      json({
        preferConst: true,
      }),
      typescript({
        check: false,
        tsconfig: "./tsconfig.json",
      }),
      nodeResolve({
        browser: true,
      }),
      livereload(OUT_DIR),
    ],
  },
  {
    input: "src/on-init.tsx",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
        dedupe: ["react", "react-dom"],
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      commonjs(),
      css({ output: "bundle.css" }),
      json({
        preferConst: true,
      }),
    ],
  },
  {
    input: "src/on-render.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      typescript({
        check: false,
      }),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
