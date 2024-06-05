import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.B3h3aO-h.js";const k=JSON.parse('{"title":"TypeScript类型","description":"","frontmatter":{},"headers":[],"relativePath":"TypeScript/types.md","filePath":"TypeScript/types.md","lastUpdated":1717574325000}'),e={name:"TypeScript/types.md"},i=p(`<h1 id="typescript类型" tabindex="-1">TypeScript类型 <a class="header-anchor" href="#typescript类型" aria-label="Permalink to &quot;TypeScript类型&quot;">​</a></h1><h2 id="基本类型" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型" aria-label="Permalink to &quot;基本类型&quot;">​</a></h2><ul><li>boolean(布尔)，仅有2个值false和true</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const isDone:boolean = false</span></span></code></pre></div><ul><li>number(数字) 和javascript一样typescript里面的所有数字类型都是浮点类型。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const decLiteral: number = 6          //10进制</span></span>
<span class="line"><span>const hexLiteral: number = 0xf00d     //16进制</span></span>
<span class="line"><span>const banaryLiteral: number = 0b1010  //2进制</span></span>
<span class="line"><span>const ortalLiteral: number = 0o744    //8进制</span></span></code></pre></div><ul><li>string(字符串) 使用string 表示文本数据类型</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let name:string= &#39;bob&#39;</span></span>
<span class="line"><span>name = &quot;smith&quot;</span></span></code></pre></div><ul><li>array(数组) 有2种方式可以定义数组</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const list1:number[] = [1,2,3]      // 使用[]</span></span>
<span class="line"><span>const list2:Array&lt;number&gt; = [1,2,3] // 使用泛型</span></span></code></pre></div><ul><li>object(对象) 可以直接使用object声明，也可以分子段声明</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const good1:object={</span></span>
<span class="line"><span>  name:&quot;fish&quot;,</span></span>
<span class="line"><span>  price:1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const good2:{name:string,price:number}={</span></span>
<span class="line"><span>  name:&quot;fish2&quot;,</span></span>
<span class="line"><span>  price:2</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>null(空) 对应的类型也是null</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const foo:null = null</span></span></code></pre></div><ul><li>undefined(未定义) 对应的类型也是未定义</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const foo:undefined = undefined</span></span></code></pre></div><ul><li>symbol(标志) ES6新引入的类型，表示独一无二的值</li></ul><p>除此之外TypeScritpt 为了完善类型系统，来定义了以下基础类型。</p><ul><li>never(用不存在)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 返回never函数必须存在无法到达的终点,抛出错误</span></span>
<span class="line"><span>function error(message:string):never{</span></span>
<span class="line"><span>  throw new Error(message)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 死循环</span></span>
<span class="line"><span>function infiniteLoop():never{</span></span>
<span class="line"><span>  while(true){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//一个类型不可能即使数字又是布尔值</span></span>
<span class="line"><span>type Never = number &amp; boolean</span></span></code></pre></div><ul><li>any(任意类型)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let notSure:any = 4</span></span>
<span class="line"><span>notSuture = &quot;maybe a is instead&quot;</span></span>
<span class="line"><span>notSuture = false</span></span></code></pre></div><ul><li>void(没有任何类型) undefined 被赋值给类型为void的变量。当一个函数没有返回值时，其返回类型会被自动推断为void。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function foo():void{</span></span>
<span class="line"><span>  console.log(&quot;hello world&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const foo1:void = undefined</span></span></code></pre></div><ul><li>enum(枚举) 具有名字的常量集合,防止开发人员提供无效的值。枚举分数字枚举和字符串枚举实现原理:反向映射。</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lB7c3" id="tab-bbdc7C0" checked="checked"><label for="tab-bbdc7C0">ts代码</label><input type="radio" name="group-lB7c3" id="tab-kd7Y257"><label for="tab-kd7Y257">js代码</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Jan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Month;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Month[(Month[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Jan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Jan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})(Month </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Month </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}));</span></span></code></pre></div></div></div><ul><li>tuple(元组) 属于数组类型的一个变种，用来表示一个已知类型的数量和类型，元素的类型可以不同</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let foo :[number,string]</span></span>
<span class="line"><span>foo = [1,&#39;hello world&#39;] // 正确</span></span>
<span class="line"><span>foo = [&#39;hello world&#39;,1] // 错误</span></span></code></pre></div><ul><li>T(泛型) 泛型支持未来的数据类型及做一些数据推断。泛型在实际应用中及其广泛。例如泛型函数，泛型类型等。你以及将它理解成类型变量</li></ul><p>泛型函数：一个返回自身的函数，如果不用泛型必须指定出参和入参，灵活性差</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-b7aOt" id="tab-vMi_w9I" checked="checked"><label for="tab-vMi_w9I">bad Case</label><input type="radio" name="group-b7aOt" id="tab-pfqwO_x"><label for="tab-pfqwO_x">Good Case</label></div><div class="blocks"><div class="language-一个返回自身类型的函数 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">一个返回自身类型的函数</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function identity(arg:number):number{</span></span>
<span class="line"><span>  return arg</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-使用泛型返回自身类型的函数 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">使用泛型返回自身类型的函数</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function identity&lt;T&gt;(arg:T):T{</span></span>
<span class="line"><span>  return arg</span></span>
<span class="line"><span>}</span></span></code></pre></div></div></div><p>泛型类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Person&lt;T&gt;={</span></span>
<span class="line"><span>  name:string,</span></span>
<span class="line"><span>  skill: T</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="高级类型" tabindex="-1">高级类型 <a class="header-anchor" href="#高级类型" aria-label="Permalink to &quot;高级类型&quot;">​</a></h2><p>TypeScript 除了拥有基础类型，还有很多复杂的高级类型。高级类型是通过组合这些基础类型的到的，可以帮助开发人员解决工程中很多棘手的问题</p><h3 id="index-types-索引类型" tabindex="-1">Index Types (索引类型) <a class="header-anchor" href="#index-types-索引类型" aria-label="Permalink to &quot;Index Types (索引类型)&quot;">​</a></h3><p>对象类型的高级变种</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>interface Person{</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  age:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const person:Person ={</span></span>
<span class="line"><span>  name:&quot;jack&quot;,</span></span>
<span class="line"><span>  age:35</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// keyof T,检索类型查询符，keyof T 的结果为属性名的联合</span></span>
<span class="line"><span>type Keys = keyof Person // &#39;name&#39; | &#39;age&#39; , 结果根据Person动态生成</span></span>
<span class="line"><span>// T[K] ,索引反问操作符,返回对应类型的属性名类型</span></span>
<span class="line"><span>type Name = Person[&#39;name&#39;] // string 结果根据Person的name类型动态生成</span></span>
<span class="line"><span>// 综合索引类型查询符和索引访问操作符，pick函数会根据不同的入参，动态调整类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Pick&lt;T,K extends keyof T&gt;(o:T,name:K):T[K]{</span></span>
<span class="line"><span>  return o[name]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const name:string = pick(person,&#39;name&#39;)  //正确</span></span>
<span class="line"><span>const age:string =  pick(person,&#39;age&#39;)   //错误  person中age类型为number</span></span>
<span class="line"><span>const foo:any = pick(person,&quot;foo&quot;)       //错误  person中没有foo</span></span></code></pre></div><h3 id="intersection-types-交叉类型" tabindex="-1">Intersection Types(交叉类型) <a class="header-anchor" href="#intersection-types-交叉类型" aria-label="Permalink to &quot;Intersection Types(交叉类型)&quot;">​</a></h3><p>将多个类型合并成一个类型，用<code>&amp;</code>来分隔每个类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Person = {</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  age:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type Swim ={</span></span>
<span class="line"><span>  swim:()=&gt;void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Swimer = Person &amp; Swim</span></span>
<span class="line"><span>// type Swimer ={</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  age:number</span></span>
<span class="line"><span>  swim:()=&gt;void</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="union-types-联合类型" tabindex="-1">Union Types(联合类型) <a class="header-anchor" href="#union-types-联合类型" aria-label="Permalink to &quot;Union Types(联合类型)&quot;">​</a></h3><p>表示一个值可以是几种类型之一，用<code>|</code>来分隔每个类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Hunter = {</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  hunter:()=&gt;void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Spinners ={</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  spin:()=&gt;void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//假设有两种工人：猎人、纺织者</span></span>
<span class="line"><span>type Workers =  Hunter | Spinners</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getWorker:() =&gt; Workers = ()=&gt;({name:&quot;bob&quot;,spin:()=&gt;{}})</span></span>
<span class="line"><span>const worker:Workers = getWorker()</span></span>
<span class="line"><span>worker.name // 正确</span></span>
<span class="line"><span>worker.spin // 错误，workder可能是猎人没有spin能力</span></span></code></pre></div><h3 id="mappod-types-映射类型" tabindex="-1">Mappod Types(映射类型) <a class="header-anchor" href="#mappod-types-映射类型" aria-label="Permalink to &quot;Mappod Types(映射类型)&quot;">​</a></h3><p>通过转换旧类型中的每一个属性来创建新类型的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//将所有属性变成只读</span></span>
<span class="line"><span>type Readonly&lt;T&gt; ={</span></span>
<span class="line"><span>  readonly [P in keyof T]:T[P]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//将所有属性变成可选</span></span>
<span class="line"><span>type Partial&lt;T&gt; = {</span></span>
<span class="line"><span>  [P in keyof T]?: T[P]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Person={</span></span>
<span class="line"><span>  name:string</span></span>
<span class="line"><span>  age:number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type ReadonlyPerson = Readonly&lt;Person&gt;</span></span>
<span class="line"><span>type PartialPerson = Partial&lt;Person&gt;</span></span></code></pre></div><p>除了以上这些高级类型，开源社区还有一个名为utility-types的TypeScript类型操作工作集</p><h2 id="常用类型" tabindex="-1">常用类型 <a class="header-anchor" href="#常用类型" aria-label="Permalink to &quot;常用类型&quot;">​</a></h2><h3 id="record" tabindex="-1">Record <a class="header-anchor" href="#record" aria-label="Permalink to &quot;Record&quot;">​</a></h3><p><code>构造一个具有类型T的一组属性K的类型</code> Construct a type with a set of properties K of type T</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Pick&lt;T, K extends keyof T&gt; = {</span></span>
<span class="line"><span>    [P in K]: T[P];</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="pick" tabindex="-1">Pick <a class="header-anchor" href="#pick" aria-label="Permalink to &quot;Pick&quot;">​</a></h3><p><code>从T中，选择一组键在并集K中的属性</code> From T, pick a set of properties whose keys are in the union K</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Record&lt;K extends keyof any, T&gt; = {</span></span>
<span class="line"><span>    [P in K]: T;</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="omit" tabindex="-1">Omit <a class="header-anchor" href="#omit" aria-label="Permalink to &quot;Omit&quot;">​</a></h3><p><code>构造一个性质为T的类型，但类型K中的性质除外。</code> Construct a type with the properties of T except for those in type K.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;</span></span></code></pre></div>`,58),l=[i];function t(o,c,d,r,h,u){return n(),a("div",null,l)}const b=s(e,[["render",t]]);export{k as __pageData,b as default};
