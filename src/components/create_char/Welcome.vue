<script setup lang="ts">
import { router } from '@/router/index.js';
import StandardButton from '@/components/StandardButton.vue';
import { useCharacterStore } from '@/stores/character';
import { storeToRefs } from 'pinia';
import { type Ref, ref } from 'vue';

const store = useCharacterStore();
const { character } = storeToRefs(store);

const charName: Ref<string> = ref('');

function saveNameAndContinue() {
    character.value.name = charName.value;
    // router.push({ name: 'create-char' });
}
</script>

<template>
    <p>Este guia te ajudará a criar o seu novo personagem, que poderá sempre ser usado na Ringo.</p>
    <p>Antes de começar, digite o nome que deseja!</p>

    <div class="input-area">
        <input type="text" v-model.trim="charName">
    </div>

    <div class="button-area">
        <StandardButton
            text="Iniciar"
            :disabled="(charName.length < 1)"
            @click.prevent="saveNameAndContinue"
        />
    </div>
</template>

<style scoped>
p {
    text-align: center;
    margin-left: 0.2em;
    margin-right: 0.2em;
    margin-bottom: 0.3em;
}

.input-area {
   text-align: center;
}
</style>