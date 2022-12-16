import { RingoError } from "@/error.js";

export function randomInteger(dice: number, vibrate: boolean = true) {
    const result = Math.floor(Math.random() * dice + 1);
    if (result === dice && vibrate === true) navigator.vibrate(400);
    return result;
};

export function generateDiceRollText(dice: number, amount: number, modToSum: number) {
    let rollText = `${amount}D${dice}`;
    if (modToSum > 0) rollText += ` + ${modToSum}`;
    if (modToSum < 0) rollText += ` - ${Math.abs(modToSum)}`;
    return rollText;
};

export function capitalize(word: string) {
    if (word.length === 0) throw new RingoError('A string está vazia.');
    return word.replace(word[0], word[0].toUpperCase());
};

export function joinWordList(wordArray: string[], shouldCapitalize: boolean = false): string {
    if (wordArray.length === 0) throw new RingoError('A lista está vazia.');

    const result = wordArray.join(', ').replace(/,\s([^,]+)$/, ' e $1');
    if (shouldCapitalize === true) return capitalize(result);
    return result;
};

export async function fetchAbilities(): Promise<ReadonlyMap<Abilities, APIAbilityInfo>> {
    const response = await fetch('/ringo/api/ability.json');
    const jsonArray = await response.json() as APIAbilityInfo[];
    
    if (!Array.isArray(jsonArray)) {
        throw new RingoError('Não foi possível obter informações sobre as habilidades.');
    };

    const abilityMap = new Map<Abilities, APIAbilityInfo>();
    jsonArray.forEach((item) => abilityMap.set(item.sigla, item));
    return abilityMap;
};