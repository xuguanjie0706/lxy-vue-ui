import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const b=JSON.parse('{"title":"Sass 基础篇","description":"","frontmatter":{},"headers":[],"relativePath":"css/sass/index.md","filePath":"css/sass/index.md","lastUpdated":1717098301000}'),e={name:"css/sass/index.md"},l=p(`<h1 id="sass-基础篇" tabindex="-1">Sass 基础篇 <a class="header-anchor" href="#sass-基础篇" aria-label="Permalink to &quot;Sass 基础篇&quot;">​</a></h1><p>为了踏入写好css的队列</p><h2 id="变量" tabindex="-1">变量 $ <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量 $&quot;">​</a></h2><p>变量嵌套在字符串中，则需要写在 #{} 符号里面，</p><div class="language-变量声明 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">变量声明</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$color:#333;  // 全局变量</span></span>
<span class="line"><span>$color:#222 !default; // 全局默认变量 优先级最低</span></span>
<span class="line"><span>a{</span></span>
<span class="line"><span>    $color:#444; //局部变量，优先级最高</span></span>
<span class="line"><span>    color:$color</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$px:10px 20px; // 数组变量类似于set</span></span>
<span class="line"><span>$px1: 5px 10px, 20px 30px;</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>    margin:nth($px, 1) 0 0  nth($px, 2);    /* margin:10px 0 0 20px; */</span></span>
<span class="line"><span>    margin:nth($px1, 1) nth($px1, 2);    /* margin:5px 10px 20px 30px; */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>$headers:{h1:1em,h2:2em} //对象变量</span></span>
<span class="line"><span>@each $header, $size in $headings {</span></span>
<span class="line"><span>  #{$header} {</span></span>
<span class="line"><span>    font-size: $size;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="嵌套" tabindex="-1">嵌套 <a class="header-anchor" href="#嵌套" aria-label="Permalink to &quot;嵌套&quot;">​</a></h2><p>子元素在父元素样式的一对大括号{}内 如：ul { li { } },<code>&amp;</code>代表当前选择器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>div {</span></span>
<span class="line"><span>    color: #333;</span></span>
<span class="line"><span>    a {</span></span>
<span class="line"><span>       font-size:14px;</span></span>
<span class="line"><span>       &amp;:hover {</span></span>
<span class="line"><span>          text-decoration:underline;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       &amp;-red{</span></span>
<span class="line"><span>        color:red;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p>sass 中，选择器继承可以让选择器继承另一个选择器的所有样式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>h1 {</span></span>
<span class="line"><span>    font-size:20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* 占位符可以让你觉得像是变量结合,并不会生出css */</span></span>
<span class="line"><span>%h1 {</span></span>
<span class="line"><span>    font-weight:400;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>    @extend h1;</span></span>
<span class="line"><span>    @extend %h1;</span></span>
<span class="line"><span>    color:red;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="混合" tabindex="-1">混合 <a class="header-anchor" href="#混合" aria-label="Permalink to &quot;混合&quot;">​</a></h2><p>mixin相当于已经定义好了一类样式，可以在任何地方重复的使用它，就跟js中的函数一样。 @content向混合样式中导入内容。一定要先声明,后混合</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_znFl" id="tab-cCcgoYN" checked="checked"><label for="tab-cCcgoYN">含参数</label><input type="radio" name="group-_znFl" id="tab-mdxiw0M"><label for="tab-mdxiw0M">不含参数</label></div><div class="blocks"><div class="language-含参数 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">含参数</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义一个mixin</span></span>
<span class="line"><span>@mixin name ($width,$heigth) {</span></span>
<span class="line"><span>	color:red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>div{</span></span>
<span class="line"><span>    @include name(200px,200px);</span></span>
<span class="line"><span>    font-size:10px</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 经典场景</span></span>
<span class="line"><span>@mixin b($block) {</span></span>
<span class="line"><span>    $B: $namespace + &#39;-&#39; + $block !global;</span></span>
<span class="line"><span>    .#{$B} {</span></span>
<span class="line"><span>        @content;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-不含参数 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">不含参数</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义一个mixin</span></span>
<span class="line"><span>@mixin name {</span></span>
<span class="line"><span>	color:red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>a{</span></span>
<span class="line"><span>    @include name;</span></span>
<span class="line"><span>    font-size:10px</span></span>
<span class="line"><span>}</span></span></code></pre></div></div></div><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> @import “文件名”</span></span></code></pre></div><h2 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-label="Permalink to &quot;运算&quot;">​</a></h2><p>SassScript 支持数字的加减乘除、取整等运算 (+, -, *, /, %)，如果必要会在不同单位间转换值。</p>`,18),i=[l];function c(t,o,d,h,r,u){return n(),a("div",null,i)}const g=s(e,[["render",c]]);export{b as __pageData,g as default};
