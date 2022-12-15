import type { RouteRecordRaw } from 'vue-router';

export const createCharRoutes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'create-char',
        component: () => import('@/components/create/Welcome.vue')
    },
    {
        path: 's1',
        name: 'create-char-step-1',
        component: () => import('@/components/create/Books.vue')
    },
    {
        path: 's2',
        name: 'create-char-step-2',
        component: () => import('@/components/create/Races.vue')
    },
    {
        path: 's3',
        name: 'create-char-step-3',
        component: () => import('@/components/create/Classes.vue')
    }
];