////// LIVROS
type Books5thEdition =
    | 'Ringo'
    | 'Livro do Jogador'
    | 'Guia do Mestre'
    | 'Manual dos Monstros'
    | 'Guia de Xanathar para Todas as Coisas'
    | 'Mal Elemental - Compêndio do Jogador'

////// RAÇAS
type PlayerHandbookRaces =
    | 'Anão da Colina'
    | 'Anão da Montanha'
    | 'Alto Elfo'
    | 'Elfo da Floresta'
    | 'Elfo Negro (Drow)'
    | 'Halfling Pés-leves'
    | 'Halfling Robusto'
    | 'Humano'
    | 'Humano (alternativo)'
    | 'Draconato'
    | 'Gnomo da Floresta'
    | 'Gnomo das Rochas'
    | 'Meio-elfo'
    | 'Meio-orc'
    | 'Tiefling';

type ElementalEvilRaces =
    | 'Aaracokra'
    | 'Genasi da Água'
    | 'Genasi do Ar'
    | 'Genasi do Fogo'
    | 'Genasi da Terra'
    | 'Gnomo das Profundezas'
    | 'Golias';

type Races =
    | PlayerHandbookRaces
    | ElementalEvilRaces;

////// CLASSES
type PlayerHandbookClasses =
    | 'Bárbaro'
    | 'Bardo'
    | 'Bruxo'
    | 'Clérigo'
    | 'Druida'
    | 'Feiticeiro'
    | 'Guerreiro'
    | 'Ladino'
    | 'Mago'
    | 'Monge'
    | 'Paladino'
    | 'Patrulheiro';

type Classes = PlayerHandbookClasses;

////// PERSONAGENS
type CharacterRace = {
    id: number | null
    book: number | null
}

/** A chave do mapa deve ser o ID da classe. */
type CharacterClasses = Map<number, {
    book: number
    level: number
    name: string
}>;

////// PERÍCIAS
type Skills =
    | 'Acrobacia'
    | 'Adestrar animais'
    | 'Arcanismo'
    | 'Atletismo'
    | 'Atuação'
    | 'Enganação'
    | 'Furtividade'
    | 'História'
    | 'Intimidação'
    | 'Intuição'
    | 'Investigação'
    | 'Medicina'
    | 'Natureza'
    | 'Percepção'
    | 'Persuasão'
    | 'Prestidigitação'
    | 'Religião'
    | 'Sobrevivência';

////// IDIOMAS
type Languages =
    | 'Comum'
    | 'Anão'
    | 'Élfico'
    | 'Gigante'
    | 'Gnômico'
    | 'Goblin'
    | 'Halfling'
    | 'Orc'
    | 'Abissal'
    | 'Celestial'
    | 'Dialeto Subterrâneo'
    | 'Dracônico'
    | 'Infernal'
    | 'Primordial'
    | 'Silvestre'
    | 'Subcomum'
    | 'Aquan'
    | 'Auran'
    | 'Ignan'
    | 'Terran'
    | 'Aarakocra'
    | 'Druídico'
    | 'Esfíngico'
    | 'Grell'
    | 'Horror de Gancho'
    | 'Modron'
    | 'Otyugh';

////// DANO
type DamageType =
    | 'concussão'
    | 'cortante'
    | 'perfurante';

////// ARMADURAS
type Armors =
    | 'Acolchoada'
    | 'Couro'
    | 'Couro batido'
    | 'Gibão de peles'
    | 'Camisão de malha'
    | 'Brunea'
    | 'Peitoral'
    | 'Meia-armadura'
    | 'Cota de anéis'
    | 'Cota de malha'
    | 'Cota de talas'
    | 'Placas'
    | 'Escudo';

////// ARMAS
type Weapons =
    | 'Adaga'
    | 'Azagaia'
    | 'Bordão'
    | 'Clava grande'
    | 'Foice curta'
    | 'Lança'
    | 'Maça'
    | 'Machadinha'
    | 'Martelo leve'
    | 'Porrete'
    | 'Arco curto'
    | 'Besta leve'
    | 'Dardo'
    | 'Funda'
    | 'Alabarda'
    | 'Cimitarra'
    | 'Chicote'
    | 'Espada curta'
    | 'Espada grande'
    | 'Espada longa'
    | 'Glaive'
    | 'Lança de montaria'
    | 'Lança longa'
    | 'Maça estrela'
    | 'Machado grande'
    | 'Machado de batalha'
    | 'Malho'
    | 'Mangual'
    | 'Martelo de guerra'
    | 'Picareta de guerra'
    | 'Rapieira'
    | 'Tridente'
    | 'Arco longo'
    | 'Besta de mão'
    | 'Besta pesada'
    | 'Rede'
    | 'Zarabatana';

type WeaponProps =
    | 'Acuidade'
    | 'Alcance'
    | 'Arremesso'
    | 'Distância'
    | 'Duas mãos'
    | 'Especial'
    | 'Leve'
    | 'Munição'
    | 'Pesada'
    | 'Recarga'
    | 'Versátil';

////// OUTROS
type StandardTableContent = {
    th: string[]
    tr: string[][]
}

type StandardDescriptionListContent = [string, string][];

type Abilities =
    | 'for'
    | 'des'
    | 'con'
    | 'int'
    | 'sab'
    | 'car'
    | 'san';

type AbilityScores = {
    [key in Abilities]: number
}