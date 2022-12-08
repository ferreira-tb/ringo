<script setup lang="ts">
import { computed } from 'vue';
import { useAbilityStore } from '@/stores/game.js';

const props = defineProps<{
    raceInfo: CharacterRace
}>();

const abilityStore = useAbilityStore();
const { ability } = abilityStore;

class AbilityInfoAndValue {
    readonly name: string;
    readonly value: number;
    readonly description: string;

    constructor(name: string, value: number, description: string) {
        this.name = name;
        this.value = value;
        this.description = description;
    };
};

const plus = computed(() => getAbilities('pos'));
const minus = computed(() => getAbilities('neg'));

function getAbilities(type: 'pos' | 'neg') {
    const result: AbilityInfoAndValue[] = [];
    for (const [key, value] of Object.entries(props.raceInfo.habilidades) as [keyof AbilityScores, number][]) {
        const thisAbility = new AbilityInfoAndValue(ability[key].name, value,ability[key].description);

        if (type === 'pos' && Math.sign(value) === 1) {
            result.push(thisAbility);
        } else if (type === 'neg' && Math.sign(value) === -1) {
            result.push(thisAbility);
        };
    };

    return result;
};
</script>

<template>
    <section>
        <h2>Detalhes da Raça</h2>
        <div class="div-wrapper" v-if="(plus.length > 0)">
            <span v-for="item of plus" class="span-wrapper tooltip" :data-tooltip="item.description">
                {{ item.name }}
                <span class="plus">{{ ` +${item.value.toString(10)}` }}</span>
            </span>
        </div>
        <div class="div-wrapper" v-if="(minus.length > 0)">
            <span v-for="item of minus" class="span-wrapper tooltip">
                {{ item.name }}
                <span class="minus">{{ ` -${item.value.toString(10)}` }}</span>
            </span>
        </div>

        
    </section>
</template>

<style scoped>
h2 {
    text-align: center;
    font-size: 1.3em;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
    user-select: none;
}

.div-wrapper {
    text-align: center;
}

.span-wrapper {
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.plus {
    color: var(--color-green);
}

.minus {
    color: var(--color-red);
}
</style>