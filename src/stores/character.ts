import { defineStore } from 'pinia';
import { type Ref, ref, reactive } from 'vue';

class Character {
    books: number[] = [1, 2, 3];
    name: string | null = null;

    readonly race: CharacterRace = {
        id: null,
        book: null
    };
    
    readonly class: CharacterClasses = new Map();
};

export const useCharacterStore = defineStore('character', () => {
    const active: Ref<boolean> = ref(false);
    const character = reactive(new Character());

    function resetBooks() {
        character.books = [1, 2, 3];
    };

    return {
        active,
        character,
        resetBooks
    };
});