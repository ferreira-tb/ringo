type APIRaceBonus = {
    /** ID númerico do bônus. */
    id: number
    /** Nome do bônus. */
    nome: string
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
    nome: string
    codigo: number
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
    recomendacoes: {
        /**
         * Números representam uma classe e arrays de números representam multiclasse.
         * Já `null` indica que não há classe recomendada.
         */
        classes: (number | number[])[] | null
    }
}

type APICharacterClass = {
    
}