<script setup lang="ts">
import { reactive } from 'vue';
import { router } from '@/router/index.js';
import { useDiceStore } from '@/stores/dice.js';
import Button from '@/components/Button.vue';

const { diceCollection } = useDiceStore();

const buttonStyle = reactive({
    width: '85%',
    height: '2em'
});
</script>

<template>
    <main>
        <div class="menu-area">
            <Button
                text="Criar"
                :style="buttonStyle"
            />

            <Button
                text="Importar"
                :style="buttonStyle"
            />

            <Button
                text="Exportar"
                :style="buttonStyle"
            />

            <Button
                text="Voltar"
                :style="buttonStyle"
                @click="router.push({ name: 'dice' })"
            />
        </div>
        <div class="no-collection" v-if="diceCollection.size === 0">
            <p>Não há rolagens salvas.</p>
        </div>
    </main>
</template>

<style scoped>
.menu-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin-bottom: 1em;
}

.no-collection {
    text-align: center;
}
</style>