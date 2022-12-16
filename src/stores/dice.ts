import { readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import type { DiceModel, DiceRoll } from '@/objects.js';

export const useDiceStore = defineStore('dice', () => {
    /** Histórico de rolagens. */
    const diceHistory: DiceRoll[] = [];
    /** Rolagens salvas. */
    const diceCollection = new Map<string, DiceModel>();
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

    return {
        diceHistory,
        diceCollection,
        diceTypes,
        chosenDice,
        diceAmount,
        modifier,
        rollType
    };
});