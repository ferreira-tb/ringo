import { RingoError } from "@/error.js";

/**
 * Retorna um número inteiro entre 1 e o valor indicado por `dice`.
 * Se `vibrate === true`, vibra o aparelho quando o valor obtido for igual à `dice`.
 */
export function randomInteger(dice: number, vibrate: boolean = true) {
    const result = Math.floor(Math.random() * dice + 1);
    if (result === dice && vibrate === true) navigator.vibrate(400);
    return result;
};

/** Gera o texto que descreve uma rolagem de dados. */
export function generateDiceRollText(dice: number, amount: number, modToSum: number) {
    let rollText = `${amount}D${dice}`;
    if (modToSum > 0) rollText += ` + ${modToSum}`;
    if (modToSum < 0) rollText += ` - ${Math.abs(modToSum)}`;
    return rollText;
};

/** Torna a primeira letra maiúscula. */
export function capitalize(word: string) {
    if (word.length === 0) throw new RingoError('A string está vazia.');
    return word.replace(word[0], word[0].toUpperCase());
};

/** Dá `join` numa array de strings separando os itens com vírgula, mas usa `e` antes do último item. */
export function joinWordList(wordArray: string[], shouldCapitalize: boolean = false): string {
    if (wordArray.length === 0) throw new RingoError('A lista está vazia.');

    const result = wordArray.join(', ').replace(/,\s([^,]+)$/, ' e $1');
    if (shouldCapitalize === true) return capitalize(result);
    return result;
};

/** Retorna informações sobre as habilidades do jogo. */
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

/**
 * Emite um arquivo JSON para download.
 * @param item Item que será convertido para emissão.
 */
export function emitJSONFile(item: unknown) {
    const json = JSON.stringify(item, null, 0);
    const blob = new Blob([json], { type: 'application/json' });

    const blobURL = URL.createObjectURL(blob);

    const tempAnchor = document.createElement('a');
    tempAnchor.setAttribute('href', blobURL);
    tempAnchor.setAttribute('download', 'dice_collection.json');
    tempAnchor.click();
    
    URL.revokeObjectURL(blobURL);
};

/**
 * Abre o seletor de arquivos.
 * @param id ID do seletor.
 */
export function openFilePicker(id: string) {
    const fileInput = document.querySelector(`#${id}`) as HTMLInputElement | null;
    if (!(fileInput instanceof HTMLInputElement)) {
        throw new RingoError('Não foi possível abrir o seletor de arquivos.');
    };
    fileInput.click();
};