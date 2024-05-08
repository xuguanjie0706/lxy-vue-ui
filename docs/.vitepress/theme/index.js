import elementplus from 'element-plus';
import 'element-plus/dist/index.css';
import DefaultTheme from 'vitepress/theme';
// import TurningStepsBar from "/components/TurningStepsBar"
import '../public/base.css';
console.log(DefaultTheme);
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(elementplus);
    // app.component("TurningStepsBar",TurningStepsBar)
  },
};
