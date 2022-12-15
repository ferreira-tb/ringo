<script setup lang="ts">
import { computed, reactive, readonly, ref } from 'vue';
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';

const buttonStyle = reactive({
    width: '80%'
});

const diceTypes = readonly([2, 4, 6, 8, 10, 12, 20, 100]);
const chosenDice = ref<number | null>(null);
const diceAmount = ref<number>(1);
const modifier = ref<number>(0);

const roll = computed(() => {
    if (chosenDice.value === null) return null;

    let rollText = `${diceAmount.value}D${chosenDice.value}`;
    if (modifier.value > 0) rollText += ` + ${modifier.value}`;
    return rollText;
});
</script>

<template>
    <main>
        <div class="result-area">
            <span v-if="roll">{{ roll }}</span>
            <Button class="roll-button" text="Rolar" />
        </div>

        <div class="mod-area">
            
        </div>

        <div class="dice-area">
            <Button
                v-for="(dice, index) of diceTypes"
                :style="buttonStyle"
                :text="`D${dice}`"
                :key="index"
                @click="chosenDice = dice"
            />

            <Button
                text="Histórico"
                :style="buttonStyle"
                @click="router.push({ name: 'dice-history' })"
            />
        </div>

        <div class="options-area">
            <h2>Opções</h2>
        </div>
    </main>
</template>

<style scoped>
.result-area {
    display: flex;
    align-content: center;

    height: 4em;
    border: 2px var(--color-border) solid;
}

.result-area span {
    font-size: 2.5em;
    text-align: center;
    width: 100%;
    height: 100%;
}

.roll-button {
    height: 3.5em;
    padding: 1em;
    width: 3em;
}

.dice-area {
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}

.options-area {
    margin-top: 0.5em;
    text-align: center;
}
</style>