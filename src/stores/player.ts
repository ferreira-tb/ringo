import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';

export const usePlayerStore = defineStore('player', () => {
    const active: Ref<boolean> = ref(false);

    return { active };
});