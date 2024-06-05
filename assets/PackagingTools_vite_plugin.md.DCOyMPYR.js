import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.B3h3aO-h.js";const l="/lxy-blog/assets/image.dxv0DD4v.png",e="/lxy-blog/assets/image-1.DTZwSTd5.png",v=JSON.parse('{"title":"深入浅出Vite：如何开发一个Vite插件","description":"","frontmatter":{},"headers":[],"relativePath":"PackagingTools/vite/plugin.md","filePath":"PackagingTools/vite/plugin.md","lastUpdated":1716257221000}'),i={name:"PackagingTools/vite/plugin.md"},c=p(`<h1 id="深入浅出vite-如何开发一个vite插件" tabindex="-1">深入浅出Vite：如何开发一个Vite插件 <a class="header-anchor" href="#深入浅出vite-如何开发一个vite插件" aria-label="Permalink to &quot;深入浅出Vite：如何开发一个Vite插件&quot;">​</a></h1><h2 id="事例" tabindex="-1">事例 <a class="header-anchor" href="#事例" aria-label="Permalink to &quot;事例&quot;">​</a></h2><p>在插件命名方式上，如果插件是一个 npm 包，在package.json中的包命名也推荐以vite-plugin开头。一般情况下因为要考虑到外部传参，我们不会直接写一个对象，而是实现一个返回插件对象的工厂函数，如下代码所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function myVitePlugin(options) {</span></span>
<span class="line"><span>  console.log(options)</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    name: &#39;vite-plugin-xxx&#39;,</span></span>
<span class="line"><span>    load(id) {</span></span>
<span class="line"><span>      // 在钩子逻辑中可以通过闭包访问外部的 options 传参</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用方式</span></span>
<span class="line"><span>// vite.config.ts</span></span>
<span class="line"><span>import { myVitePlugin } from &#39;./myVitePlugin&#39;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  plugins: [myVitePlugin({ /* 给插件传参 */ })]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="vite-插件生命周期的执行顺序" tabindex="-1">Vite 插件生命周期的执行顺序 <a class="header-anchor" href="#vite-插件生命周期的执行顺序" aria-label="Permalink to &quot;Vite 插件生命周期的执行顺序&quot;">​</a></h2><p><img src="`+l+'" alt="alt text"></p><ul><li>服务启动阶段： config、configResolved、options、configureServer、buildStart</li><li>请求响应阶段：如果是 html 文件，仅执行transformIndexHtml钩子；对于非 HTML 文件，则依次执行resolveId、load和transform钩子。相信大家学过 Rollup 的插件机制，已经对这三个钩子比较熟悉了。</li><li>热更新阶段：执行handleHotUpdate钩子。</li><li>服务关闭阶段：依次执行buildEnd和closeBundle钩子。</li></ul><h2 id="vite-插件的执行顺序" tabindex="-1">Vite 插件的执行顺序 <a class="header-anchor" href="#vite-插件的执行顺序" aria-label="Permalink to &quot;Vite 插件的执行顺序&quot;">​</a></h2><p>默认为<code>normal</code>，可取值还有<code>pre</code>和<code>post</code> <img src="'+e+`" alt="alt text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default function testHookPlugin(){</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        name:&quot;test-hooks-plugin&quot;,</span></span>
<span class="line"><span>        // &#39;serve&#39; 表示仅用于开发环境，&#39;build&#39;表示仅用于生产环境</span></span>
<span class="line"><span>        apply: &#39;serve&#39;,</span></span>
<span class="line"><span>        config(config){</span></span>
<span class="line"><span>            // console.log(&#39;config&#39;,config);</span></span>
<span class="line"><span>            console.log(&#39;config&#39;);</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        configResolved(resolvedCofnig) {</span></span>
<span class="line"><span>            console.log(&#39;configResolved&#39;);</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          // 通用钩子</span></span>
<span class="line"><span>        options(opts) {</span></span>
<span class="line"><span>            console.log(&#39;options&#39;);</span></span>
<span class="line"><span>            return opts;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // Vite 独有钩子</span></span>
<span class="line"><span>     configureServer(server) {</span></span>
<span class="line"><span>        console.log(&#39;configureServer&#39;);</span></span>
<span class="line"><span>        // setTimeout(() =&gt; {</span></span>
<span class="line"><span>        //   // 手动退出进程</span></span>
<span class="line"><span>        //   process.kill(process.pid, &#39;SIGTERM&#39;);</span></span>
<span class="line"><span>        // }, 3000)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      handleHotUpdate(){</span></span>
<span class="line"><span>        console.log(&#39;handleHotUpdate&#39;);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 通用钩子</span></span>
<span class="line"><span>    buildStart() {</span></span>
<span class="line"><span>        console.log(&#39;buildStart&#39;);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 通用钩子</span></span>
<span class="line"><span>      buildEnd() {</span></span>
<span class="line"><span>        console.log(&#39;buildEnd&#39;);</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 通用钩子</span></span>
<span class="line"><span>      closeBundle() {</span></span>
<span class="line"><span>        console.log(&#39;closeBundle&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="案例一-虚拟模块" tabindex="-1">案例一 虚拟模块 <a class="header-anchor" href="#案例一-虚拟模块" aria-label="Permalink to &quot;案例一 虚拟模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { Plugin,ResolvedConfig } from &#39;vite&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// types/shim.d.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 虚拟模块名称</span></span>
<span class="line"><span>const virtualFibModuleId = &#39;virtual:fib&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Vite 中约定对于虚拟模块，解析后的路径需要加上\`\\0\`前缀</span></span>
<span class="line"><span>const resolvedFibVirtualModuleId = &#39;\\0&#39; + virtualFibModuleId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const virtualEnvModuleId = &#39;virtual:env&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const resolvedEnvVirtualModuleId = &#39;\\0&#39; + virtualEnvModuleId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function virtualFibModulePlugin():Plugin{</span></span>
<span class="line"><span>    let config: ResolvedConfig | null = null;</span></span>
<span class="line"><span>    return  {</span></span>
<span class="line"><span>        name:&quot;vite-plugin-virtual-module&quot;,</span></span>
<span class="line"><span>        configResolved(c:ResolvedConfig){</span></span>
<span class="line"><span>            config = c</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        resolveId(id){</span></span>
<span class="line"><span>            if(id===virtualFibModuleId){</span></span>
<span class="line"><span>                return resolvedFibVirtualModuleId</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if(id===virtualEnvModuleId){</span></span>
<span class="line"><span>                return resolvedEnvVirtualModuleId</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        load(id){</span></span>
<span class="line"><span>            // 加载虚拟模块</span></span>
<span class="line"><span>            if (id === resolvedFibVirtualModuleId) {</span></span>
<span class="line"><span>                return &#39;export default function fib(n) { return n &lt;= 1 ? n : fib(n - 1) + fib(n - 2); }&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (id === resolvedEnvVirtualModuleId) {</span></span>
<span class="line"><span>                return \`export default \${JSON.stringify(config?.env)}\`;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="案例二-vite-打包进度条" tabindex="-1">案例二 vite 打包进度条 <a class="header-anchor" href="#案例二-vite-打包进度条" aria-label="Permalink to &quot;案例二 vite 打包进度条&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i picocolors progress rd @types/progress</span></span></code></pre></div><div class="language-index.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import type { PluginOption } from &#39;vite&#39;;</span></span>
<span class="line"><span>import colors from &#39;picocolors&#39;;</span></span>
<span class="line"><span>import progress from &#39;progress&#39;;</span></span>
<span class="line"><span>import rd from &#39;rd&#39;;</span></span>
<span class="line"><span>import { isExists, getCacheData, setCacheData } from &#39;./cache&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Omit&lt;T, K extends keyof T&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span>
<span class="line"><span>type Merge&lt;M, N&gt; = Omit&lt;M, Extract&lt;keyof M, keyof N&gt;&gt; &amp; N;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type PluginOptions = Merge&lt;</span></span>
<span class="line"><span>    ProgressBar.ProgressBarOptions,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * total number of ticks to complete</span></span>
<span class="line"><span>         * @default 100</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        total?: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * The format of the progress bar</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        format?: string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function viteProgressBar(options?: PluginOptions): PluginOption {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const { cacheTransformCount, cacheChunkCount } = getCacheData()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let bar: progress;</span></span>
<span class="line"><span>    const stream = options?.stream || process.stderr;</span></span>
<span class="line"><span>    let outDir: string;</span></span>
<span class="line"><span>    let transformCount = 0</span></span>
<span class="line"><span>    let chunkCount = 0</span></span>
<span class="line"><span>    let transformed = 0</span></span>
<span class="line"><span>    let fileCount = 0</span></span>
<span class="line"><span>    let lastPercent = 0</span></span>
<span class="line"><span>    let percent = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        name: &#39;vite-plugin-progress&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        enforce: &#39;pre&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        apply: &#39;build&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        config(config, { command }) {</span></span>
<span class="line"><span>            if (command === &#39;build&#39;) {</span></span>
<span class="line"><span>                config.logLevel = &#39;silent&#39;;</span></span>
<span class="line"><span>                outDir = config.build?.outDir || &#39;dist&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                options = {</span></span>
<span class="line"><span>                    width: 40,</span></span>
<span class="line"><span>                    complete: &#39;\\u2588&#39;,</span></span>
<span class="line"><span>                    incomplete: &#39;\\u2591&#39;,</span></span>
<span class="line"><span>                    ...options</span></span>
<span class="line"><span>                };</span></span>
<span class="line"><span>                options.total = options?.total || 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                const transforming = isExists ? \`\${colors.magenta(&#39;Transforms:&#39;)} :transformCur/:transformTotal | \` : &#39;&#39;</span></span>
<span class="line"><span>                const chunks = isExists ? \`\${colors.magenta(&#39;Chunks:&#39;)} :chunkCur/:chunkTotal | \` : &#39;&#39;</span></span>
<span class="line"><span>                const barText = \`\${colors.cyan(\`[:bar]\`)}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                const barFormat =</span></span>
<span class="line"><span>                    options.format ||</span></span>
<span class="line"><span>                    \`\${colors.green(&#39;Bouilding&#39;)} \${barText} :percent | \${transforming}\${chunks}Time: :elapseds\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                delete options.format;</span></span>
<span class="line"><span>                bar = new progress(barFormat, options as ProgressBar.ProgressBarOptions);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // not cache: Loop files in src directory</span></span>
<span class="line"><span>                if (!isExists) {</span></span>
<span class="line"><span>                    const readDir = rd.readSync(&#39;src&#39;);</span></span>
<span class="line"><span>                    const reg = /\\.(vue|ts|js|jsx|tsx|css|scss||sass|styl|less)$/gi;</span></span>
<span class="line"><span>                    readDir.forEach((item) =&gt; reg.test(item) &amp;&amp; fileCount++);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        transform(code, id) {</span></span>
<span class="line"><span>            transformCount++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // not cache</span></span>
<span class="line"><span>            if(!isExists) {</span></span>
<span class="line"><span>                const reg = /node_modules/gi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (!reg.test(id) &amp;&amp; percent &lt; 0.25) {</span></span>
<span class="line"><span>                    transformed++</span></span>
<span class="line"><span>                    percent = +(transformed / (fileCount * 2)).toFixed(2)</span></span>
<span class="line"><span>                    percent &lt; 0.8 &amp;&amp; (lastPercent = percent)</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (percent &gt;= 0.25 &amp;&amp; lastPercent &lt;= 0.65) {</span></span>
<span class="line"><span>                    lastPercent = +(lastPercent + 0.001).toFixed(4)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // go cache</span></span>
<span class="line"><span>            if (isExists) runCachedData()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            bar.update(lastPercent, {</span></span>
<span class="line"><span>                transformTotal: cacheTransformCount,</span></span>
<span class="line"><span>                transformCur: transformCount,</span></span>
<span class="line"><span>                chunkTotal: cacheChunkCount,</span></span>
<span class="line"><span>                chunkCur: 0,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                code,</span></span>
<span class="line"><span>                map: null</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        renderChunk() {</span></span>
<span class="line"><span>            chunkCount++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (lastPercent &lt;= 0.95)</span></span>
<span class="line"><span>                isExists ? runCachedData() : (lastPercent = +(lastPercent + 0.005).toFixed(4))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            bar.update(lastPercent, {</span></span>
<span class="line"><span>                transformTotal: cacheTransformCount,</span></span>
<span class="line"><span>                transformCur: transformCount,</span></span>
<span class="line"><span>                chunkTotal: cacheChunkCount,</span></span>
<span class="line"><span>                chunkCur: chunkCount,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return null</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        closeBundle() {</span></span>
<span class="line"><span>            // close progress</span></span>
<span class="line"><span>            bar.update(1)</span></span>
<span class="line"><span>            bar.terminate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // set cache data</span></span>
<span class="line"><span>            setCacheData({</span></span>
<span class="line"><span>                cacheTransformCount: transformCount,</span></span>
<span class="line"><span>                cacheChunkCount: chunkCount,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // out successful message</span></span>
<span class="line"><span>            stream.write(</span></span>
<span class="line"><span>                \`\${colors.cyan(colors.bold(\`Build successful. Please see \${outDir} directory\`))}\`</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>            stream.write(&#39;\\n&#39;);</span></span>
<span class="line"><span>            stream.write(&#39;\\n&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * run cache data of progress</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    function runCachedData() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (transformCount === 1) {</span></span>
<span class="line"><span>            stream.write(&#39;\\n&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            bar.tick({</span></span>
<span class="line"><span>                transformTotal: cacheTransformCount,</span></span>
<span class="line"><span>                transformCur: transformCount,</span></span>
<span class="line"><span>                chunkTotal: cacheChunkCount,</span></span>
<span class="line"><span>                chunkCur: 0,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        transformed++</span></span>
<span class="line"><span>        percent = lastPercent = +(transformed / (cacheTransformCount + cacheChunkCount)).toFixed(2)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-cache.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cache.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import fs from &#39;fs&#39;;</span></span>
<span class="line"><span>import path from &#39;path&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dirPath = path.join(process.cwd(), &#39;node_modules&#39;, &#39;.progress&#39;);</span></span>
<span class="line"><span>const filePath = path.join(dirPath, &#39;index.json&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface ICacheData {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Transform all count</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    cacheTransformCount: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * chunk all count</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    cacheChunkCount: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * It has been cached</span></span>
<span class="line"><span> * @return boolean</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const isExists = fs.existsSync(filePath) || false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Get cached data</span></span>
<span class="line"><span> * @returns ICacheData</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const getCacheData = (): ICacheData =&gt; {</span></span>
<span class="line"><span>    if (!isExists) return {</span></span>
<span class="line"><span>        cacheTransformCount: 0,</span></span>
<span class="line"><span>        cacheChunkCount: 0</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return JSON.parse(fs.readFileSync(filePath, &#39;utf8&#39;));</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Set the data to be cached</span></span>
<span class="line"><span> * @returns</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const setCacheData = (data: ICacheData) =&gt; {</span></span>
<span class="line"><span>    !isExists &amp;&amp; fs.mkdirSync(dirPath);</span></span>
<span class="line"><span>    fs.writeFileSync(filePath, JSON.stringify(data));</span></span>
<span class="line"><span>};</span></span></code></pre></div>`,16),t=[c];function o(r,u,d,h,g,m){return a(),n("div",null,t)}const b=s(i,[["render",o]]);export{v as __pageData,b as default};
