<script setup lang="ts">
import { router } from '@/router/index.js';
import { useBookStore } from '@/stores/game.js';
import { useCharacterStore } from '@/stores/character.js';
import Button from '@/components/Button.vue';

const { books } = useBookStore();
const { character, resetBooks } = useCharacterStore();
</script>

<template>
    <section>
        <p class="text-line">Quais livros você deseja usar para construir seu personagem?</p>
        <p class="text-line small">Se não souber o que responder, apenas clique em <span class="bold">continuar</span>.</p>
        <div class="books-area">
            <template v-for="book in books">
                <label class="checkbox-label">
                    <input
                        type="checkbox"
                        name="books"
                        v-model="character.books"
                        :id="`book_${book[0]}`"
                        :value="book[0]"
                    />
                    {{ book[1] }}
                </label>
            </template>
        </div>
        <div class="button-area">
            <Button
                text="Continuar"
                :disabled="(character.books.length < 1)"
                @click.prevent="router.push({ name: 'create-char-step-2' })"
            />
            <Button
                text="Padrão"
                @click.prevent="resetBooks"
            />
            <Button
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char' })"
            />
        </div>
    </section>
</template>