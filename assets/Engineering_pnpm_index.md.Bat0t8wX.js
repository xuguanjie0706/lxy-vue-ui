import{_ as a,c as n,o as p,a4 as s}from"./chunks/framework.B3h3aO-h.js";const e="/lxy-blog/assets/image.DloL95gS.png",t="/lxy-blog/assets/image-1.D4oMJYQA.png",k=JSON.parse('{"title":"PNPM","description":"","frontmatter":{},"headers":[],"relativePath":"Engineering/pnpm/index.md","filePath":"Engineering/pnpm/index.md","lastUpdated":1716041560000}'),i={name:"Engineering/pnpm/index.md"},l=s(`<h1 id="pnpm" tabindex="-1">PNPM <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;PNPM&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>使用 pnpm 时，依赖会被存储在内容可寻址的存储中。不用重复安装</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -g pnpm</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm config list</span></span>
<span class="line"><span>pnpm config get &lt;key&gt;</span></span>
<span class="line"><span>pnpm config set &lt;key&gt;</span></span>
<span class="line"><span>pnpm config delete &lt;key&gt;</span></span></code></pre></div><h2 id="过滤" tabindex="-1">过滤 <a class="header-anchor" href="#过滤" aria-label="Permalink to &quot;过滤&quot;">​</a></h2><p>执行 packages 下的 lxy-image-preview 的脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm -F lxy-image-preview build</span></span></code></pre></div><p>执行 packages 下除了 lxy-image-preview 的脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm -F=&#39;!lxy-image-preview&#39; build</span></span></code></pre></div><h2 id="管理依赖" tabindex="-1">管理依赖 <a class="header-anchor" href="#管理依赖" aria-label="Permalink to &quot;管理依赖&quot;">​</a></h2><h3 id="安装-pnpm-add" tabindex="-1">安装：pnpm add <a class="header-anchor" href="#安装-pnpm-add" aria-label="Permalink to &quot;安装：pnpm add&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm add &lt;pkg&gt;	//保存到 dependencies</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt; -D	//保存到 devDependencies</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt; -O	//保存到 optionalDependencies</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt; -g	//安装到全局</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt; -w	//安装到根项目（即使是在子目录下执行，也同样会安装到根项目）</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt;@next	//从 next 标签下安装</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt;@latest	//从 latest 标签下安装</span></span>
<span class="line"><span>pnpm add &lt;pkg&gt;@3.0.0	//安装指定版本 3.0.0</span></span></code></pre></div><h3 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set ignore-workspace-root-check true</span></span></code></pre></div><h3 id="安装-pnpm-install" tabindex="-1">安装：pnpm install <a class="header-anchor" href="#安装-pnpm-install" aria-label="Permalink to &quot;安装：pnpm install&quot;">​</a></h3><p>等同于pnpm i，用于安装项目所有依赖</p><h3 id="删除-pnpm-remove" tabindex="-1">删除：pnpm remove <a class="header-anchor" href="#删除-pnpm-remove" aria-label="Permalink to &quot;删除：pnpm remove&quot;">​</a></h3><p>别名：rm、uninstall、un 从 node_modules 和项目的 package.json 中删除相关 packages。</p><h3 id="连接-pnpm-link" tabindex="-1">连接：pnpm link <a class="header-anchor" href="#连接-pnpm-link" aria-label="Permalink to &quot;连接：pnpm link&quot;">​</a></h3><p>别名：ln</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm link &lt;dir&gt;</span></span>
<span class="line"><span>pnpm link --global</span></span>
<span class="line"><span>pnpm link --global &lt;pkg&gt;</span></span></code></pre></div><h3 id="取消连接-pnpm-unlink" tabindex="-1">取消连接：pnpm unlink <a class="header-anchor" href="#取消连接-pnpm-unlink" aria-label="Permalink to &quot;取消连接：pnpm unlink&quot;">​</a></h3><p>取消链接一个系统范围的package (相对于 pnpm link).</p><h3 id="重建-pnpm-rebuild" tabindex="-1">重建：pnpm rebuild <a class="header-anchor" href="#重建-pnpm-rebuild" aria-label="Permalink to &quot;重建：pnpm rebuild&quot;">​</a></h3><p>别名：rb 重建一个package。</p><h3 id="修剪-pnpm-prune" tabindex="-1">修剪：pnpm prune <a class="header-anchor" href="#修剪-pnpm-prune" aria-label="Permalink to &quot;修剪：pnpm prune&quot;">​</a></h3><p>移除不需要的packages</p><h3 id="修改全局包目录" tabindex="-1">修改全局包目录 <a class="header-anchor" href="#修改全局包目录" aria-label="Permalink to &quot;修改全局包目录&quot;">​</a></h3><p>执行下面命令，之后所有的依赖包会保存到指定目录中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set store-dir D:\\Node\\Cache\\pnpm\\store</span></span></code></pre></div><h2 id="查看依赖" tabindex="-1">查看依赖 <a class="header-anchor" href="#查看依赖" aria-label="Permalink to &quot;查看依赖&quot;">​</a></h2><h3 id="检查-pnpm-audit" tabindex="-1">检查：pnpm audit <a class="header-anchor" href="#检查-pnpm-audit" aria-label="Permalink to &quot;检查：pnpm audit&quot;">​</a></h3><p>实际在使用这个命令时，淘宝镜像（<a href="https://registry.npmmirror.com/%EF%BC%89" target="_blank" rel="noreferrer">https://registry.npmmirror.com/）</a> 是不支持检查的</p><p><img src="`+e+`" alt="alt text"></p><h3 id="打印依赖-pnpm-list" tabindex="-1">打印依赖：pnpm list <a class="header-anchor" href="#打印依赖-pnpm-list" aria-label="Permalink to &quot;打印依赖：pnpm list&quot;">​</a></h3><p>别名：ls 此命令会以一个树形结构输出所有的已安装package的版本及其依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm ls</span></span>
<span class="line"><span>pnpm ls -r	//递归打印工作区依赖</span></span>
<span class="line"><span>pnpm ls --depth=0 -r</span></span>
<span class="line"><span>pnpm ls -g --depth=0</span></span></code></pre></div><h3 id="打印过期依赖-pnpm-outdated" tabindex="-1">打印过期依赖：pnpm outdated <a class="header-anchor" href="#打印过期依赖-pnpm-outdated" aria-label="Permalink to &quot;打印过期依赖：pnpm outdated&quot;">​</a></h3><p>可以检查package.json中所有依赖包当前版本和最新版本。 <img src="`+t+`" alt="alt text"></p><h3 id="打印指定包的依赖-pnpm-why" tabindex="-1">打印指定包的依赖：pnpm why <a class="header-anchor" href="#打印指定包的依赖-pnpm-why" aria-label="Permalink to &quot;打印指定包的依赖：pnpm why&quot;">​</a></h3><p><code>没有验证</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm why</span></span></code></pre></div><h2 id="运行脚本" tabindex="-1">运行脚本 <a class="header-anchor" href="#运行脚本" aria-label="Permalink to &quot;运行脚本&quot;">​</a></h2><h3 id="运行-pnpm-run" tabindex="-1">运行：pnpm run <a class="header-anchor" href="#运行-pnpm-run" aria-label="Permalink to &quot;运行：pnpm run&quot;">​</a></h3><p>假如您有个 watch 脚本配置在了package.json 中，像这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;watch&quot;: &quot;webpack --watch&quot;,</span></span>
<span class="line"><span>    &quot;watch1&quot;: &quot;webpack --watch&quot;,</span></span>
<span class="line"><span>    &quot;watch3&quot;: &quot;webpack --watch&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行pnpm run watch。也可以用正则去匹配执行多个脚本，下面的命令会匹配所有watch开头的命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm run &quot;/^watch:.*/&quot;</span></span></code></pre></div><h3 id="执行-pnpm-exec" tabindex="-1">执行：pnpm exec <a class="header-anchor" href="#执行-pnpm-exec" aria-label="Permalink to &quot;执行：pnpm exec&quot;">​</a></h3><p>在项目范围内执行 shell 命令。例如，项目目录下node_modules/.bin目录下有个max脚本文件。直接执行max -v是无效的，但是可以通过pnpm exec max -v来执行这个命令。pnpm exec [命令名] 类似于 npx [命令名]</p><h3 id="创建项目-pnpm-create" tabindex="-1">创建项目：pnpm create <a class="header-anchor" href="#创建项目-pnpm-create" aria-label="Permalink to &quot;创建项目：pnpm create&quot;">​</a></h3><p>这两个命令都可以用来创建项目，例如创建一个项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm create vite ./my-app</span></span></code></pre></div><h2 id="管理node版本" tabindex="-1">管理Node版本 <a class="header-anchor" href="#管理node版本" aria-label="Permalink to &quot;管理Node版本&quot;">​</a></h2><p>配置命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm env &lt;cmd&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//cmd：</span></span>
<span class="line"><span>//use：使用</span></span>
<span class="line"><span>//remove：删除</span></span>
<span class="line"><span>//list：打印全部</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm env use -g lts	//安装LTS 版本</span></span>
<span class="line"><span>pnpm env use -g 16	//安装 v16：</span></span>
<span class="line"><span>pnpm env use -g latest	//最新版本</span></span></code></pre></div><h2 id="缓存目录" tabindex="-1">缓存目录 <a class="header-anchor" href="#缓存目录" aria-label="Permalink to &quot;缓存目录&quot;">​</a></h2><h3 id="查看全局变量的地址" tabindex="-1">查看全局变量的地址 <a class="header-anchor" href="#查看全局变量的地址" aria-label="Permalink to &quot;查看全局变量的地址&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm config get prefix</span></span></code></pre></div><h3 id="修改pnpm缓存地址" tabindex="-1">修改pnpm缓存地址 <a class="header-anchor" href="#修改pnpm缓存地址" aria-label="Permalink to &quot;修改pnpm缓存地址&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set store-dir [目录]</span></span>
<span class="line"><span>pnpm store path #查看store目录</span></span></code></pre></div><h3 id="从存储中删除未引用的包。" tabindex="-1">从存储中删除未引用的包。 <a class="header-anchor" href="#从存储中删除未引用的包。" aria-label="Permalink to &quot;从存储中删除未引用的包。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm store prune</span></span></code></pre></div>`,67),o=[l];function c(d,h,r,m,u,g){return p(),n("div",null,o)}const v=a(i,[["render",c]]);export{k as __pageData,v as default};