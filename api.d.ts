type AbilityScores = {
    for: number
    des: number
    con: number
    int: number
    sab: number
    car: number
    san: number
}

type RaceBonus = {
    /** Nome do bônus. */
    nome: string
    /** Descrição dos efeitos do bônus. */
    efeito: string
    /** Parágrafos adicionais imediatamente após a descrição do bônus. */
    extra?: string[]
    detalhes?: RaceBonusDetails
}

type RaceBonusDetails = {
    tipo: 'table' | 'description_list'
    conteudo:
        | StandardTableContent
        | StandardDescriptionListContent
}

type CharacterRace = {
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
    idiomas: number[],
    visao_escuro: number | null
    bonus: RaceBonus[]
}