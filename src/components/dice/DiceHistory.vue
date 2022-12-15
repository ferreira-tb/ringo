<script setup lang="ts">
import type { DiceRoll } from '@/objects.js';

defineProps<{
    diceHistory: DiceRoll[]
}>();

function parseDate(rawDate: number) {
    const date = new Date(rawDate);
    return `${date.toLocaleTimeString('pt-br')}`;
};
</script>

<template>
    <section class="history-area">
        <h2>Histórico</h2>
        <TransitionGroup name="list">
            <div v-for="dice of diceHistory" :key="dice.date">
                <span>{{ `${dice.text} = ${dice.finalResult}` }}</span>
                <span class="small">{{ parseDate(dice.date) }}</span>
            </div>
        </TransitionGroup>
    </section>
</template>

<style scoped>
.history-area h2 {
    margin-top: 0.5em;
    text-align: center;
}

.history-area div {
    display: flex;
    align-content: center;
    justify-content: space-between;

    margin-left: 0.5em;
    margin-right: 0.5em;
}
</style>