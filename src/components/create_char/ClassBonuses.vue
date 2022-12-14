<script setup lang="ts">
import { computed } from 'vue';
import { RingoError } from '@/error';
import { useBookStore, useWeaponStore } from '@/stores/game.js';
import { joinWordList } from '@/helpers.js';

const props = defineProps<{
    abilityInfo: ReadonlyMap<Abilities, APIAbilityInfo>
    classInfo: APICharacterClass
}>();

const { weapons } = useWeaponStore();
const { books } = useBookStore();

const bookName = computed(() => books.get(props.classInfo.livro));

const hitDice = computed(() => {
    const hitDiceText = `${props.classInfo.hp.quantidade}d${props.classInfo.hp.dado}`;
    return `${hitDiceText} por nível de ${props.classInfo.nome.toLowerCase()}`;
});

const armorProf = computed(() => {
    const parsedArray = props.classInfo.proficiencias.armaduras.map((thisArmor) => {
        switch (thisArmor) {
            case 0: return 'armaduras leves';
            case 1: return 'armaduras médias';
            case 2: return 'armaduras pesadas';
            case 3: return 'escudos';
            default: throw new RingoError('O tipo da armadura é inválido.');
        };
    });

    if (parsedArray.length === 0) return 'Nenhuma';
    return joinWordList(parsedArray);
});

const weaponProf = computed(() => {
    const parsedTypeArray = props.classInfo.proficiencias.armas.tipo?.map((thisType) => {
        switch (thisType) {
            case 0: return 'armas simples';
            case 1: return 'armas marciais';
            default: throw new RingoError('O tipo da arma é inválido.');
        };
    });

    const parsedWeaponArray = props.classInfo.proficiencias.armas.avulso?.map((thisWeapon) => {
        const weaponName = weapons.get(thisWeapon);
        if (!weaponName) throw new RingoError('Não foi possível determinar o nome da arma.');
        return weaponName.toLowerCase();
    });

    const parsedArray: string[] = [];
    if (Array.isArray(parsedTypeArray)) parsedArray.push(...parsedTypeArray);
    if (Array.isArray(parsedWeaponArray)) parsedArray.push(...parsedWeaponArray);

    if (parsedArray.length === 0) return 'Nenhuma';
    return joinWordList(parsedArray);
});

const abilityChecks = computed<string>(() => {
    const parsedArray = props.classInfo.proficiencias.resistencia.map((thisAbility) => {
        const abilityName = props.abilityInfo.get(thisAbility)?.nome;
        if (!abilityName) throw new RingoError('Não foi possível determinar o nome da habilidade.');
        return abilityName;
    });

    return joinWordList(parsedArray);
});
</script>

<template>
    <section class="class-bonuses">
        <div class="first-title div-title"><span class="bold green-text">Dado de vida:</span>{{ hitDice }}</div>
        <div class="div-title"><span class="bold green-text">Armaduras:</span>{{ armorProf }}</div>
        <div class="div-title"><span class="bold green-text">Armas:</span>{{ weaponProf }}</div>
        <div class="div-title"><span class="bold green-text">Testes de resistência:</span>{{ abilityChecks }}</div>
        <div class="div-title"><span class="bold green-text">Fonte:</span>{{ bookName }}</div>
    </section>
</template>

<style scoped>
.class-bonuses {
    user-select: none;
}

.first-title {
    margin-top: 0.3em;
}

.div-title {
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.div-title span {
    margin-right: 0.5em;
}
</style>