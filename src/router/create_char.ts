import type { RouteRecordRaw } from 'vue-router';

export const createCharRoutes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'create-char',
        component: () => import('@/components/create_char/Welcome.vue')
    },
    {
        path: 's1',
        name: 'create-char-step-1',
        component: () => import('@/components/create_char/Books.vue')
    },
    {
        path: 's2',
        name: 'create-char-step-2',
        component: () => import('@/components/create_char/RaceAndClass.vue')
    }
];