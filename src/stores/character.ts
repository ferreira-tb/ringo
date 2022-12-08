import { defineStore } from 'pinia';
import { type Ref, ref, reactive } from 'vue';

class Character {
    readonly books: number[] = [1, 2, 3];

    name: string = '';
    race: Races | null = null;
    class: Classes | null = null;
};

export const useCharacterStore = defineStore('character', () => {
    const active: Ref<boolean> = ref(false);
    const character = reactive(new Character());

    return { active, character };
});