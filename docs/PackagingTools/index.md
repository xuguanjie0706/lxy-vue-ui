# 前端打包工具学习指南

在前端开发中，打包工具扮演着至关重要的角色，它们能够帮助我们优化代码、减少文件大小、提升加载速度，并使得开发流程更加高效。本文将介绍三款流行的前端打包工具：Vite、Webpack 和 Gulp，并为你提供学习资源和学习路径。

1. Vite Vite 是一个基于 ES Modules 的现代前端构建工具，由 Vue.js 作者尤雨溪开发。它利用原生 ES Modules 提供了极快的冷启动，并且支持热模块替换（HMR）进行实时开发。

## 学习资源

- Vite 官方文档：包含详细的使用指南、配置选项和 API 参考。
- Vite 教程：在 Bilibili 上可以找到一些 Vite 的视频教程，帮助你快速上手。
- Vite 实战项目：在 GitHub 上搜索 "vite starter"，可以找到许多基于 Vite 的项目模板和实战项目。

# Vite 入门

## 安装 Vite

在项目中安装 Vite：

```bash
npm init vite@latest
# 或者使用 yarn
yarn create vite
```

## 2. Webpack

Webpack 是一个强大的模块打包器，能够将项目中的各个模块打包成一个或多个优化过的 bundle，用于在浏览器中加载。

### 学习资源

- [Webpack 官方文档](https://webpack.js.org/): 包含 Webpack 的核心概念、配置、插件和加载器等。
- [Webpack 教程](https://www.webpackjs.com/guides/): 官方提供的教程，帮助你逐步了解 Webpack 的使用。

### 出书 Markdown 代码示例

````markdown
# Webpack 入门

## 安装 Webpack

使用 npm 或 yarn 安装 Webpack：

```bash
npm install --save-dev webpack webpack-cli
# 或者使用 yarn
yarn add --dev webpack webpack-cli
```
````

## 3. Gulp

Gulp 是一个基于 Node.js 的自动化构建工具，能够让你使用代码来处理一些常见的任务，如压缩文件、合并文件、检查代码等。

### 学习资源

- [Gulp 官方文档](https://gulpjs.com/docs/en/getting-started/quick-start): 包含 Gulp 的快速入门指南和详细文档。
- [Gulp 教程](https://www.tutorialspoint.com/gulp/gulp_quick_guide.htm): 在 Tutorialspoint 等网站上可以找到 Gulp 的教程和示例。
- [Gulp 插件列表](https://gulpjs.com/plugins/): Gulp 的插件生态系统非常强大，你可以在这里找到各种有用的插件。

### 出书 Markdown 代码示例

````markdown
# Gulp 入门

## 安装 Gulp

使用 npm 或 yarn 安装 Gulp：

```bash
npm install --save-dev gulp
# 或者使用 yarn
yarn add --dev gulp
```
````
