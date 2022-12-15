<script setup lang="ts">
import type { DiceRoll } from '@/objects.js';

defineProps<{
    diceHistory: DiceRoll[]
}>();
</script>

<template>
    <section class="history-area">
        <h2>Histórico</h2>
        <TransitionGroup name="list">
            <div v-for="dice of diceHistory" :key="dice.date">
                <span>{{ `${dice.text} = ${dice.finalResult}` }}</span>
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
    margin-left: 0.5em;
    margin-right: 0.5em;
}
</style>