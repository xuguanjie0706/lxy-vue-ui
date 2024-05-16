export default {
  title: 'LXY',
  description: 'Just playing around.',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
    locales: {
      // root: {
      //   label: 'English',
      //   lang: 'en'
      // },
      root: {
        label: '中文',
        lang: 'zh',
      },
      // fr: {
      //   label: 'French',
      //   lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      //   link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
      // }
    },
    // siteTitle: false,
    logo: '/logo.png',
    nav: [
      // { text: '指南', link: '/guild/installation' },
      { text: '日常', link: '/daily/' },
      { text: '组件', link: '/examples/button/' },
      { text: 'JS', link: '/javascript/' },
      { text: '样式', link: '/css/' },
      // { text: "SVG", link: "/svg/button/" },
      { text: '动画', link: '/animate/index/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuguanjie0706/lxy-blog' },
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button按钮',
              link: '/examples/button/',
            },
            {
              text: 'StepBar进度条',
              link: '/examples/StepsBar/',
            },
            {
              text: 'TurningStepBar转弯进度条',
              link: '/examples/TurningStepBar/',
            },
            {
              text: 'colorPick',
              link: '/examples/colorPick/',
            },
          ],
        },
        {
          text: '媒体组件',
          items: [
            {
              text: '图片预览',
              link: '/examples/ImagePreview/',
            },
          ],
        },
        {
          text: '媒体组件',
          items: [
            {
              text: '大数据',
              link: '/examples/S2View/',
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
        {
          text: '励志',
          items: [
            {
              text: '基础篇',
              link: '/css/base',
            },
          ],
        },
        {
          text: '趣谈',
          items: [
            {
              text: '记录奇技淫巧',
              link: '/css/interesting',
            },
          ],
        },
      ],
      '/javascript/': [
        {
          text: 'Vue',
          link: '/javascript/Vue3/index',
          items: [
            {
              text: 'setup',
              link: '/javascript/Vue3/setup',
            },
          ],
        },
        {
          text: 'Regexp',
          link: '/javascript/Regexp/index',
          // items:[{
          //   text:'setup',
          //   link:'/javascript/Vue3/setup',
          // }]
        },
      ],
      '/daily/': [
        {
          text: 'vscode',
          link: '/daily/vscode/',
        },
        {
          text: 'vitePress',
          link: '/daily/vitepress/',
        },
        {
          text: 'scaffold',
          link: '/daily/scaffold/',
        },

        {
          text: '数据',
          link: '/daily/data/mockjs',
          items: [
            {
              text: 'mockjs',
              link: '/daily/data/mockjs/',
            },
          ],
        },
        {
          text: '工程管理',
          // link:"/daily/pkg",
          // activeMatch: ''
          // collapsed: true,
          items: [
            {
              text: 'pnpm',
              link: '/daily/pkg/pnpm/index.md',
            },
            {
              text: '代码规范',
              link: '/daily/pkg/husky/index.md',
            },
            {
              text: 'commander',
              link: '/daily/pkg/husky/commander/index.md',
            },
          ],
        },
        {
          text: 'git',
          link: '/daily/git/index.md',
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
          text: 'Antd库',
          link: '/daily/antd/',
          items: [
            {
              text: 's2',
              link: '/daily/antd/s2/',
            },
          ],
        },
        {
          text: '安全',
          // link:"/daily/pkg/",
          items: [
            {
              text: 'dompurify',
              link: '/daily/save/dompurify.md',
            },
          ],
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
};
