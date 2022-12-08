<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character.js';
import { useGameStore } from '@/stores/game.js';

const charStore = useCharacterStore();
const { character } = storeToRefs(charStore);

const gameStore = useGameStore();
const { races, classes } = gameStore;

</script>

<template>
    <p class="text-line">Muito bem, {{ character.name }}!</p>
    <p class="text-line">Agora escolha a raça e a classe.</p>

    <div class="input-area">
        
    </div>
</template>

<style scoped>
.input-area {
   text-align: center;
}
</style>