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

type APISkills = {
    nome: Skills
    codigo: number
    livro: number
    descricao: string
}

type APIArmor = {
    /** Nome do item. */
    nome: string
    /** Código do item. */
    codigo: number
    /** Código do livro de origem do item. */
    livro: number
    /** Armaduras leves, médias, pesadas e escudos, respectivamente. */
    tipo: 0 | 1 | 2 | 3
    /** Valor de compra do item. */
    valor: {
        /** Quantidade de moedas. */
        quantidade: number
        /** Cobre, prata, electro, ouro e platina, respectivamente. */
        tipo: 0 | 1 | 2 | 3 | 4
    }
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

type APIWeapon = {

}