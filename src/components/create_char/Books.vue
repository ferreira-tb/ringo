<script setup lang="ts">
import { router } from '@/router/index.js';
import { useGameStore } from '@/stores/game.js';
import StandardButton from '@/components/StandardButton.vue';
import { useCharacterStore } from '@/stores/character.js';

const gameStore = useGameStore();
const { books } = gameStore;

const charStore = useCharacterStore();
const { character } = charStore;
</script>

<template>
    <p class="text-line">Quais livros você deseja usar para construir seu personagem?</p>
    <p class="text-line-small">Se não souber o que responder, apenas clique em <span class="bold">Continuar</span>.</p>

    <div class="books-area">
        <template v-for="book in books">
            <div>
                <input
                    type="checkbox"
                    name="books"
                    v-model="character.books"
                    :id="`book_${book[0]}`"
                    :value="book[0]"
                >
                <label :for="`book_${book[0]}`">{{ book[1] }}</label>
            </div>
        </template>
    </div>

    <div class="button-area">
        <StandardButton
            text="Continuar"
            :disabled="(character.books.length < 1)"
            @click.prevent="router.push({ name: 'create-char-step-2' })"
        />
    </div>
</template>

<style scoped>
.books-area label {
    margin-left: 0.5em;
}
</style>