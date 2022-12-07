<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '@/stores/player';
import StandardButton from '@/components/StandardButton.vue';
import CharacterSheet from '@/components/CharacterSheet.vue';

const store = usePlayerStore();
const { active } = storeToRefs(store);

</script>

<template>
    <template v-if="!active">
        <p class="home-message">Não há personagem ativo no momento.</p>
        <p class="home-message">Crie um novo ou carregue uma ficha salva.</p>
        <div class="button-area">
            <StandardButton text="Criar personagem"/>
            <StandardButton text="Carregar ficha"/>
        </div>
    </template>
    <CharacterSheet v-else />
</template>

<style scoped>
.home-message {
    text-align: center;
}
.button-area {
    margin-top: 0.5em;
    text-align: center;
}
</style>