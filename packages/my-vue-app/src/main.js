import 'lxy-ui/dist/style.css';
import LxyUi from 'lxy-ui/src/components';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
const app = createApp(App);
console.log(LxyUi);
app.use(LxyUi);
app.mount('#app');
