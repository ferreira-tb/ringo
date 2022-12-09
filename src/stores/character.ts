import { defineStore } from 'pinia';
import { type Ref, ref, reactive } from 'vue';

type ClassAndRace = {
    id: number | null
    book: number | null
}

class Character {
    books: number[] = [1, 2, 3];
    name: string | null = null;

    readonly race: ClassAndRace = {
        id: null,
        book: null
    };
    
    readonly class: ClassAndRace = {
        id: null,
        book: null
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