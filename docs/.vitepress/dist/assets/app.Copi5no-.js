import{aO as o,aR as p,aS as u,aT as l,aU as c,aV as f,aW as d,aX as m,aY as h,aZ as A,a_ as g,a$ as _,m as P,ax as v,e as R,w as b,b0 as w,b1 as y,b2 as C,ah as E}from"./chunks/framework.0Ep84fQ5.js";import{R as T}from"./chunks/theme.E6NxZvFf.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return R(()=>{b(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),y(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=V(),a=O();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(S)}function V(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=_(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
