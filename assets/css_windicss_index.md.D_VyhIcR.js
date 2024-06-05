import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const b=JSON.parse('{"title":"windicss","description":"","frontmatter":{},"headers":[],"relativePath":"css/windicss/index.md","filePath":"css/windicss/index.md","lastUpdated":1716300886000}'),e={name:"css/windicss/index.md"},i=p(`<h1 id="windicss" tabindex="-1">windicss <a class="header-anchor" href="#windicss" aria-label="Permalink to &quot;windicss&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite-plugin-windicss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> windicss</span></span></code></pre></div><div class="language-vite.config.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vite.config.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import WindiCSS from &#39;vite-plugin-windicss&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    WindiCSS(),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>就是这样！开始在你的应用程序中使用类实用程序或CSS指令，享受速度！</p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><ul><li>windi.config.ts</li><li>windi.config.js</li><li>tailwind.config.ts</li><li>tailwind.config.js</li></ul><div class="language-windi.config.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;windicss/helpers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  /* configurations... */</span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language-windi.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;windicss/helpers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  /* configurations... */</span></span>
<span class="line"><span>})</span></span></code></pre></div><details class="details custom-block"><summary>事例</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;windicss/helpers&#39;</span></span>
<span class="line"><span>import colors from &#39;windicss/colors&#39;</span></span>
<span class="line"><span>import plugin from &#39;windicss/plugin&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  darkMode: &#39;class&#39;, // or &#39;media&#39;</span></span>
<span class="line"><span>  theme: {</span></span>
<span class="line"><span>    extend: {</span></span>
<span class="line"><span>      screens: {</span></span>
<span class="line"><span>        &#39;sm&#39;: &#39;640px&#39;,</span></span>
<span class="line"><span>        &#39;md&#39;: &#39;768px&#39;,</span></span>
<span class="line"><span>        &#39;lg&#39;: &#39;1024px&#39;,</span></span>
<span class="line"><span>        &#39;xl&#39;: &#39;1280px&#39;,</span></span>
<span class="line"><span>        &#39;2xl&#39;: &#39;1536px&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      colors: {</span></span>
<span class="line"><span>        blue: colors.sky,</span></span>
<span class="line"><span>        red: colors.rose,</span></span>
<span class="line"><span>        pink: colors.fuchsia,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      fontFamily: {</span></span>
<span class="line"><span>        sans: [&#39;Graphik&#39;, &#39;sans-serif&#39;],</span></span>
<span class="line"><span>        serif: [&#39;Merriweather&#39;, &#39;serif&#39;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      spacing: {</span></span>
<span class="line"><span>        128: &#39;32rem&#39;,</span></span>
<span class="line"><span>        144: &#39;36rem&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      borderRadius: {</span></span>
<span class="line"><span>        &#39;4xl&#39;: &#39;2rem&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    plugin(({ addUtilities }) =&gt; {</span></span>
<span class="line"><span>      const newUtilities = {</span></span>
<span class="line"><span>        &#39;.skew-10deg&#39;: {</span></span>
<span class="line"><span>          transform: &#39;skewY(-10deg)&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;.skew-15deg&#39;: {</span></span>
<span class="line"><span>          transform: &#39;skewY(-15deg)&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      addUtilities(newUtilities)</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    plugin(({ addComponents }) =&gt; {</span></span>
<span class="line"><span>      const buttons = {</span></span>
<span class="line"><span>        &#39;.btn&#39;: {</span></span>
<span class="line"><span>          padding: &#39;.5rem 1rem&#39;,</span></span>
<span class="line"><span>          borderRadius: &#39;.25rem&#39;,</span></span>
<span class="line"><span>          fontWeight: &#39;600&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;.btn-blue&#39;: {</span></span>
<span class="line"><span>          &#39;backgroundColor&#39;: &#39;#3490dc&#39;,</span></span>
<span class="line"><span>          &#39;color&#39;: &#39;#fff&#39;,</span></span>
<span class="line"><span>          &#39;&amp;:hover&#39;: {</span></span>
<span class="line"><span>            backgroundColor: &#39;#2779bd&#39;,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;.btn-red&#39;: {</span></span>
<span class="line"><span>          &#39;backgroundColor&#39;: &#39;#e3342f&#39;,</span></span>
<span class="line"><span>          &#39;color&#39;: &#39;#fff&#39;,</span></span>
<span class="line"><span>          &#39;&amp;:hover&#39;: {</span></span>
<span class="line"><span>            backgroundColor: &#39;#cc1f1a&#39;,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      addComponents(buttons)</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    plugin(({ addDynamic, variants }) =&gt; {</span></span>
<span class="line"><span>      addDynamic(&#39;skew&#39;, ({ Utility, Style }) =&gt; {</span></span>
<span class="line"><span>        return Utility.handler</span></span>
<span class="line"><span>          .handleStatic(Style(&#39;skew&#39;))</span></span>
<span class="line"><span>          .handleNumber(0, 360, &#39;int&#39;, number =&gt; \`skewY(-\${number}deg)\`)</span></span>
<span class="line"><span>          .createProperty(&#39;transform&#39;)</span></span>
<span class="line"><span>      }, variants(&#39;skew&#39;))</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    require(&#39;windicss/plugin/filters&#39;),</span></span>
<span class="line"><span>    require(&#39;windicss/plugin/forms&#39;),</span></span>
<span class="line"><span>    require(&#39;windicss/plugin/aspect-ratio&#39;),</span></span>
<span class="line"><span>    require(&#39;windicss/plugin/line-clamp&#39;),</span></span>
<span class="line"><span>    require(&#39;windicss/plugin/typography&#39;)({</span></span>
<span class="line"><span>      modifiers: [&#39;DEFAULT&#39;, &#39;sm&#39;, &#39;lg&#39;, &#39;red&#39;],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre></div></details><h2 id="扫描" tabindex="-1">扫描 <a class="header-anchor" href="#扫描" aria-label="Permalink to &quot;扫描&quot;">​</a></h2><p>如果您想启用/禁用其他文件类型或位置的扫描，您可以使用include和exclude选项进行配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;windicss/helpers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  extract: {</span></span>
<span class="line"><span>    // accepts globs and file paths relative to project root</span></span>
<span class="line"><span>    include: [</span></span>
<span class="line"><span>      &#39;index.html&#39;,</span></span>
<span class="line"><span>      &#39;src/**/*.{vue,html,jsx,tsx}&#39;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    exclude: [</span></span>
<span class="line"><span>      &#39;node_modules/**/*&#39;,</span></span>
<span class="line"><span>      &#39;.git/**/*&#39;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="值自动判断" tabindex="-1">值自动判断 <a class="header-anchor" href="#值自动判断" aria-label="Permalink to &quot;值自动判断&quot;">​</a></h2><div class="language-index.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;p-5px mt-[0.3px]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;button class=&quot;bg-hex-b2a8bb&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button class=&quot;bg-[#b2a8bb]&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button class=&quot;bg-[hsl(211.7,81.9%,69.6%)]&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>&lt;div  class=&quot;grid-cols-[auto,1fr,30px]&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h3 id="数字" tabindex="-1">数字 <a class="header-anchor" href="#数字" aria-label="Permalink to &quot;数字&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p-{float} -&gt; padding: {float/4}rem;</span></span></code></pre></div><h3 id="尺寸" tabindex="-1">尺寸 <a class="header-anchor" href="#尺寸" aria-label="Permalink to &quot;尺寸&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p-{size} -&gt; padding: {size};</span></span></code></pre></div><h3 id="分数" tabindex="-1">分数 <a class="header-anchor" href="#分数" aria-label="Permalink to &quot;分数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>w-{fraction} -&gt; width: {fraction -&gt; percent};</span></span></code></pre></div><h3 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>text-{color} -&gt; color: rgba(...);</span></span>
<span class="line"><span>border-hex-{hex} -&gt; border-color: rgba(...);</span></span></code></pre></div><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bg-\${variableName}</span></span></code></pre></div><h3 id="网格模板" tabindex="-1">网格模板 <a class="header-anchor" href="#网格模板" aria-label="Permalink to &quot;网格模板&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>grid-cols-[auto,1fr,30px]</span></span></code></pre></div><h2 id="变体组" tabindex="-1">变体组 <a class="header-anchor" href="#变体组" aria-label="Permalink to &quot;变体组&quot;">​</a></h2><p>通过使用括号对同一变体的实用程序进行分组来应用它们。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;hover:(bg-gray-400 font-medium) bg-white font-light&quot;/&gt;</span></span></code></pre></div><h2 id="快捷方式" tabindex="-1">快捷方式 <a class="header-anchor" href="#快捷方式" aria-label="Permalink to &quot;快捷方式&quot;">​</a></h2><div class="language-windi.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  shortcuts: {</span></span>
<span class="line"><span>    &#39;btn&#39;: &#39;py-2 px-4 font-semibold rounded-lg shadow-md&#39;,</span></span>
<span class="line"><span>    &#39;btn-green&#39;: &#39;text-white bg-green-500 hover:bg-green-700&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-index.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;btn btn-green&quot;&gt;12&lt;/div&gt;</span></span></code></pre></div><h2 id="响应式设计" tabindex="-1">响应式设计 <a class="header-anchor" href="#响应式设计" aria-label="Permalink to &quot;响应式设计&quot;">​</a></h2><table><thead><tr><th style="text-align:left;"></th><th>默认</th><th>&lt;带前缀的</th><th>@带前缀的</th></tr></thead><tbody><tr><td style="text-align:left;">SM</td><td>（最小宽度：640px）</td><td>（最大宽度：639.9px）</td><td>（最小宽度：640px）和（最大宽度：767.9px​​）</td></tr><tr><td style="text-align:left;">MD</td><td>（最小宽度：768px）</td><td>（最大宽度：767.9px​​）</td><td>（最小宽度：768px）和（最大宽度：1023.9px）</td></tr><tr><td style="text-align:left;">lg</td><td>（最小宽度：1024px）</td><td>（最大宽度：1023.9px）</td><td>（最小宽度：1024px）和（最大宽度：1279.9px）</td></tr><tr><td style="text-align:left;">XL</td><td>（最小宽度：1280px）</td><td>（最大宽度：1279.9px）</td><td>（最小宽度：1280px）和（最大宽度：1535.9px）</td></tr><tr><td style="text-align:left;">2xl</td><td>（最小宽度：1536px）</td><td>（最大宽度：1535.9px）</td><td>（最小宽度：1536px）</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p-1 lg:(p-2 m-2 text-red-400)</span></span></code></pre></div><h3 id="定制化" tabindex="-1">定制化 <a class="header-anchor" href="#定制化" aria-label="Permalink to &quot;定制化&quot;">​</a></h3><div class="language-windi.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { defineConfig } from &#39;windicss/helpers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  theme: {</span></span>
<span class="line"><span>    screens: {</span></span>
<span class="line"><span>      tablet: &#39;640px&#39;,</span></span>
<span class="line"><span>      laptop: &#39;1024px&#39;,</span></span>
<span class="line"><span>      desktop: &#39;1280px&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="深色模式" tabindex="-1">深色模式 <a class="header-anchor" href="#深色模式" aria-label="Permalink to &quot;深色模式&quot;">​</a></h2><p>Windi CSS 具有开箱即用的深色模式支持。</p><h3 id="类模式" tabindex="-1">类模式 <a class="header-anchor" href="#类模式" aria-label="Permalink to &quot;类模式&quot;">​</a></h3><p>它检测父元素的class=&quot;dark&quot;，通常您可以将其应用到html元素上以使其在全局范围内工作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  darkMode: &#39;class&#39;,</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="媒体查询模式" tabindex="-1">媒体查询模式 <a class="header-anchor" href="#媒体查询模式" aria-label="Permalink to &quot;媒体查询模式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  darkMode: &#39;media&#39;,</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="重要前缀" tabindex="-1">重要前缀 <a class="header-anchor" href="#重要前缀" aria-label="Permalink to &quot;重要前缀&quot;">​</a></h2><p>您可以为任何实用程序类添加前缀，将!它们设置为!important</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>!text-green-300</span></span></code></pre></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><h3 id="apply" tabindex="-1">@apply <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;@apply&quot;">​</a></h3><p>用于@apply将任何现有实用程序类内联到样式块中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.btn {</span></span>
<span class="line"><span>  @apply font-bold py-2 px-4 rounded;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.btn-blue {</span></span>
<span class="line"><span>  @apply bg-blue-500 hover:bg-blue-700 text-white;</span></span>
<span class="line"><span>  padding-top: 1rem;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="variants" tabindex="-1">@variants <a class="header-anchor" href="#variants" aria-label="Permalink to &quot;@variants&quot;">​</a></h3><p>您可以通过将定义包装在指令中来生成您自己的实用程序的屏幕变体、状态变体、主题变体@variants</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@variants focus, hover {</span></span>
<span class="line"><span>  .rotate-0 {</span></span>
<span class="line"><span>    transform: rotate(0deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  .rotate-90 {</span></span>
<span class="line"><span>    transform: rotate(90deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@variants dark {</span></span>
<span class="line"><span>  .bg-color {</span></span>
<span class="line"><span>    background-color: #1c1c1e;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="screen" tabindex="-1">@screen <a class="header-anchor" href="#screen" aria-label="Permalink to &quot;@screen&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@screen sm {</span></span>
<span class="line"><span>  .custom {</span></span>
<span class="line"><span>    @apply text-lg;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="layer" tabindex="-1">@layer <a class="header-anchor" href="#layer" aria-label="Permalink to &quot;@layer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@layer components {</span></span>
<span class="line"><span>  .components {</span></span>
<span class="line"><span>    @apply bg-red-500;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@layer utilities {</span></span>
<span class="line"><span>  .utilities {</span></span>
<span class="line"><span>    max-width: 768px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@layer base {</span></span>
<span class="line"><span>  base {</span></span>
<span class="line"><span>    margin-left: auto;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="theme" tabindex="-1">theme() <a class="header-anchor" href="#theme" aria-label="Permalink to &quot;theme()&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.btn-blue {</span></span>
<span class="line"><span>  background-color: theme(&quot;colors.blue.500&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="开启属性" tabindex="-1">开启属性 <a class="header-anchor" href="#开启属性" aria-label="Permalink to &quot;开启属性&quot;">​</a></h2><div class="language-windi.config.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>attributify: true,</span></span></code></pre></div><div class="language-index.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :w=&quot;10px&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h3 id="语法-syntax" tabindex="-1">语法（Syntax） <a class="header-anchor" href="#语法-syntax" aria-label="Permalink to &quot;语法（Syntax）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(variant[:-]{1})*key? = &quot;((variant:)*value)*&quot;</span></span></code></pre></div><h3 id="增加前缀" tabindex="-1">增加前缀 <a class="header-anchor" href="#增加前缀" aria-label="Permalink to &quot;增加前缀&quot;">​</a></h3><div class="language-windi.config.ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">windi.config.ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>attributify: {</span></span>
<span class="line"><span>    prefix:&quot;x&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language-index.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div</span></span>
<span class="line"><span>x:bg=&quot;blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600&quot;</span></span>
<span class="line"><span>x:w=&quot;10px&quot;</span></span>
<span class="line"><span>x:text=&quot;sm white&quot;</span></span>
<span class="line"><span>x:font=&quot;mono light&quot;</span></span>
<span class="line"><span>x:border=&quot;2 rounded blue-200&quot;</span></span>
<span class="line"><span>x:p=&quot;y-2 x-4&quot;</span></span>
<span class="line"><span>&gt;&lt;/div&gt;</span></span></code></pre></div><h2 id="分析仪" tabindex="-1">分析仪 <a class="header-anchor" href="#分析仪" aria-label="Permalink to &quot;分析仪&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> windicss-analysis</span></span></code></pre></div><div class="language-package.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;analysis&quot;: &quot;windicss-analysis&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,72),l=[i];function t(c,o,d,r,h,u){return n(),a("div",null,l)}const v=s(e,[["render",t]]);export{b as __pageData,v as default};
