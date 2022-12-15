import { createRouter, createWebHistory } from 'vue-router';
import { createCharRoutes } from '@/router/create.js';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/characters',
            name: 'characters',
            component: () => import('@/views/CharacterList.vue')
        },
        {
            path: '/dice',
            name: 'dice',
            component: () => import('@/views/DiceRoller.vue')
        },
        {
            path: '/dice/history',
            name: 'dice-history',
            component: () => import('@/views/DiceHistory.vue')
        },
        {
            path: '/create/char',
            component: () => import('@/views/CreateCharacter.vue'),
            children: createCharRoutes
        }
    ]
});