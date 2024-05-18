import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lxy Blog',
  description: 'Personal blog',
  srcDir: './docs',
  themeConfig: {
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
      { text: '日常', link: '/daily/' },
      { text: '组件', link: '/examples/button/' },
      { text: 'JS', link: '/javascript/' },
      { text: '样式', link: '/css/' },
      { text: '工程', link: '/Engineering/' },
      { text: '动画', link: '/animate/index' },
    ],

    sidebar: [
      {
        text: '每日记录',
        items: [{ text: 'daily', link: '/Engineering/pnpm' }],
      },
      {
        text: '工程',
        items: [
          { text: '工程化', link: '/Engineering/index' },
          { text: '代码规范', link: '/Engineering/husky/index' },
          { text: 'pnpm', link: '/Engineering/pnpm/index' },
        ],
      },
      {
        text: '脚手架',
        items: [
          { text: '翻译', link: '/Engineering/scaffold/fy' },
        ],
      },
    ],
  },
});
