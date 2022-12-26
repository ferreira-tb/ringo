<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { router } from '@/router/router.js';
import { useDiceStore } from '@/stores/dice.js';
import { generateDiceRollText } from '@/helpers.js';
import { DiceRoll } from '@/objects.js';
import { RingoError } from '@/error.js';
import DiceHistory from '@/components/DiceHistory.vue';
import DiceResultModal from '@/components/DiceResultModal.vue';
import Button from '@/components/Button.vue';

const diceStore = useDiceStore();
const { diceHistory, diceTypes } = diceStore;
const { chosenDice, diceAmount, modifier, rollType } = storeToRefs(diceStore);

const buttonStyle = reactive({
    width: '80%',
    height: '3em',
    fontSize: '1em',
    fontWeight: 550
});

/** Combinação a ser rolada. */
const roll = computed(() => {
    if (chosenDice.value === null) return null;
    return generateDiceRollText(chosenDice.value, diceAmount.value, modifier.value);
});

/** Estilo do modificador. */
const modStyle = computed(() => ({
    bold: true,
    'green-text': modifier.value >= 0,
    'red-text': modifier.value < 0
}));

/** Resultado da rolagem. Um valor diferente de `null` forçará a abertura do modal. */
const rollResult = ref<DiceRoll | null>(null);

/** Alea iacta est. */
function rollDice() {
    if (chosenDice.value === null) throw new RingoError('Nenhum dado foi escolhido.');
    const thisRoll = new DiceRoll(chosenDice.value, diceAmount.value, modifier.value, rollType.value);
    rollResult.value = thisRoll;

    while (diceHistory.length > 5) diceHistory.pop();
    diceHistory.unshift(thisRoll);
};

function decreaseDiceAmount() {
    if (diceAmount.value > 1) diceAmount.value--;
};
</script>

<template>
    <main class="dice-roller">
        <div class="result-area">
            <div class="result-text">
                <Transition name="fade" mode="out-in">
                    <span v-if="roll" :key="roll">{{ roll }}</span>
                </Transition>
            </div>
            <Button
                class="roll-button"
                text="Rolar"
                :disabled="chosenDice === null"
                @click="rollDice"
            />
        </div>
        
        <Transition name="fade" mode="out-in">
            <DiceResultModal 
                v-if="rollResult"
                :rollResult="rollResult"
                @hide-result="rollResult = null"
                @roll-again="rollDice"
            />
        </Transition>
        
        <div class="mod-area">
            <div class="mod-row">
                <Button text="X" @click="diceAmount = 1" />

                <span class="bold">Quantidade</span>
                <Button text="-" @click="decreaseDiceAmount" />

                <span class="bold green-text">{{ diceAmount }}</span>
                <Button text="+" @click="diceAmount++" />
            </div>
            
            <div class="mod-row">
                <Button text="X" @click="modifier = 0" />

                <span class="bold">Modificador</span>
                <Button text="-" @click="modifier--" />

                <span :class="modStyle">{{ modifier }}</span>
                <Button text="+" @click="modifier++" />
            </div>

            <div class="radio-area">
                <label>
                    <input type="radio" value="normal" v-model="rollType" :disabled="chosenDice !== 20">
                    Normal
                </label>
                <label>
                    <input type="radio" value="vantagem" v-model="rollType" :disabled="chosenDice !== 20">
                    Vantagem
                </label>
                <label>
                    <input type="radio" value="desvantagem" v-model="rollType" :disabled="chosenDice !== 20">
                    Desvantagem
                </label>
            </div>
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
                text="Coleção"
                :style="buttonStyle"
                @click="router.push({ name: 'dice-collection' })"
            />
        </div>

        <Transition name="fade" mode="out-in">
            <DiceHistory v-if="diceHistory.length > 0" />
        </Transition>
    </main>
</template>

<style scoped>
.dice-roller {
    user-select: none;
}

.result-area {
    display: flex;
    align-content: center;

    height: 4em;
    border: 2px var(--color-border) solid;
}

.result-text {
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

.mod-area {
    margin: 0.5em;
}

.mod-row span:first-of-type {
    margin-right: 0.5em;
}

.mod-row {
    --mod-row-size: 2.2em;
    height: var(--mod-row-size);

    display: grid;
    grid-template-columns: 1fr 5fr 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
}

.mod-row button {
    width: var(--mod-row-size);
}

.radio-area {
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
}

.radio-area label {
    margin-right: 0.5em;
}

.radio-area input[type="radio"]{
    margin-right: 0.3em;
}

.dice-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}
</style>