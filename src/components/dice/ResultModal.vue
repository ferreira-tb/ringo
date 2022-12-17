<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useDiceStore } from '@/stores/dice.js';
import { RingoError } from '@/error.js';
import { DiceModel, type DiceRoll, type EachDiceRoll } from '@/objects.js';
import BlurBackground from '@/components/BlurBackground.vue';
import Button from '@/components/Button.vue';

const props = defineProps<{
    rollResult: DiceRoll
}>();

const emit = defineEmits<{
    (e: 'hideResult'): void
    (e: 'rollAgain'): void
}>();

const { diceCollection } = useDiceStore();

/** Caixa de texto usada para nomear a rolagem. */
const textInput = ref<HTMLInputElement | null>(null);
/** Determina se a caixa de texto estará visível. */
const showNameInput = ref<boolean>(false);
/** Nome da rolagem. */
const rollName = ref<string | null>(null);

/** Classes usadas para estilizar os valores do resultado. */
const resultClass = computed(() => ({
    bold: true,
    'green-text': props.rollResult.finalResult === props.rollResult.maxValue,
    'red-text': props.rollResult.finalResult === props.rollResult.minValue
}));

// Foca a caixa de texto quando ela é exibida.
watch(textInput, () => {
    if (textInput.value instanceof HTMLInputElement) {
        textInput.value.focus();
    };
});

function setRollClass(roll: EachDiceRoll) {
    return {
        'green-text': roll.value === props.rollResult.dice,
        'red-text': roll.value === 1
    };
};

function rollAgain() {
    showNameInput.value = false;
    rollName.value = null;
    emit('rollAgain');
};

function addToCollection() {
    if (typeof rollName.value !== 'string') {
        throw new RingoError('O nome escolhido para a rolagem é inválido.');
    } else if (rollName.value.length === 0) {
        return;
    };

    const { dice, amount, modToSum, type } = props.rollResult;
    const rollToAdd = new DiceModel(dice, amount, modToSum, type);
    diceCollection.set(rollName.value, rollToAdd);

    showNameInput.value = false;
    rollName.value = null;
};
</script>

<template>
    <div>
        <BlurBackground @close-modal="$emit('hideResult')" />
        
        <div class="result-modal">
            <div>
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
            
            <Transition name="fade" mode="out-in">
                <div class="save-area" v-if="showNameInput">
                    <input
                        v-model.trim="rollName"
                        type="text"
                        maxlength="50"
                        placeholder="Digite um nome"
                        ref="textInput"
                    >
                    <Button text="OK" @click="addToCollection" />
                </div>
            </Transition>
        
            <div class="button-area">
                <Button text="Repetir" @click="rollAgain" />
                <Button text="Salvar" @click="showNameInput = true" :disabled="showNameInput" />
                <Button text="Voltar" @click="$emit('hideResult')" />
            </div>
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

    width: 80%;
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

.save-area {
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 0.5em;
    overflow: hidden;
}

.save-area input {
    height: 2em;
    width: 90%;
}

.save-area button {
    width: 80%;
}

.button-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 0.5em;
    overflow: hidden;
}

.button-area button {
    width: 80%;
}
</style>