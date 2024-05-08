// vite.config.js
import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// import { viteExternalsPlugin } from 'vite-plugin-externals'
export default defineConfig({
  // 配置选项
  plugins: [vue(), cssInjectedByJsPlugin({ topExecutionPriority: false })],
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['umd', 'iife', 'cjs'],
      name: 'index',
      fileName: 'index',
    },
    outDir: 'dist',
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
  // rollupOptions: {
  //   // 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
  //   external: ['vue'],
  //   plugins: [
  //     externalGlobals({
  //       // "在项目中引入的变量名称"："CDN包导出的名称，一般在CDN包中都是可见的"
  //       vue: 'Vue'
  //     })
  //   ]
  // }
});
