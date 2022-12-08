<script setup lang="ts">
import { router } from '@/router/index.js';
import StandardButton from '@/components/StandardButton.vue';
import { useCharacterStore } from '@/stores/character';

const charStore = useCharacterStore();
const { character } = charStore;
</script>

<template>
    <section>
        <p class="text-line">Este guia te ajudará a criar o seu novo personagem, que poderá sempre ser usado na Ringo.</p>
        <p class="text-line">Antes de começar, digite o nome que deseja!</p>
        <div class="input-area">
            <input type="text" v-model.trim="character.name">
        </div>
        <div class="button-area">
            <StandardButton
                text="Iniciar"
                :disabled="(character.name.length < 1)"
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