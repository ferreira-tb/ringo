<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDiceStore } from '@/stores/dice.js';
import type { DiceRoll } from '@/objects.js';

const diceStore = useDiceStore();
const { diceHistory } = diceStore;
const { chosenDice, diceAmount, modifier, rollType } = storeToRefs(diceStore);

function applyConfig(diceRoll: DiceRoll) {
    chosenDice.value = diceRoll.dice;
    diceAmount.value = diceRoll.amount;
    modifier.value = diceRoll.modToSum;
    rollType.value = diceRoll.type;
};

function parseDate(rawDate: number) {
    const date = new Date(rawDate);
    return `${date.toLocaleTimeString('pt-br')}`;
};
</script>

<template>
    <section class="history-area">
        <h2>Histórico</h2>
        <TransitionGroup name="list">
            <div
                v-for="dice of diceHistory"
                :key="dice.date"
                @click="applyConfig(dice)"
            >
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

    cursor: pointer;
}
</style>