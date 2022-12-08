<script setup lang="ts">
import { router } from '@/router/index.js';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character.js';
import { useGameStore } from '@/stores/game.js';
import StandardButton from '@/components/StandardButton.vue';

const charStore = useCharacterStore();
const { character } = storeToRefs(charStore);

const gameStore = useGameStore();
const { races, classes } = gameStore;

</script>

<template>
    <section>
        <p class="text-line">Muito bem, {{ character.name }}!</p>
        <p class="text-line">Agora escolha a raça e a classe.</p>
        <div class="input-area">
        
        </div>
        <div class="button-area">
            <StandardButton
                text="Continuar"
                @click.prevent="router.push({ name: 'create-char-step-3' })"
            />
            <StandardButton
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-1' })"
            />
        </div>
    </section>
</template>

<style scoped>
.input-area {
   text-align: center;
}
</style>