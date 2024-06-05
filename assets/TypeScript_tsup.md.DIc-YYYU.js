import{_ as a,c as e,o as s,a4 as t}from"./chunks/framework.B3h3aO-h.js";const g=JSON.parse('{"title":"tsup","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/tsup.md","filePath":"TypeScript/tsup.md","lastUpdated":1716257221000}'),n={name:"TypeScript/tsup.md"},p=t(`<h1 id="tsup" tabindex="-1">tsup <a class="header-anchor" href="#tsup" aria-label="Permalink to &quot;tsup&quot;">​</a></h1><p><a href="https://tsup.egoist.dev/#what-about-type-checking" target="_blank" rel="noreferrer">文档</a></p><p>tsup 是一个轻小且无需配置的，由 esbuild 支持的构建工具；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsup</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h2 id="generate-sourcemap-file" tabindex="-1">Generate sourcemap file <a class="header-anchor" href="#generate-sourcemap-file" aria-label="Permalink to &quot;Generate sourcemap file&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsup index.ts --sourcemap</span></span></code></pre></div><h2 id="bundle-formats" tabindex="-1">Bundle formats <a class="header-anchor" href="#bundle-formats" aria-label="Permalink to &quot;Bundle formats&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsup src/index.ts --format esm,cjs,iife</span></span></code></pre></div><h2 id="generate-declaration-file" tabindex="-1">Generate declaration file <a class="header-anchor" href="#generate-declaration-file" aria-label="Permalink to &quot;Generate declaration file&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsup index.ts --dts</span></span></code></pre></div><h2 id="watch-mode" tabindex="-1">Watch mode <a class="header-anchor" href="#watch-mode" aria-label="Permalink to &quot;Watch mode&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsup src/index.ts --watch</span></span></code></pre></div><h2 id="minify-output" tabindex="-1">Minify output <a class="header-anchor" href="#minify-output" aria-label="Permalink to &quot;Minify output&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsup src/index.ts --minify</span></span></code></pre></div><div class="language-package.josn vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.josn</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;pnpm run build --watch --ignore-watch examples&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;tsup src/index.ts --dts --format cjs,esm&quot;,</span></span>
<span class="line"><span>    &quot;example:react&quot;: &quot;cd examples/vite-react &amp;&amp; pnpm run build&quot;,</span></span>
<span class="line"><span>    &quot;example:vue2&quot;: &quot;cd examples/vite-vue2 &amp;&amp; pnpm run build&quot;,</span></span>
<span class="line"><span>    &quot;example:vue3&quot;: &quot;cd examples/vite-vue3 &amp;&amp; pnpm run build&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15),i=[p];function l(o,c,d,u,r,h){return s(),e("div",null,i)}const b=a(n,[["render",l]]);export{g as __pageData,b as default};
