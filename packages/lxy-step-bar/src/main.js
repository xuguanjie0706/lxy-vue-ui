// let Toast = {}
// Toast.install = function (Vue, option = {}) {
//     console.log(option);
//     Vue.prototype.$toast =  ()=>{console.log(option.data)};
// }

// if (window.Vue) {
//     window.Vue.use(Toast,{data:"123"})
// }
// // export default Toast

import StepsBar from './components/StepsBar/index.vue';
import TurningStepsBar from './components/TurningStepsBar/index.vue';

const LxyStepBar = {};
export { StepsBar, TurningStepsBar };

LxyStepBar.install = function (Vue) {
  // const { prefix = 'lxy'} = option
  // Vue.component(`${prefix}-steps-bar`,StepsBar)
  Vue.component('steps-bar', StepsBar);
  Vue.component('turning-steps-bar', TurningStepsBar);
  // Vue.component(`${prefix}-turning-steps-bar`,TurningStepsBar)
};

if (window.Vue) {
  window.Vue.use(LxyStepBar);
}

export default LxyStepBar;
