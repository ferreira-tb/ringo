<script setup lang="ts">
import { computed } from 'vue';
import type { DiceRoll, EachDiceRoll } from '@/objects.js';
import BlurBackground from '@/components/BlurBackground.vue';
import Button from '@/components/Button.vue';

const props = defineProps<{
    rollResult: DiceRoll
}>();

defineEmits<{
    (e: 'hideResult'): void
    (e: 'rollAgain'): void
}>();

const resultClass = computed(() => ({
    bold: true,
    'green-text': props.rollResult.finalResult === props.rollResult.maxValue,
    'red-text': props.rollResult.finalResult === props.rollResult.minValue
}));

function setRollClass(roll: EachDiceRoll) {
    return {
        'green-text': roll.value === props.rollResult.dice,
        'red-text': roll.value === 1
    };
};
</script>

<template>
    <BlurBackground @close-modal="$emit('hideResult')" />

    <div class="result-modal">
        <div class="result-area">
            <div>{{ rollResult.text }}</div>

            <div class="final-result" :class="resultClass">
                {{ rollResult.finalResult }}
            </div>

            <div class="rolls">
                <template v-for="roll of rollResult.rolls">
                    <span class="each-roll" :class="setRollClass(roll)">
                        {{ roll.value }}
                    </span>
                    <span class="other-roll" v-if="rollResult.type !== 'normal'">
                        {{ `(${roll.other})` }}
                    </span>
                </template>
            </div>
        </div>
        
        <div class="button-area">
            <Button text="Repetir" @click="$emit('rollAgain')" />
            <Button text="Salvar" />
            <Button text="Voltar" @click="$emit('hideResult')" />
        </div>
    </div>
</template>

<style scoped>
.result-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: var(--blur-bg-over-index);

    width: 60%;
    min-height: 30%;

    padding: 0.5em;
    border: 3px var(--color-border) solid;
    border-radius: 5px;
    background-color: var(--color-background-soft);
    text-align: center;
}

.final-result {
    font-size: 5em;
}

.rolls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

.each-roll {
    margin-left: 0.4em;
}

.other-roll {
    margin-left: 0.2em;
}

.button-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 1em;
}

.button-area button {
    width: 80%;
}
</style>