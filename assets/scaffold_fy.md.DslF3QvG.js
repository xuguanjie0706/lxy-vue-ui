import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.B3h3aO-h.js";const h=JSON.parse('{"title":"快速实现一个翻译的脚手架","description":"","frontmatter":{},"headers":[],"relativePath":"scaffold/fy.md","filePath":"scaffold/fy.md","lastUpdated":1716031141000}'),e={name:"scaffold/fy.md"},l=p(`<h1 id="快速实现一个翻译的脚手架" tabindex="-1">快速实现一个翻译的脚手架 <a class="header-anchor" href="#快速实现一个翻译的脚手架" aria-label="Permalink to &quot;快速实现一个翻译的脚手架&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm init</span></span>
<span class="line"><span>pnpm i axios md5  minimist zx</span></span></code></pre></div><div class="language-index.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">index.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { chalk  } from &#39;zx&#39;;</span></span>
<span class="line"><span>import minimist from &#39;minimist&#39;</span></span>
<span class="line"><span>import fy from &quot;./fy.js&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const args =  minimist(process.argv.slice(2));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const {l:type, _:query}= args</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    const data = await fy(query.join(&quot; &quot;),type)</span></span>
<span class="line"><span>    console.log(chalk.green(data))</span></span>
<span class="line"><span>} catch (error) {</span></span>
<span class="line"><span>    console.log(chalk.blue(error))</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-fy.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">fy.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;;</span></span>
<span class="line"><span>import md5 from &#39;md5&#39;;</span></span>
<span class="line"><span>import config from &#39;../config.json&#39; assert { type: &#39;json&#39; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function fy(keywords, type = &#39;zh&#39;) {</span></span>
<span class="line"><span>  if (!config?.fyappid || !config?.fykey) {</span></span>
<span class="line"><span>    throw new Error(&#39;please set config fyappid or fykey&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const data = {</span></span>
<span class="line"><span>    appid: config.fyappid,</span></span>
<span class="line"><span>    q: keywords,</span></span>
<span class="line"><span>    salt: &#39;1435660288&#39;,</span></span>
<span class="line"><span>    key: config.fykey,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  const str = Object.values(data).reduce((x, y) =&gt; x + y, &#39;&#39;);</span></span>
<span class="line"><span>  const sign = md5(str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const res = await axios(</span></span>
<span class="line"><span>    &#39;https://fanyi-api.baidu.com/api/trans/vip/translate&#39;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      method: &#39;post&#39;,</span></span>
<span class="line"><span>      params: {</span></span>
<span class="line"><span>        q: keywords,</span></span>
<span class="line"><span>        from: &#39;auto&#39;,</span></span>
<span class="line"><span>        to: type,</span></span>
<span class="line"><span>        appid: data.appid,</span></span>
<span class="line"><span>        salt: data.salt,</span></span>
<span class="line"><span>        sign,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  if (res.status === 200) {</span></span>
<span class="line"><span>    return res.data[&#39;trans_result&#39;][0].dst;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default fy;</span></span></code></pre></div>`,4),i=[l];function t(c,o,r,d,f,m){return a(),n("div",null,i)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
