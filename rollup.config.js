import vuePlugin from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "umd",
    name: "LoadSelect",
  },
  plugins: [postcss(), vuePlugin()],
  external: ["vue"],
};
