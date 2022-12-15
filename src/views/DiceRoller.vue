<script setup lang="ts">
import { computed, reactive, readonly, ref } from 'vue';
import { useDiceStore } from '@/stores/dice.js';
import { generateDiceRollText } from '@/helpers.js';
import { DiceRoll } from '@/objects.js';
import { RingoError } from '@/error.js';
import DiceHistory from '@/components/dice/DiceHistory.vue';
import SavedRolls from '@/components/dice/SavedRolls.vue';
import Button from '@/components/Button.vue';

const { diceHistory } = useDiceStore();

const buttonStyle = reactive({
    width: '80%',
    height: '3em',
    fontSize: '1em',
    fontWeight: 550
});

/** Quantidade de lados dos dados. */
const diceTypes = readonly([2, 4, 6, 8, 10, 12, 20, 100]);
/** Dado escolhido pelo jogador. */
const chosenDice = ref<number | null>(null);
/** Quantidade de dados que serão rolados. */
const diceAmount = ref<number>(1);
/** Modificador que será somado ao resultado. */
const modifier = ref<number>(0);
/** Determina se a jogada será normal ou se aplicará vantagem ou desvantagem. */
const rollType = ref<DiceRollType>('normal');

/** Combinação a ser rolada. */
const roll = computed(() => {
    if (chosenDice.value === null) return null;
    return generateDiceRollText(chosenDice.value, diceAmount.value, modifier.value);
});

/** Alea iacta est. */
function rollDice() {
    if (chosenDice.value === null) throw new RingoError('Nenhum dado foi escolhido.');
    const thisRoll = new DiceRoll(chosenDice.value, diceAmount.value, modifier.value, rollType.value);
    diceHistory.push(thisRoll);
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

        <div class="mod-area">
            <div>Quantidade</div>
            <div>Modificador</div>
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
                text="Salvos"
                :style="buttonStyle"
            />
        </div>

        <Transition name="fade" mode="out-in">
            <DiceHistory v-if="diceHistory.length > 0" :diceHistory="diceHistory" />
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

.radio-area {
    display: flex;
    justify-content: center;
    padding-top: 0.2em;
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