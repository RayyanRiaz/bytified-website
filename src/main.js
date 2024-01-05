import { createApp } from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';

const app = createApp(App);
app.use(VueLazyload);
app.mount('#app');
