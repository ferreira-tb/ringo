import { defineStore } from 'pinia';
import type { DiceRoll } from '@/objects.js';

export const useDiceStore = defineStore('dice', () => {
    const diceHistory = new Proxy([], {
        set(target, prop, value) {
            while (target.length > 5) target.shift();
            return Reflect.set(target, prop, value);
        }
    }) as DiceRoll[];

    return { diceHistory };
});