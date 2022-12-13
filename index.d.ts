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

/** A chave deve ser o ID da classe. */
type CharacterClasses = Map<number, {
    book: number
    level: number
}>;

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

////// OUTROS
type AbilityInfo = Readonly<{
    [key in keyof AbilityScores]: Readonly<{
        name: string
        description: string
    }>
}>;

type StandardTableContent = {
    th: string[]
    tr: string[][]
}

type StandardDescriptionListContent = [string, string][];

type AbilityScores = {
    for: number
    des: number
    con: number
    int: number
    sab: number
    car: number
    san: number
}