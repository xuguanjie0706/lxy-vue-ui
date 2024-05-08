export default {
  title: 'LXY',
  description: 'Just playing around.',
  themeConfig: {
    // siteTitle: false,
    logo: '/logo.png',
    nav: [
      // { text: '指南', link: '/guild/installation' },
      { text: '日常', link: '/daily/' },
      { text: '组件', link: '/examples/button/' },
      { text: '布局', link: '/css/' },
      // { text: "SVG", link: "/svg/button/" },
      { text: '动画', link: '/animate/index' },
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
          items: [

            
          ],
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
      '/daily/': [
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
          text: '工程管理',
          // link:"/daily/pkg/",
          items: [
            {
              text: 'pnpm',
              link: '/daily/pkg/pnpm/index.md',
            },
            {
              text:"代码规范",
              link: '/daily/pkg/husky/index.md',
            }
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
