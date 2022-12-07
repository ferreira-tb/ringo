import type { RouteRecordRaw } from 'vue-router';
import Welcome from '@/components/create_char/Welcome.vue';

export const createCharRoutes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'create-char',
        component: Welcome
    }
];