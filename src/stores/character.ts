import { defineStore } from 'pinia';
import { type Ref, ref, reactive } from 'vue';

type CharacterRace = {
    id: number | null
    book: number | null
}

type CharacterClass = {
    id: number | null
    level: number
    book: number | null
}

class Character {
    books: number[] = [1, 2, 3];
    name: string | null = null;

    readonly race: CharacterRace = {
        id: null,
        book: null
    };
    
    readonly class: CharacterClass = {
        id: null,
        level: 1,
        book: null,
    };
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