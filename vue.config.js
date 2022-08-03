const { defineConfig } = require("@vue/cli-service");
const path = require("path");

console.log(path.resolve(__dirname, "./src"));

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".vue", ".js", ".ts", ".tsx"],
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
  }
});
