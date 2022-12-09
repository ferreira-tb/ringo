<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { useAbilityStore, useLanguageStore } from '@/stores/game.js';
import RaceAbility from '@/components/create_char/RaceAbility.vue';
import Tooltip from '@/components/Tooltip.vue';

const props = defineProps<{
    raceInfo: CharacterRace
}>();

// Nome e descrição de cada habilidade.
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

// Texto da caixa com a descrição das habilidades.
const abilityDescription: Ref<string> = ref('');

// Aumento e diminuição nos valores das habilidades devido a traços raciais.
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

const age = computed(() => `${props.raceInfo.idade.toLocaleString('pt-br')} anos`);
const weight = computed(() => `${props.raceInfo.peso.toLocaleString('pt-br')} quilos`);
const height = computed(() => {
    const min = props.raceInfo.altura.min;
    const max = props.raceInfo.altura.max;
    return `Entre ${min.toLocaleString('pt-br')} e ${max.toLocaleString('pt-br')} ${max < 2 ? 'metro' : 'metros'}`;
});
const speed = computed(() => `${props.raceInfo.deslocamento.toLocaleString('pt-br')} metros`);

const languageStore = useLanguageStore();
const languages = computed(() => {
    const languageNames = props.raceInfo.idiomas.map((idioma) => {
        return languageStore.languages.get(idioma) as Languages;
    });

    return languageNames.join(', ');
});
</script>

<template>
    <section class="race-bonuses">
        <h2>Detalhes da Raça</h2>
        <div>
            <div class="plus-wrapper" v-if="(plus.length > 0)">
                <span
                    v-for="item of plus"
                    class="bold span-wrapper"
                    @click="(abilityDescription = item.description)"
                >
                    {{ item.name }}
                    <span class="plus">{{ ` +${item.value.toString(10)}` }}</span>
                </span>
            </div>
            <div class="minus-wrapper" v-if="(minus.length > 0)">
                <span
                    v-for="item of minus"
                    class="bold span-wrapper"
                    @click="(abilityDescription = item.description)"
                >
                    {{ item.name }}
                    <span class="minus">{{ ` -${item.value.toString(10)}` }}</span>
                </span>
            </div>
        </div>
        
        <Transition name="fade" mode="out-in">
            <Tooltip :text="abilityDescription" :key="abilityDescription"/>
        </Transition>
        
        <div class="first-title"><span class="bold span-title green-text">Expectativa de vida:</span>{{ age }}</div>
        <div><span class="bold span-title green-text">Peso médio:</span>{{ weight }}</div>
        <div><span class="bold span-title green-text">Altura:</span>{{ height }}</div>
        <div><span class="bold span-title green-text">Deslocamento:</span>{{ speed }}</div>
        <div><span class="bold span-title green-text">Idiomas:</span>{{ languages }}</div>

        <div v-if="(props.raceInfo.bonus.length > 0)">
            <h2>Habilidades Inatas</h2>
            <TransitionGroup name="fade">
                <RaceAbility
                    v-for="item of props.raceInfo.bonus"
                    :key="item.key"
                    :bonus="item"
                />
            </TransitionGroup>
        </div>
    </section>
</template>

<style scoped>
.race-bonuses {
    user-select: none;
}

h2 {
    text-align: center;
    font-size: 1.3em;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
}

.plus-wrapper, .minus-wrapper {
    text-align: center;
}

.span-wrapper, .span-title {
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.span-wrapper {
    cursor: pointer;
}

.first-title {
    margin-top: 0.3em;
}

.plus {
    color: var(--color-green);
}

.minus {
    color: var(--color-red);
}
</style>