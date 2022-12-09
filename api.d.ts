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
    key: number
    nome: string
    efeito: string
}

type CharacterRace = {
    nome: string
    codigo: number
    habilidades: AbilityScores
    idade: number
    peso: number
    altura: {
        min: number
        max: number
    }
    deslocamento: number
    idiomas: number[],
    visao_escuro: number | null
    bonus: RaceBonus[]
}