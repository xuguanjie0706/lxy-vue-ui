// let Toast = {}
// Toast.install = function (Vue, option = {}) {
//     console.log(option);
//     Vue.prototype.$toast =  ()=>{console.log(option.data)};
// }

// if (window.Vue) {
//     window.Vue.use(Toast,{data:"123"})
// }
// // export default Toast

import ImagePreview from './components/ImagePreview/index.vue';

const LxyImagePreview = {};
export { ImagePreview };

LxyImagePreview.install = function (Vue) {
  Vue.component('image-preview', ImagePreview);
};

if (window.Vue) {
  window.Vue.use(LxyImagePreview);
}

export default LxyImagePreview;
