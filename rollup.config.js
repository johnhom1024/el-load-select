import vue from "rollup-plugin-vue";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "esm",
    name: "LoadSelect",
  },
  plugins: [vue()],
  external: ["vue"],
};
