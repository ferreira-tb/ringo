import { defineStore } from 'pinia';
import { type Ref, ref, reactive } from 'vue';

class Character {
    name: string | null = null;
};

export const useCharacterStore = defineStore('character', () => {
    const active: Ref<boolean> = ref(false);
    const character = reactive(new Character());

    return { active, character };
});