// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './style.css';
// import elementplus from 'element-plus';
// import 'element-plus/dist/index.css';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // app.use(elementplus);
    // ...
  },
};
