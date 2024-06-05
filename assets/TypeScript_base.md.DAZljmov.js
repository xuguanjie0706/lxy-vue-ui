import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.B3h3aO-h.js";const p="/lxy-blog/assets/image.XhJGOEXB.png",t="/lxy-blog/assets/image-1.CH_3-J8F.png",v=JSON.parse('{"title":"TypeScript 基础篇","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/base.md","filePath":"TypeScript/base.md","lastUpdated":1716471679000}'),i={name:"TypeScript/base.md"},o=e(`<h1 id="typescript-基础篇" tabindex="-1">TypeScript 基础篇 <a class="header-anchor" href="#typescript-基础篇" aria-label="Permalink to &quot;TypeScript 基础篇&quot;">​</a></h1><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i -g typescript</span></span></code></pre></div><h3 id="创建文件及编译" tabindex="-1">创建文件及编译 <a class="header-anchor" href="#创建文件及编译" aria-label="Permalink to &quot;创建文件及编译&quot;">​</a></h3><p>通过以下方式编译,如果类型检测失败，那么编译器会在控制台抛出错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsc index.ts</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_fP_f" id="tab-HWLQN-3" checked="checked"><label for="tab-HWLQN-3">TypeScript</label><input type="radio" name="group-_fP_f" id="tab-br2Tcov"><label for="tab-br2Tcov">JavaScript</label></div><div class="blocks"><div class="language-index.ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">index.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Goods = {</span></span>
<span class="line"><span>    name:string</span></span>
<span class="line"><span>    price:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const buy = (goods:Goods):void=&gt;{</span></span>
<span class="line"><span>    console.log(\`spend \${goods.price} to buy \${goods.name}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const water :Goods={</span></span>
<span class="line"><span>    name:&quot;water&quot;,</span></span>
<span class="line"><span>    price:1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buy(water)</span></span></code></pre></div><div class="language-index.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var buy = function (goods) {</span></span>
<span class="line"><span>    console.log(&quot;spend &quot;.concat(goods.price, &quot; to buy &quot;).concat(goods.name));</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var water = {</span></span>
<span class="line"><span>    name: &quot;water&quot;,</span></span>
<span class="line"><span>    price: 1</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>buy(water);</span></span></code></pre></div></div></div><h2 id="快速生成配置文件" tabindex="-1">快速生成配置文件 <a class="header-anchor" href="#快速生成配置文件" aria-label="Permalink to &quot;快速生成配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tsc --init</span></span></code></pre></div><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><p>在项目根目录下叉棍见tsconfig.json，当tsc运行时，TypeScript会在当前目录或父级目录中寻找tsconfig.json文件。</p><h3 id="compileroptions字段详解" tabindex="-1">compilerOptions字段详解 <a class="header-anchor" href="#compileroptions字段详解" aria-label="Permalink to &quot;compilerOptions字段详解&quot;">​</a></h3><p><img src="`+p+'" alt="alt text"> <img src="'+t+`" alt="alt text"></p><h2 id="文件匹配" tabindex="-1">文件匹配 <a class="header-anchor" href="#文件匹配" aria-label="Permalink to &quot;文件匹配&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;files&quot;:[&quot;path/to/file.ts&quot;],// 指定编译</span></span>
<span class="line"><span>    &quot;include&quot;:[&quot;src/**/*.ts&quot;],  // 过滤编译</span></span>
<span class="line"><span>    &quot;exclude&quot;:[&quot;node_modules&quot;], // 排除编译</span></span>
<span class="line"><span>    &quot;extends&quot;:&quot;../tsconfig.json&quot;// 集成配置</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),l=[o];function c(d,r,h,u,b,g){return n(),s("div",null,l)}const q=a(i,[["render",c]]);export{v as __pageData,q as default};
