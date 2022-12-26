import { RingoError } from "@/error.js";

/** Retorna um número inteiro entre 1 e o valor indicado por `dice`. */
export function randomInteger(dice: number) {
    return Math.floor(Math.random() * dice + 1);
};

/** Gera o texto que descreve uma rolagem de dados. */
export function generateDiceRollText(dice: number, amount: number, modToSum: number) {
    let rollText = `${amount}D${dice}`;
    if (modToSum > 0) rollText += ` + ${modToSum}`;
    if (modToSum < 0) rollText += ` - ${Math.abs(modToSum)}`;
    return rollText;
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