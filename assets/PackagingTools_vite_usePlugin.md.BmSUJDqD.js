import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const v=JSON.parse('{"title":"vite plugin 使用汇总","description":"","frontmatter":{},"headers":[],"relativePath":"PackagingTools/vite/usePlugin.md","filePath":"PackagingTools/vite/usePlugin.md","lastUpdated":1716144871000}'),e={name:"PackagingTools/vite/usePlugin.md"},t=p(`<h1 id="vite-plugin-使用汇总" tabindex="-1">vite plugin 使用汇总 <a class="header-anchor" href="#vite-plugin-使用汇总" aria-label="Permalink to &quot;vite plugin 使用汇总&quot;">​</a></h1><p>plugin项目优化汇总</p><h2 id="unplugin-auto-import" tabindex="-1">unplugin-auto-import <a class="header-anchor" href="#unplugin-auto-import" aria-label="Permalink to &quot;unplugin-auto-import&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 使用前</span></span>
<span class="line"><span>import { ref }from &#39;vue&#39;</span></span>
<span class="line"><span>const lxy = ref(&#39;lxy&#39;)</span></span>
<span class="line"><span>// 使用后</span></span>
<span class="line"><span>const lxy = ref(&#39;lxy&#39;)</span></span></code></pre></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i unplugin-auto-import -D</span></span>
<span class="line"><span>mkdir types</span></span></code></pre></div><div class="language-vite.config.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vite.config.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import AutoImport from &quot;unplugin-auto-import/vite&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [vue(),AutoImport({</span></span>
<span class="line"><span>    dts: &#39;types/auto-imports.d.ts&#39;,</span></span>
<span class="line"><span>    imports:[&quot;vue&quot;,&quot;vue-router&quot;],</span></span>
<span class="line"><span>    eslintrc: {</span></span>
<span class="line"><span>      enabled: true,  // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })],</span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language-eslintrc.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">eslintrc.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;extends&quot;: [</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    &quot;./.eslintrc-auto-import.json&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-tsconfig.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsconfig.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;include&quot;: [&quot;./auto-imports.d.ts&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9),i=[t];function l(o,c,u,r,d,g){return n(),a("div",null,i)}const m=s(e,[["render",l]]);export{v as __pageData,m as default};
