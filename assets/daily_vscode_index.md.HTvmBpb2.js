import{_ as t,c as e,o as a,a4 as l}from"./chunks/framework.B3h3aO-h.js";const E=JSON.parse('{"title":"VsCode 技巧","description":"","frontmatter":{},"headers":[],"relativePath":"daily/vscode/index.md","filePath":"daily/vscode/index.md","lastUpdated":1716146843000}'),d={name:"daily/vscode/index.md"},s=l(`<h1 id="vscode-技巧" tabindex="-1">VsCode 技巧 <a class="header-anchor" href="#vscode-技巧" aria-label="Permalink to &quot;VsCode 技巧&quot;">​</a></h1><h2 id="snippets" tabindex="-1">Snippets <a class="header-anchor" href="#snippets" aria-label="Permalink to &quot;Snippets&quot;">​</a></h2><p>用户代码片段</p><h2 id="snippet-语法" tabindex="-1">Snippet 语法 <a class="header-anchor" href="#snippet-语法" aria-label="Permalink to &quot;Snippet 语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;console&quot;: {</span></span>
<span class="line"><span>    &quot;scope&quot;: &quot;javascript,typescript&quot;,</span></span>
<span class="line"><span>    &quot;prefix&quot;: &quot;log&quot;,</span></span>
<span class="line"><span>    &quot;body&quot;: [</span></span>
<span class="line"><span>        &quot;console.log(&#39;$1&#39;);&quot;,</span></span>
<span class="line"><span>        &quot;$2&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;description&quot;: &quot;console&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>console 对应代码片段名称（触发代码片段的时候会展示匹配到的代码片段名称）。</li><li>prefix 对应触发代码片段的字符。</li><li>scope 代表文件类型</li><li>body 对应代码片段内容，可以是字符串，也可以为数组，若为数组每个元素都做为单独的一行插入。</li><li>description 对应代码片段描述。</li></ul><h2 id="占位符" tabindex="-1">占位符 $ <a class="header-anchor" href="#占位符" aria-label="Permalink to &quot;占位符 $&quot;">​</a></h2><ul><li>{$1},{$2} 代表多个变量,变量可以多写几个，会同时替换，使用<code>tab</code>切换到下一个变量</li><li>{$0} 用于设置最终光标的位置，设置了 $0 之后，再往后设置其他占位符则不会生效， $0 终止了 TAB键 的光标跳转操作。</li><li>{$1|Boolean,Number}占位内容的可选项</li><li>占位内容支持嵌套，比如 \${1:another \${2:placeholder}}。</li></ul><h2 id="文档变量" tabindex="-1">文档变量 <a class="header-anchor" href="#文档变量" aria-label="Permalink to &quot;文档变量&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">变量</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:left;">TM_SELECTED_TEXT</td><td>当前选择的文本或空字符串</td></tr><tr><td style="text-align:left;">TM_CURRENT_LINE</td><td>当前行的内容</td></tr><tr><td style="text-align:left;">TM_CURRENT_WORD</td><td>光标下单词的内容或空字符串</td></tr><tr><td style="text-align:left;">TM_LINE_INDEX</td><td>基于零索引的行号</td></tr><tr><td style="text-align:left;">TM_LINE_NUMBER</td><td>基于一个索引的行号</td></tr><tr><td style="text-align:left;">TM_FILENAME</td><td>当前文档的文件名</td></tr><tr><td style="text-align:left;">TM_FILENAME_BASE</td><td>不带扩展名的当前文档的文件名</td></tr><tr><td style="text-align:left;">TM_DIRECTORY</td><td>当前文档的目录</td></tr><tr><td style="text-align:left;">TM_FILEPATH</td><td>当前文档的完整文件路径</td></tr><tr><td style="text-align:left;">RELATIVE_FILEPATH</td><td>当前文档的相对（相对于打开的工作区或文件夹）文件路径</td></tr><tr><td style="text-align:left;">CLIPBOARD</td><td>剪贴板的内容</td></tr><tr><td style="text-align:left;">WORKSPACE_NAME</td><td>打开的工作区或文件夹的名称</td></tr><tr><td style="text-align:left;">WORKSPACE_FOLDER</td><td>打开的工作区或文件夹的路径</td></tr><tr><td style="text-align:left;">CURSOR_INDEX</td><td>基于零索引的光标编号</td></tr><tr><td style="text-align:left;">CURSOR_NUMBER</td><td>基于一个索引的光标编号</td></tr></tbody></table><h2 id="时间变量" tabindex="-1">时间变量 <a class="header-anchor" href="#时间变量" aria-label="Permalink to &quot;时间变量&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">变量</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:left;">CURRENT_YEAR</td><td>当前年份</td></tr><tr><td style="text-align:left;">CURRENT_YEAR_SHORT</td><td>当前年份的最后两位数</td></tr><tr><td style="text-align:left;">CURRENT_MONTH</td><td>月份为两位数（例如&#39;02&#39;）</td></tr><tr><td style="text-align:left;">CURRENT_MONTH_NAME</td><td>月份的全名（例如&#39;June&#39;）（中文语言对应六月）</td></tr><tr><td style="text-align:left;">CURRENT_MONTH_NAME_SHORT</td><td>月份的简称（例如&#39;Jun&#39;）（中文语言对应是6月）</td></tr><tr><td style="text-align:left;">CURRENT_DATE</td><td>这个月的哪一天</td></tr><tr><td style="text-align:left;">CURRENT_DAY_NAME</td><td>当天是星期几（例如&#39;星期一&#39;）</td></tr><tr><td style="text-align:left;">CURRENT_DAY_NAME_SHORT</td><td>当天是星期几的简称（例如&#39;Mon&#39;）（中文对应周一）</td></tr><tr><td style="text-align:left;">CURRENT_HOUR</td><td>24小时时钟格式的当前小时</td></tr><tr><td style="text-align:left;">CURRENT_MINUTE</td><td>当前分CURRENT_SECOND当前秒</td></tr></tbody></table><h2 id="要插入行或块注释" tabindex="-1">要插入行或块注释 <a class="header-anchor" href="#要插入行或块注释" aria-label="Permalink to &quot;要插入行或块注释&quot;">​</a></h2><p>根据当前语言生成 |变量| 含义 |<br> |:--|--| |BLOCK_COMMENT_START |vue格式/_| |BLOCK_COMMENT_END |vue格式 _/| |LINE_COMMENT |vue格式 //|</p>`,14),n=[s];function i(r,o,p,_,c,h){return a(),e("div",null,n)}const T=t(d,[["render",i]]);export{E as __pageData,T as default};