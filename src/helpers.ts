import { RingoError } from "@/error.js";

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