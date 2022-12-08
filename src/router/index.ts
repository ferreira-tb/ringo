import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { createCharRoutes } from './create_char.js';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/create/char',
        component: () => import('@/views/CreateCharacter.vue'),
        children: createCharRoutes
    }
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});