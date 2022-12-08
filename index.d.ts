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

type RaceMap = Map<number, ReadonlyMap<number, Races>>;

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

type ClassMap = Map<number, ReadonlyMap<number, Classes>>;