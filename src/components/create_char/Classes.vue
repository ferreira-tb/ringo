<script setup lang="ts">
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';
import { useCharacterStore } from '@/stores/character.js';
import { useGameStore } from '@/stores/game.js';
import { reactive, watchEffect } from 'vue';

const charStore = useCharacterStore();
const { character } = charStore;

const gameStore = useGameStore();
const { classes } = gameStore;

/** Lista de classes, onde o primeiro elemento é o código da classe, o segundo é o nome e o terceiro é o código do livro. */
const classList: [number, Classes, number][] = reactive([]);
character.books.forEach((book) => {
    const thisBookClassMap = classes.get(book);
    if (thisBookClassMap) {
        for (const [key, value] of thisBookClassMap.entries()) {
            classList.push([key, value, book]);
        };
    };
});

/** Mapa com as informações sobre cada classe. */
const classInfoMap = reactive(new Map<number, APICharacterClass>());

// Solicita à API os dados sobre a raça e ordena a lista de raças de acordo com o nome.
if (classList.length > 0) {
    classList.sort((a, b) => a[1].localeCompare(b[1], 'pt-br'));
};

// Remove a classe atual caso ela não esteja na lista.
// Isso geralmente acontece quando o usuário seleciona uma classe, volta à janela anterior e então altera os livros.
// Se durante a verificação ele encontrar a classe na lista, aproveita e atualiza o ID do livro onde a classe se encontra.
watchEffect(() => {
    const verifyList = (thisClass: [number, Classes, number]) => {
        if (character.class.id === thisClass[0]) {
            character.class.book = thisClass[2];
            return true;
        };

        return false;
    };

    if (!classList.some(verifyList)) {
        character.class.id = null;
        character.class.book = null;
    };
});
</script>

<template>
    <section>
        <p class="text-line">Classes descrevem a vocação de um personagem e suas aptidões especiais. Hora de escolher a sua.</p>
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">continuar</span>.</p>
        <p class="text-line small">A Ringo escolherá uma classe de acordo com sua raça.</p>
        
        <div class="classes-area">      
            <select v-model.number="character.class.id">
                <option v-for="thisClass of classList" :key="thisClass[0]" :value="thisClass[0]">
                    {{ thisClass[1] }}
                </option>
            </select>
        </div>

        <div class="button-area">
            <Button
                text="Continuar"
            />
            <Button
                text="Escolha pra mim"
            />
            <Button
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-2' })"
            />
        </div>
    </section>
</template>

<style scoped>
.classes-area {
    margin-top: 0.5em;
    text-align: center;
}
</style>