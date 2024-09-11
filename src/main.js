import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Clipboard from 'v-clipboard';
import { vTooltip } from 'floating-vue';
import Toast from 'vue-toastification';

import './assets/main.css';
import 'vue-toastification/dist/index.css';
import 'floating-vue/dist/style.css';

import App from './App.vue';
import router from './router';

import MdiIcon from './components/SvgMdiIcon.vue';

const app = createApp(App);

app.use(createPinia());

app.use(Clipboard);
app.use(Toast, { timeout: 3000 });
app.use(router);

app.directive('tooltip', vTooltip);

app.component('MdiIcon', MdiIcon);

app.mount('#app');
