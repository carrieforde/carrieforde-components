import packageJson from "./package.json";
import peerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const rollupConfig = [
  {
    input: "src/bin/tokens.js",
    output: {
      file: packageJson.bin,
      format: "cjs",
      banner: "#!/usr/bin/env node",
    },
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ extensions: [".css"] }),
    ],
  },
];

export default rollupConfig;
