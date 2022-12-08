import type { RouteRecordRaw } from 'vue-router';
import Welcome from '@/components/create_char/Welcome.vue';
import Books from '@/components/create_char/Books.vue';
import RaceAndClass from '@/components/create_char/RaceAndClass.vue';

export const createCharRoutes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'create-char',
        component: () => Welcome
    },
    {
        path: 's1',
        name: 'create-char-step-1',
        component: () => Books
    },
    {
        path: 's2',
        name: 'create-char-step-2',
        component: () => RaceAndClass
    }
];