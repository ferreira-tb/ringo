import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', () => {
    ////// LIVROS
    const books: ReadonlyMap<number, Books5thEdition> = new Map([
        [0, 'Ringo'],
        [1, 'Livro do Jogador'],
        [2, 'Guia do Mestre'],
        [3, 'Manual dos Monstros'],
        [4, 'Guia de Xanathar para Todas as Coisas'],
        [5, 'Mal Elemental - Compêndio do Jogador']
    ]);

    ////// RAÇAS
    const playerHandbookRaces: ReadonlyMap<number, PlayerHandbookRaces> = new Map([
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
    ]);
    
    const elementalEvilRaces: ReadonlyMap<number, ElementalEvilRaces> = new Map([
        [15, 'Aaracokra'],
        [16, 'Genasi da Água'],
        [17, 'Genasi do Ar'],
        [18, 'Genasi do Fogo'],
        [19, 'Genasi da Terra'],
        [20, 'Gnomo das Profundezas'],
        [21, 'Golias']
    ]);

    // As chaves precisam ser idênticas às do mapa de livros.
    const races: Map<number, ReadonlyMap<number, Races>> = new Map();
    races.set(1, playerHandbookRaces);
    races.set(5, elementalEvilRaces);

    ////// CLASSES
    const playerHandbookClasses: ReadonlyMap<number, PlayerHandbookClasses> = new Map([
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
    ]);

    // As chaves precisam ser idênticas às do mapa de livros.
    const classes: Map<number, ReadonlyMap<number, Classes>> = new Map();
    classes.set(1, playerHandbookClasses);

    return { books, races, classes };
});

export const useLanguageStore = defineStore('language', () => {
    const languages: ReadonlyMap<number, Languages> = new Map([
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
        [15, 'Subcomum']
    ]);

    return { languages };
});

export const useExperienceStore = defineStore('experience', () => {
    const experience: ReadonlyMap<number, number> = new Map([
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
    ]);

    return { experience };
});

export const useAbilityStore = defineStore('ability', () => {
    const ability: AbilityInfo = {
        for: {
            name: 'Força',
            description: 'A Força mede a potência física, treinamento atlético, e a extensão da força bruta que você pode exercer.'
        },
        des: {
            name: 'Destreza',
            description: 'A Destreza mede a agilidade, os reflexos e o equilíbrio.'
        },
        con: {
            name: 'Constituição',
            description: 'A Constituição mede a saúde, a resistência e a força vital.'
        },
        int: {
            name: 'Inteligência',
            description: 'A Inteligência mede a acuidade mental, precisão da memória e a habilidade de raciocinar.'
        },
        sab: {
            name: 'Sabedoria',
            description: 'A Sabedoria reflete como você está em sintonia com o mundo ao seu redor e representa percepção e intuição.'
        },
        car: {
            name: 'Carisma',
            description: 'O Carisma mede a capacidade de interagir eficazmente com os outros. ' +
            'Ele inclui fatores como confiança e eloquência, e pode representar uma personalidade encantadora ou dominadora.'
        },
        san: {
            name: 'Sanidade',
            description: 'Um personagem com um valor de Sanidade alto mantem-se equilibrado mesmo ao confrontar circunstâncias insanas, ' +
            'enquanto que um personagem com Sanidade baixa é inseguro, facilmente se desesperando ao ser confrontado por horrores ' +
            'sobrenaturais que estão além de sua compreensão.'
        }
    };

    return { ability };
});