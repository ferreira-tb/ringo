import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '@/router/index.js';
import App from '@/App.vue';

const app = createApp(App);
const pinia = createPinia();

// Plugins.
app.use(pinia);
app.use(router);

// Diretivas.
app.directive('focus', {
    mounted: (el) => {
        if (el instanceof HTMLInputElement) el.focus();
    }
});

app.mount('#app');