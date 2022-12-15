<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '@/stores/character';
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';

const charStore = useCharacterStore();
const { active } = storeToRefs(charStore);
</script>

<template>
    <main>
        <template v-if="active === null">
            <p class="message">Não há personagem ativo no momento.</p>
            <p class="message">Crie um novo ou carregue uma ficha salva.</p>
            <div class="button-area">
                <Button text="Criar personagem" @click.prevent="router.push({ name: 'create-char' })" />
                <Button text="Carregar ficha" />
            </div>
        </template>
    </main>
</template>

<style scoped>
.message {
    text-align: center;
}
</style>