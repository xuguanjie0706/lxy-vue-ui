# 深入浅出Vite：如何开发一个Vite插件

## 事例

在插件命名方式上，如果插件是一个 npm 包，在package.json中的包命名也推荐以vite-plugin开头。一般情况下因为要考虑到外部传参，我们不会直接写一个对象，而是实现一个返回插件对象的工厂函数，如下代码所示：

```
export function myVitePlugin(options) {
  console.log(options)
  return {
    name: 'vite-plugin-xxx',
    load(id) {
      // 在钩子逻辑中可以通过闭包访问外部的 options 传参
    }
  }
}



// 使用方式
// vite.config.ts
import { myVitePlugin } from './myVitePlugin';
export default {
  plugins: [myVitePlugin({ /* 给插件传参 */ })]
}


```

## Vite 插件生命周期的执行顺序

![alt text](image.png)

- 服务启动阶段： config、configResolved、options、configureServer、buildStart
- 请求响应阶段：如果是 html 文件，仅执行transformIndexHtml钩子；对于非 HTML 文件，则依次执行resolveId、load和transform钩子。相信大家学过 Rollup 的插件机制，已经对这三个钩子比较熟悉了。
- 热更新阶段：执行handleHotUpdate钩子。
- 服务关闭阶段：依次执行buildEnd和closeBundle钩子。

## Vite 插件的执行顺序

默认为`normal`，可取值还有`pre`和`post` ![alt text](image-1.png)

```
export default function testHookPlugin(){
    return {
        name:"test-hooks-plugin",
        // 'serve' 表示仅用于开发环境，'build'表示仅用于生产环境
        apply: 'serve',
        config(config){
            // console.log('config',config);
            console.log('config');
        },
        configResolved(resolvedCofnig) {
            console.log('configResolved');
          },
          // 通用钩子
        options(opts) {
            console.log('options');
            return opts;
      },
      // Vite 独有钩子
     configureServer(server) {
        console.log('configureServer');
        // setTimeout(() => {
        //   // 手动退出进程
        //   process.kill(process.pid, 'SIGTERM');
        // }, 3000)
      },
      handleHotUpdate(){
        console.log('handleHotUpdate');
      },
      // 通用钩子
    buildStart() {
        console.log('buildStart');
      },
      // 通用钩子
      buildEnd() {
        console.log('buildEnd');
      },
      // 通用钩子
      closeBundle() {
        console.log('closeBundle');
      }
    }
}
```

## 案例一 虚拟模块

```
import { Plugin,ResolvedConfig } from 'vite';

// types/shim.d.ts

// 虚拟模块名称
const virtualFibModuleId = 'virtual:fib';

// Vite 中约定对于虚拟模块，解析后的路径需要加上`\0`前缀
const resolvedFibVirtualModuleId = '\0' + virtualFibModuleId;

const virtualEnvModuleId = 'virtual:env';

const resolvedEnvVirtualModuleId = '\0' + virtualEnvModuleId;

export default function virtualFibModulePlugin():Plugin{
    let config: ResolvedConfig | null = null;
    return  {
        name:"vite-plugin-virtual-module",
        configResolved(c:ResolvedConfig){
            config = c
        },
        resolveId(id){
            if(id===virtualFibModuleId){
                return resolvedFibVirtualModuleId
            }
            if(id===virtualEnvModuleId){
                return resolvedEnvVirtualModuleId
            }
        },
        load(id){
            // 加载虚拟模块
            if (id === resolvedFibVirtualModuleId) {
                return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }';
            }
            if (id === resolvedEnvVirtualModuleId) {
                return `export default ${JSON.stringify(config?.env)}`;
            }
        }
    }
}
```
