import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lxy Blog',
  description: 'Personal blog',
  lang: 'zh-CN',
  base:"/",
  themeConfig: {
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    search: {
      provider: 'local',
    },
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuguanjie0706/lxy-blog' },
    ],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '指南', link: '/guild/installation' },
      { text: '日常', link: '/daily/index' },
      // { text: '组件', link: '/examples/button/' },
      // { text: 'JS', link: '/javascript/' },
      { text: '样式', link: '/css/' },
      { text: '工程', link: '/Engineering/' },
      { text: '动画', link: '/animate/index' },
    ],

    sidebar: {
      '/daily/': [
        {
          text: '每日记录',
          link: '/daily/index',
          items: [
            {
              text: 'git',
              link: '/daily/git/index.md',
              collapsed: true,
              items: [
                {
                  text: '提交记录删除',
                  link: '/daily/git/reset.md',
                },
                {
                  text: '代码合并',
                  link: '/daily/git/rebase.md',
                },
              ],
            },
            {
              text: '运算',
              link: '/daily/operation/index.md',
            },
            {
              text: '数据',
              // link: '/daily/data/mockjs',
              items: [
                {
                  text: 'mockjs',
                  link: '/daily/data/mockjs/',
                },
              ],
            },
            {
              text: 'vscode',
              link: '/daily/vscode/',
            },
          ],
        },
      ],

      '/css/': [
        {
          text: 'Sass',
          items: [
            {
              text: '基础篇',
              link: '/css/sass/index',
            },
            {
              text: '进阶篇',
              link: '/css/sass/advanced',
            },
            {
              text: '案例篇',
              link: '/css/sass/example',
            },
          ],
        },
        // {
        //   text: '励志',
        //   items: [
        //     {
        //       text: '基础篇',
        //       link: '/css/base',
        //     },
        //   ],
        // },
        // {
        //   text: '趣谈',
        //   items: [
        //     {
        //       text: '记录奇技淫巧',
        //       link: '/css/interesting',
        //     },
        //   ],
        // },
      ],
      '/Interview/': [
        {
          text: '手写代码',
          items: [
            { text: 'call', link: '/handwriting/call' },
            { text: 'apply', link: '/handwriting/apply' },
            { text: 'bind', link: '/handwriting/bind' },
            { text: 'curry', link: '/handwriting/curry' },
            { text: '发布订阅', link: '/handwriting/eventEmitter' },
            { text: '观察者', link: '/handwriting/observer' },
            { text: '插入排序', link: '/handwriting/insertsort' },
          ],
        },
      ],
      '/Engineering/': [
        {
          text: '工程',
          items: [
            { text: '工程化', link: '/Engineering/index' },
            { text: '代码规范', link: '/Engineering/husky/index' },
            { text: 'pnpm', link: '/Engineering/pnpm/index' },
          ],
        },
      ],
      '/scaffold/': [
        {
          text: '脚手架',
          items: [{ text: '翻译', link: '/Engineering/scaffold/fy' }],
        },
      ],
      '/animate/': [
        {
          text: '动画',
          items: [
            {
              text: 'Animate.css',
              link: '/animate/animate.css.md',
            },
          ],
        },
      ],
    },
  },
});
