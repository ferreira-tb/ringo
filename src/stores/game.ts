import { defineStore } from 'pinia';
import { markRaw } from 'vue';

export const useBookStore = defineStore('book', () => {
    const books: ReadonlyMap<number, Books5thEdition> = markRaw(new Map([
        [0, 'Ringo'],
        [1, 'Livro do Jogador'],
        [2, 'Guia do Mestre'],
        [3, 'Manual dos Monstros'],
        [4, 'Guia de Xanathar para Todas as Coisas'],
        [5, 'Mal Elemental - Compêndio do Jogador']
    ]));

    return { books };
});

export const useRaceStore = defineStore('race', () => {
    const playerHandbookRaces: ReadonlyMap<number, PlayerHandbookRaces> = markRaw(new Map([
        [0, 'Anão da Colina'],
        [1, 'Anão da Montanha'],
        [2, 'Alto Elfo'],
        [3, 'Elfo da Floresta'],
        [4, 'Elfo Negro (Drow)'],
        [5, 'Halfling Pés-leves'],
        [6, 'Halfling Robusto'],
        [7, 'Humano'],
        [8, 'Humano (alternativo)'],
        [9, 'Draconato'],
        [10, 'Gnomo da Floresta'],
        [11, 'Gnomo das Rochas'],
        [12, 'Meio-elfo'],
        [13, 'Meio-orc'],
        [14, 'Tiefling']
    ]));
    
    const elementalEvilRaces: ReadonlyMap<number, ElementalEvilRaces> = markRaw(new Map([
        [15, 'Aaracokra'],
        [16, 'Genasi da Água'],
        [17, 'Genasi do Ar'],
        [18, 'Genasi do Fogo'],
        [19, 'Genasi da Terra'],
        [20, 'Gnomo das Profundezas'],
        [21, 'Golias']
    ]));

    // As chaves precisam ser idênticas às do mapa de livros.
    const races: Map<number, ReadonlyMap<number, Races>> = markRaw(new Map());
    races.set(1, playerHandbookRaces);
    races.set(5, elementalEvilRaces);

    return { races };
});

export const useClassStore = defineStore('char-class', () => {
    const playerHandbookClasses: ReadonlyMap<number, PlayerHandbookClasses> = markRaw(new Map([
        [0, 'Bárbaro'],
        [1, 'Bardo'],
        [2, 'Bruxo'],
        [3, 'Clérigo'],
        [4, 'Druida'],
        [5, 'Feiticeiro'],
        [6, 'Guerreiro'],
        [7, 'Ladino'],
        [8, 'Mago'],
        [9, 'Monge'],
        [10, 'Paladino'],
        [11, 'Patrulheiro']
    ]));

    // As chaves precisam ser idênticas às do mapa de livros.
    const classes: Map<number, ReadonlyMap<number, Classes>> = markRaw(new Map());
    classes.set(1, playerHandbookClasses);

    return { classes };
});

export const useLanguageStore = defineStore('language', () => {
    const languages: ReadonlyMap<number, Languages> = markRaw(new Map([
        [0, 'Comum'],
        [1, 'Anão'],
        [2, 'Élfico'],
        [3, 'Gigante'],
        [4, 'Gnômico'],
        [5, 'Goblin'],
        [6, 'Halfling'],
        [7, 'Orc'],
        [8, 'Abissal'],
        [9, 'Celestial'],
        [10, 'Dialeto Subterrâneo'],
        [11, 'Dracônico'],
        [12, 'Infernal'],
        [13, 'Primordial'],
        [14, 'Silvestre'],
        [15, 'Subcomum'],
        [16, 'Aquan'],
        [17, 'Auran'],
        [18, 'Ignan'],
        [19, 'Terran'],
        [20, 'Aarakocra'],
        [21, 'Druídico'],
        [22, 'Esfíngico'],
        [23, 'Grell'],
        [24, 'Horror de Gancho'],
        [25, 'Modron'],
        [26, 'Otyugh']
    ]));

    return { languages };
});

export const useSizeStore = defineStore('size', () => {
    const creatureSize: ReadonlyMap<number, string> = markRaw(new Map([
        [0, 'Miúdo'],
        [1, 'Pequeno'],
        [2, 'Médio'],
        [3, 'Grande'],
        [4, 'Enorme'],
        [5, 'Imenso']
    ]));

    return { creatureSize };
});

export const useExperienceStore = defineStore('experience', () => {
    const experience: ReadonlyMap<number, number> = markRaw(new Map([
        [1, 0],
        [2, 300],
        [3, 900],
        [4, 2700],
        [5, 6500],
        [6, 14000],
        [7, 23000],
        [8, 34000],
        [9, 48000],
        [10, 64000],
        [11, 85000],
        [12, 100000],
        [13, 120000],
        [14, 140000],
        [15, 165000],
        [16, 195000],
        [17, 225000],
        [18, 265000],
        [19, 305000],
        [20, 355000]
    ]));

    return { experience };
});

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

export const useDamageStore = defineStore('damage', () => {
    const damageType: ReadonlyMap<number, DamageType> = markRaw(new Map([
        [0, 'concussão'],
        [1, 'cortante'],
        [2, 'perfurante']
    ]));

    return { damageType };
});

export const useWeaponStore = defineStore('weapon', () => {
    const weapons: ReadonlyMap<number, Weapons> = markRaw(new Map([
        [0, 'Adaga'],
        [1, 'Azagaia'],
        [2, 'Bordão'],
        [3, 'Clava grande'],
        [4, 'Foice curta'],
        [5, 'Lança'],
        [6, 'Maça'],
        [7, 'Machadinha'],
        [8, 'Martelo leve'],
        [9, 'Porrete'],
        [10, 'Arco curto'],
        [11, 'Besta leve'],
        [12, 'Dardo'],
        [13, 'Funda'],
        [14, 'Alabarda'],
        [15, 'Cimitarra'],
        [16, 'Chicote'],
        [17, 'Espada curta'],
        [18, 'Espada grande'],
        [19, 'Espada longa'],
        [20, 'Glaive'],
        [21, 'Lança de montaria'],
        [22, 'Lança longa'],
        [23, 'Maça estrela'],
        [24, 'Machado grande'],
        [25, 'Machado de batalha'],
        [26, 'Malho'],
        [27, 'Mangual'],
        [28, 'Martelo de guerra'],
        [29, 'Picareta de guerra'],
        [30, 'Rapieira'],
        [31, 'Tridente'],
        [32, 'Arco longo'],
        [33, 'Besta de mão'],
        [34, 'Besta pesada'],
        [35, 'Rede'],
        [36, 'Zarabatana'],
    ]));

    const weaponProps: ReadonlyMap<number, WeaponProps> = markRaw(new Map([
        [0, 'Acuidade'],
        [1, 'Alcance'],
        [2, 'Arremesso'],
        [3, 'Distância'],
        [4, 'Duas mãos'],
        [5, 'Especial'],
        [6, 'Leve'],
        [7, 'Munição'],
        [8, 'Pesada'],
        [9, 'Recarga'],
        [10, 'Versátil']
    ]));

    return { weapons, weaponProps };
});

/**
 
{
    "nome": "",
    "codigo": null,
    "livro": 1,
    "tipo": 3,
    "valor": {
        "quantidade": null,
        "tipo": null
    },
    "dano": {
        "dado": null,
        "quantidade": 1,
        "tipo": null,
        "mod": 0
    },
    "peso": null,
    "propriedades": [null],
    "detalhes": {
        
    }
}
 
 */