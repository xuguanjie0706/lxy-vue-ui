import{_ as a,c as n,o as s,a4 as e}from"./chunks/framework.B3h3aO-h.js";const u=JSON.parse('{"title":"排序","description":"","frontmatter":{},"headers":[],"relativePath":"Interview/handwriting/insertsort.md","filePath":"Interview/handwriting/insertsort.md","lastUpdated":1716144871000}'),p={name:"Interview/handwriting/insertsort.md"},t=e(`<h1 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h1><h1 id="插入排序" tabindex="-1">插入排序 <a class="header-anchor" href="#插入排序" aria-label="Permalink to &quot;插入排序&quot;">​</a></h1><div class="language-插入排序 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">插入排序</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function insertSort(arr){</span></span>
<span class="line"><span>    let n = arr.length</span></span>
<span class="line"><span>    if(n&lt;1){</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let i =0;i&lt;arr.length;i++){</span></span>
<span class="line"><span>        let temp = arr[i]</span></span>
<span class="line"><span>        let j = i-1</span></span>
<span class="line"><span>        for(;j&gt;0;j--){</span></span>
<span class="line"><span>            if(arr[j]&gt;temp){</span></span>
<span class="line"><span>                arr[j+1]=arr[j]</span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        a[j+1] = temp</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),i=[t];function l(r,c,o,d,h,_){return s(),n("div",null,i)}const f=a(p,[["render",l]]);export{u as __pageData,f as default};
