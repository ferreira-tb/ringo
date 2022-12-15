import { defineStore } from 'pinia';
import type { DiceRoll } from '@/objects.js';

export const useDiceStore = defineStore('dice', () => {
    const diceHistory: DiceRoll[] = [];
    return { diceHistory };
});