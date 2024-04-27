const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  lintOnSave: false,
  // transpileDependencies: true,
  configureWebpack: {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      // publicPath: '/dist/',
      filename: 'index.js',
      // 打包后的格式（三种规范amd,cmd,common.js)通过umd规范可以适应各种规范，以及全局window属性
      libraryTarget: 'umd',
    },
    optimization: {
      minimize: false,
    },
    externals: {
      vue: 'vue',
    },
  },
  // chainWebpack:  (config)=> {
  //   console.log(config);
  //   const name = path.resolve(__dirname,"./src/index.js")
  //   config.entry("name").add(name)
  //   config.output.filename("vue-toast.js")
  //     .path(path.resolve(__dirname, './dist'))
  //     // .publicPath("/dist/")
  //     .libraryTarget("umd")
  //   // config.devtool("source-map")
  //   return  config
  // },
});
