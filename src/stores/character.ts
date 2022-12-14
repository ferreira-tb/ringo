import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

class Character {
    name: string | null = null;
    books: number[] = [1, 2, 3];

    readonly race: CharacterRace = {
        id: null,
        book: null
    };
    
    readonly class: CharacterClasses = new Map();
};

export const useCharacterStore = defineStore('character', () => {
    /** Indica qual personagem está ativo no momento. */
    const active = ref<number | null>(null);

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