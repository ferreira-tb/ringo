import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import CreateCharacter from '@/views/CreateCharacter.vue';
import { createCharRoutes } from './create_char.js';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => Home
    },
    {
        path: '/create/char',
        component: () => CreateCharacter,
        children: createCharRoutes
    }
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});