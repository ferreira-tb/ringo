import { defineStore } from 'pinia';
import { markRaw } from 'vue';

export const useSkillStore = defineStore('skill', () => {
    const charSkill: ReadonlyMap<number, Skills> = markRaw(new Map([
        [0, 'Acrobacia'],
        [1, 'Adestrar animais'],
        [2, 'Arcanismo'],
        [3, 'Atletismo'],
        [4, 'Atuação'],
        [5, 'Enganação'],
        [6, 'Furtividade'],
        [7, 'História'],
        [8, 'Intimidação'],
        [9, 'Intuição'],
        [10, 'Investigação'],
        [11, 'Medicina'],
        [12, 'Natureza'],
        [13, 'Percepção'],
        [14, 'Persuasão'],
        [15, 'Prestidigitação'],
        [16, 'Religião'],
        [17, 'Sobrevivência']
    ]));

    return { charSkill };
});