////// HABILIDADE
type APIAbilityInfo = Readonly<{
    nome: string
    sigla: Abilities
    descricao: string
}>;

////// PERÍCIAS
type APISkills = Readonly<{
    nome: Skills
    codigo: number
    descricao: string
}>;