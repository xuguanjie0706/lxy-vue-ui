import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const g=JSON.parse('{"title":"代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"Engineering/husky/index.md","filePath":"Engineering/husky/index.md","lastUpdated":1716016408000}'),e={name:"Engineering/husky/index.md"},i=p(`<h1 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h1><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h2><p>创建eslint.config.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i eslint@8</span></span>
<span class="line"><span>pnpm eslint --init</span></span></code></pre></div><h2 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;prettier&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i prettier prettier-plugin-organize-imports prettier-plugin-packagejson</span></span></code></pre></div><details class="details custom-block"><summary>展开查看 <code>.prettierrc.js</code>完整配置模版</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  printWidth: 80,</span></span>
<span class="line"><span>  singleQuote: true,</span></span>
<span class="line"><span>  trailingComma: &#39;all&#39;,</span></span>
<span class="line"><span>  proseWrap: &#39;never&#39;,</span></span>
<span class="line"><span>  overrides: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      files: &#39;.prettierrc&#39;,</span></span>
<span class="line"><span>      options: {</span></span>
<span class="line"><span>        parser: &#39;json&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    require.resolve(&#39;prettier-plugin-organize-imports&#39;),</span></span>
<span class="line"><span>    require.resolve(&#39;prettier-plugin-packagejson&#39;),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>};</span></span></code></pre></div></details><h2 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;husky&quot;">​</a></h2><p>快速得到一个.husky文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i lint-staged husky@8 -Dw</span></span>
<span class="line"><span>npx husky-init //初始化</span></span></code></pre></div><h3 id="pre-commit" tabindex="-1">pre-commit <a class="header-anchor" href="#pre-commit" aria-label="Permalink to &quot;pre-commit&quot;">​</a></h3><div class="language-pre-commit vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pre-commit</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pnpm lint-staged</span></span></code></pre></div><h3 id="你还需要让eslint和prettier不冲突" tabindex="-1">你还需要让eslint和prettier不冲突 <a class="header-anchor" href="#你还需要让eslint和prettier不冲突" aria-label="Permalink to &quot;你还需要让eslint和prettier不冲突&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i eslint-plugin-prettier eslint-config-prettier</span></span></code></pre></div><div class="language-eslint.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">eslint.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>extends: [</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language-package.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    &quot;package.json&quot;: [</span></span>
<span class="line"><span>      &quot;pnpm format&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;src/**/*.{ts,.tsx}&quot;: [</span></span>
<span class="line"><span>      &quot;pnpm lint&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="代码提交规范" tabindex="-1">代码提交规范 <a class="header-anchor" href="#代码提交规范" aria-label="Permalink to &quot;代码提交规范&quot;">​</a></h2><p>使用 commitizen + <a href="https://cz-git.qbb.sh/zh/config/" target="_blank" rel="noreferrer">cz-git</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm  i  commitizen cz-git -D</span></span></code></pre></div><details class="details custom-block"><summary>展开查看 <code> .commitlintrc.js</code>完整配置模版</summary><div class="language-.commitlintrc.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.commitlintrc.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    // @see: https://commitlint.js.org/#/reference-rules</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  prompt: {</span></span>
<span class="line"><span>    alias: { fd: &#39;docs: fix typos&#39; },</span></span>
<span class="line"><span>    messages: {</span></span>
<span class="line"><span>      type: &#39;选择你要提交的类型 :&#39;,</span></span>
<span class="line"><span>      scope: &#39;选择一个提交范围（可选）:&#39;,</span></span>
<span class="line"><span>      customScope: &#39;请输入自定义的提交范围 :&#39;,</span></span>
<span class="line"><span>      subject: &#39;填写简短精炼的变更描述 :\\n&#39;,</span></span>
<span class="line"><span>      body: &#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line"><span>      breaking: &#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line"><span>      footerPrefixesSelect: &#39;选择关联issue前缀（可选）:&#39;,</span></span>
<span class="line"><span>      customFooterPrefix: &#39;输入自定义issue前缀 :&#39;,</span></span>
<span class="line"><span>      footer: &#39;列举关联issue (可选) 例如: #31, #I3244 :\\n&#39;,</span></span>
<span class="line"><span>      confirmCommit: &#39;是否提交或修改commit ?&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    types: [</span></span>
<span class="line"><span>      { value: &#39;feat&#39;, name: &#39;feat:     新增功能 | A new feature&#39;,emoji: &#39;:sparkles:&#39; },</span></span>
<span class="line"><span>      { value: &#39;fix&#39;, name: &#39;fix:      修复缺陷 | A bug fix&#39; ,emoji: &#39;:bug:&#39;},</span></span>
<span class="line"><span>      { value: &#39;docs&#39;, name: &#39;docs:     文档更新 | Documentation only changes&#39; , emoji: &#39;:memo:&#39;},</span></span>
<span class="line"><span>      { value: &#39;style&#39;, name: &#39;style:    代码格式 | Changes that do not affect the meaning of the code&#39;, emoji: &#39;:lipstick:&#39; },</span></span>
<span class="line"><span>      { value: &#39;refactor&#39;, name: &#39;refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature&#39;,emoji: &#39;:recycle:&#39; },</span></span>
<span class="line"><span>      { value: &#39;perf&#39;, name: &#39;perf:     性能提升 | A code change that improves performance&#39;,emoji: &#39;:zap:&#39; },</span></span>
<span class="line"><span>      { value: &#39;test&#39;, name: &#39;test:     测试相关 | Adding missing tests or correcting existing tests&#39;,emoji: &#39;:white_check_mark:&#39; },</span></span>
<span class="line"><span>      { value: &#39;build&#39;, name: &#39;build:    构建相关 | Changes that affect the build system or external dependencies&#39; ,emoji: &#39;:package:&#39; },</span></span>
<span class="line"><span>      { value: &#39;ci&#39;, name: &#39;ci:       持续集成 | Changes to our CI configuration files and scripts&#39;,emoji: &#39;:ferris_wheel:&#39; },</span></span>
<span class="line"><span>      { value: &#39;revert&#39;, name: &#39;revert:   回退代码 | Revert to a commit&#39;,emoji: &#39;:hammer:&#39; },</span></span>
<span class="line"><span>      { value: &#39;chore&#39;, name: &#39;chore:    其他修改 | Other changes that do not modify src or test files&#39;, emoji: &#39;:rewind:&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    useEmoji: true,</span></span>
<span class="line"><span>    emojiAlign: &#39;center&#39;,</span></span>
<span class="line"><span>    useAI: false,</span></span>
<span class="line"><span>    aiNumber: 1,</span></span>
<span class="line"><span>    themeColorCode: &#39;&#39;,</span></span>
<span class="line"><span>    scopes: [],</span></span>
<span class="line"><span>    allowCustomScopes: true,</span></span>
<span class="line"><span>    allowEmptyScopes: true,</span></span>
<span class="line"><span>    customScopesAlign: &#39;bottom&#39;,</span></span>
<span class="line"><span>    customScopesAlias: &#39;custom&#39;,</span></span>
<span class="line"><span>    emptyScopesAlias: &#39;empty&#39;,</span></span>
<span class="line"><span>    upperCaseSubject: false,</span></span>
<span class="line"><span>    markBreakingChangeMode: false,</span></span>
<span class="line"><span>    allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span>    breaklineNumber: 100,</span></span>
<span class="line"><span>    breaklineChar: &#39;|&#39;,</span></span>
<span class="line"><span>    skipQuestions: [],</span></span>
<span class="line"><span>    issuePrefixes: [</span></span>
<span class="line"><span>      // 如果使用 gitee 作为开发管理</span></span>
<span class="line"><span>      { value: &#39;link&#39;, name: &#39;link:     链接 ISSUES 进行中&#39; },</span></span>
<span class="line"><span>      { value: &#39;closed&#39;, name: &#39;closed:   标记 ISSUES 已完成&#39; }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    customIssuePrefixAlign: &#39;top&#39;,</span></span>
<span class="line"><span>    emptyIssuePrefixAlias: &#39;skip&#39;,</span></span>
<span class="line"><span>    customIssuePrefixAlias: &#39;custom&#39;,</span></span>
<span class="line"><span>    allowCustomIssuePrefix: true,</span></span>
<span class="line"><span>    allowEmptyIssuePrefix: true,</span></span>
<span class="line"><span>    confirmColorize: true,</span></span>
<span class="line"><span>    scopeOverrides: undefined,</span></span>
<span class="line"><span>    defaultBody: &#39;&#39;,</span></span>
<span class="line"><span>    defaultIssues: &#39;&#39;,</span></span>
<span class="line"><span>    defaultScope: &#39;&#39;,</span></span>
<span class="line"><span>    defaultSubject: &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><div class="language-package.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &quot;script&quot;:{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;commit&quot;: &quot;git-cz&quot;,</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;config&quot;: {</span></span>
<span class="line"><span>    &quot;commitizen&quot;: {</span></span>
<span class="line"><span>      &quot;path&quot;: &quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h3 id="到此其实还是不够的-你没有办法强制别人都使用pnpm-commit-来提交" tabindex="-1">到此其实还是不够的，你没有办法强制别人都使用<code>pnpm commit</code> 来提交 <a class="header-anchor" href="#到此其实还是不够的-你没有办法强制别人都使用pnpm-commit-来提交" aria-label="Permalink to &quot;到此其实还是不够的，你没有办法强制别人都使用\`pnpm commit\` 来提交&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i @commitlint/config-conventional  @commitlint/cli -D</span></span></code></pre></div><div class="language-.commitlintrc.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.commitlintrc.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>extends: [&#39;@commitlint/config-conventional&#39;],</span></span></code></pre></div><div class="language-.husky/commit-msg vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.husky/commit-msg</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span>. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>red=$(tput setaf 1)</span></span>
<span class="line"><span>green=$(tput setaf 2)</span></span>
<span class="line"><span>reset=$(tput sgr0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\\n%s开始检测commit描述是否符合规范...%s\\n&quot; &quot;\${green}&quot; &quot;\${reset}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ! npx --no -- commitlint --edit $1 ; then</span></span>
<span class="line"><span>    echo &quot;《《《\${red}commit描述检测到异常，请按规范填写commit描述！\${reset}&quot;</span></span>
<span class="line"><span>    exit 1;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>printf &quot;%s恭喜你，非常规范！%s\\n&quot; &quot;\${green}&quot; &quot;\${reset}&quot;</span></span>
<span class="line"><span>exit</span></span></code></pre></div><p>如果你没有权限，请执行<code>chmod 777 .husky/*</code></p><h2 id="发版" tabindex="-1">发版 <a class="header-anchor" href="#发版" aria-label="Permalink to &quot;发版&quot;">​</a></h2><p>使用 <code>standard-version</code>发布版本并生成tag</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i standard-version -D</span></span></code></pre></div><div class="language-package.json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">package.json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &quot;script&quot;:{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;release&quot;: &quot;standard-version&quot;,</span></span>
<span class="line"><span> },</span></span></code></pre></div>`,31),t=[i];function l(c,o,r,u,d,h){return n(),a("div",null,t)}const v=s(e,[["render",l]]);export{g as __pageData,v as default};
