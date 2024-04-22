export default {
  title: 'lxy-vue-ui',
  description: 'Just playing around.',
  themeConfig: {
    // siteTitle: false,
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '日常', link: '/daily/' },
      { text: '组件', link: '/examples/button/' },
      { text: '布局', link: '/css/' },
      // { text: "SVG", link: "/svg/button/" },
      { text: '动画', link: '/animate/index' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/geeksdidi' }],
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
            {
              text: 'xx',
              link: '/xx',
            },
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
          text:"媒体组件",
          items:[
            {
              text: '图片预览',
              link: '/examples/ImagePreview/',
            }
          ]
        }
      ],
      '/css/': [
        {
          text: '励志',
          items: [
            {
              text: '基础篇',
              link: '/css/index',
            },
          ],
        },
        {
          text: '趣谈',
          items: [
            {
              text: '记录奇淫巧技',
              link: '/css/interesting',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
      ],
      '/daily/': [
        {
          text: '日常',
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
