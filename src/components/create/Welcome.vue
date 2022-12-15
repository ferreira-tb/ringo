<script setup lang="ts">
import { router } from '@/router/index.js';
import { useCharacterStore } from '@/stores/character.js';
import Button from '@/components/Button.vue';

const { character } = useCharacterStore();
</script>

<template>
    <section>
        <p class="text-line">Este guia te ajudará a criar o seu novo personagem, que poderá sempre ser usado na Ringo.</p>
        <p class="text-line">Antes de começar, digite o nome que deseja!</p>
        <div class="input-area">
            <input type="text" v-model.trim="character.name">
        </div>
        <div class="button-area">
            <Button
                text="Iniciar"
                :disabled="!character.name"
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