// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
export default defineConfig ({
    // 配置选项
    plugins: [vue(),cssInjectedByJsPlugin({topExecutionPriority: false})],
    build:{
        lib:{
            entry:"src/main.js",
            formats:["umd",'iife','cjs'],
            name:"index",
            fileName:"index"
        },
        outDir:"dist",
        target:['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    }
  })