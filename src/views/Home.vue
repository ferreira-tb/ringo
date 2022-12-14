<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character';
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';
import CharacterSheet from '@/components/CharacterSheet.vue';

const charStore = useCharacterStore();
const { active } = storeToRefs(charStore);
</script>

<template>
    <main>
        <template v-if="active === null">
            <p class="home-message">Não há personagem ativo no momento.</p>
            <p class="home-message">Crie um novo ou carregue uma ficha salva.</p>
            <div class="button-area">
                <Button text="Criar personagem" @click.prevent="router.push({ name: 'create-char' })" />
                <Button text="Carregar ficha" />
            </div>
        </template>
        <CharacterSheet v-else />
    </main>
</template>

<style scoped>
.home-message {
    text-align: center;
}
</style>