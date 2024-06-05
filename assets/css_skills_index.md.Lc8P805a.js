import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const e="/lxy-blog/assets/image.CtqDYu1C.png",g=JSON.parse('{"title":"你不知道的css技巧","description":"","frontmatter":{},"headers":[],"relativePath":"css/skills/index.md","filePath":"css/skills/index.md","lastUpdated":1717179833000}'),l={name:"css/skills/index.md"},t=p(`<h1 id="你不知道的css技巧" tabindex="-1">你不知道的css技巧 <a class="header-anchor" href="#你不知道的css技巧" aria-label="Permalink to &quot;你不知道的css技巧&quot;">​</a></h1><p>遇到问题只会绞尽脑汁，问题却很慢解决。为了加强对sass的使用，所有css均使用scss</p><h2 id="css实现字母大小写转换" tabindex="-1">css实现字母大小写转换 <a class="header-anchor" href="#css实现字母大小写转换" aria-label="Permalink to &quot;css实现字母大小写转换&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.capitalize{</span></span>
<span class="line"><span>    text-transform: capitalize;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.uppercase{</span></span>
<span class="line"><span>    text-transform: uppercase;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.lowercase{</span></span>
<span class="line"><span>    text-transform: lowercase;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="空元素设置默认值" tabindex="-1">空元素设置默认值 <a class="header-anchor" href="#空元素设置默认值" aria-label="Permalink to &quot;空元素设置默认值&quot;">​</a></h2><p>有时候你设置完css以后想要清空他的值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.bgcolor-red{</span></span>
<span class="line"><span>    background-color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.unset{</span></span>
<span class="line"><span>    background-color: unset;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="空元素设置默认值-1" tabindex="-1">空元素设置默认值 <a class="header-anchor" href="#空元素设置默认值-1" aria-label="Permalink to &quot;空元素设置默认值&quot;">​</a></h2><p>:empty选择器+伪类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@mixin empty($sign){</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    &amp;::before{</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        content: $sign;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box:empty {</span></span>
<span class="line"><span>    @include empty(&quot;-&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+e+'" alt="alt text"></p>',11),i=[t];function c(o,r,d,h,u,m){return n(),a("div",null,i)}const b=s(l,[["render",c]]);export{g as __pageData,b as default};
