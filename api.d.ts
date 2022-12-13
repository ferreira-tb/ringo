////// MOEDAS
type APICoinAmount = {
    /** Quantidade de moedas. */
    quantidade: number
    /** Cobre, prata, electro, ouro e platina, respectivamente. */
    tipo: 0 | 1 | 2 | 3 | 4
}

////// DANO
type APIDice = {
    /** Lados do dado. */
    dado: number
    /** Quantidade de dados. */
    quantidade: number
}

interface APIDamage extends APIDice {
    /** Tipo de dano. */
    tipo: number
    /** Modificador. */
    mod: number
}

////// HABILIDADE
type APIAbilityInfo = Readonly<{
    [key in keyof AbilityScores]: Readonly<{
        nome: string
        livro: number
        descricao: string
    }>
}>

////// RAÇA
type APIRaceBonus = {
    /** ID númerico do bônus. */
    id: number
    /** Nome do bônus. */
    nome: string
    /** ID do livro de origem do bônus. */
    livro: number
    /** Indica se o bônus é um talento. */
    talento?: boolean
    /** Descrição dos efeitos do bônus. */
    efeito: string
    /** Parágrafos adicionais imediatamente após a descrição do bônus. */
    extra?: string[]
    detalhes?: APIRaceBonusDetails
}

type APIRaceBonusDetails = {
    tipo: 'table' | 'description_list'
    conteudo:
        | StandardTableContent
        | StandardDescriptionListContent
}

type APICharacterRace = {
    nome: Races
    codigo: number
    livro: number
    habilidades: AbilityScores
    idade: number
    peso: number | null
    altura: {
        min: number | null
        max: number
    }
    tamanho: number
    deslocamento: number
    idiomas: number[]
    /**
     * Trata-se da visão no escuro padrão. Caso o traço divergir do padrão, o valor dessa propriedade deve ser `null`.
     * O traço então deve ser incluso na propriedade `bonus`.
     */
    visao_escuro: number | null
    bonus: APIRaceBonus[]
}

////// CLASSE
type APICharacterClass = {
    nome: Classes
    codigo: number
    dado_de_vida: 6 | 8 | 10 | 12
    proficiencias: {
        /** Tipos de armadura com as quais a classe possui proficiência. */
        armaduras: number[]
        /** Tipos de armas com as quais a classe possui proficiência. */
        armas: number[]
        /** Tipos de ferramentas com as quais a classe possui proficiência. */
        ferramentas: number[]
        /** Testes de resistência nos quais a classe possui proficiência. */
        resistencia: (keyof AbilityScores)[]
        /** Perícias fornecidas pela classe. */
        pericias: {
            /** Quantidade de perícias de classe que o jogador pode escolher. */
            quantidade: number
            /** Lista com as perícias disponíveis para escolha. */
            lista: number[]
        }
    }
}

////// PERÍCIAS
type APISkills = {
    nome: Skills
    codigo: number
    livro: number
    descricao: string
}

////// ARMADURAS
type APIArmor = {
    /** Nome do item. */
    nome: Armors
    /** Código do item. */
    codigo: number
    /** Código do livro de origem do item. */
    livro: number
    /** Armaduras leves, médias, pesadas e escudos, respectivamente. */
    tipo: 0 | 1 | 2 | 3
    /** Valor de compra do item. */
    valor: APICoinAmount
    /** Classe de armadura. */
    ca: number
    /** Determina se o modificador de destreza deve ser somado à CA. */
    destreza: boolean
    /** Limite para a destreza que pode ser somada à CA. */
    limite_destreza: number | null
    /** Força mínima necessária para usar o item. */
    forca: number | null
    /** Indica se o item impõe desvantagem em testes de furtividade. */
    desv_furtividade: boolean
    /** Peso do item (em quilos). */
    peso: number
    /** Descrição do item. */
    descricao: string
}

////// ARMAS
type APIWeapon = {
    /** Nome do item. */
    nome: Weapons
    /** Código do item. */
    codigo: number
    /** Código do livro de origem do item. */
    livro: number
    /** Armas simples corpo-a-corpo e a distância, e marciais corpo-a-corpo e a distância, respectivamente. */
    tipo: 0 | 1 | 2 | 3
    /** Valor de compra do item. */
    valor: APICoinAmount
    /** Dano da arma. */
    dano: APIDamage | null
    /** Peso do item (em quilos). */
    peso: number | null
    /** Códigos das propriedades da arma. */
    propriedades: number[]
    /** Detalhes das propriedades da arma. */
    detalhes?: APIWeaponPropsDetails
}

type APIWeaponProps = {
    /** Nome da propriedade */
    nome: WeaponProps
    /** Código da propriedade. */
    codigo: number
    /** Código do livro de origem da propriedade. */
    livro: number
    /** Descrição da propriedade. */
    descricao: string
}

type APIWeaponPropsDetails = {
    /** Distância normal da arma (em metros). */
    distancia?: number
    /** Distância máxima da arma (em metros). */
    distancia_max?: number
    /** Dado de dano para quando a arma é usada com as duas mãos. */
    dano_duas_maos?: APIDice
    /** Descrição da propriedade "especial". */
    especial?: string
}

type APIWeaponEndpoint = {
    armas: APIWeapon[]
    propriedades: APIWeaponProps[]
}