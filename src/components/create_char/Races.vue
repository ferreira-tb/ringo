<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { router } from '@/router/index.js';
import { useCharacterStore } from '@/stores/character.js';
import { useGameStore } from '@/stores/game.js';
import StandardButton from '@/components/StandardButton.vue';
import RaceBonuses from '@/components/create_char/RaceBonuses.vue';

const charStore = useCharacterStore();
const { character } = charStore;

const gameStore = useGameStore();
const { races } = gameStore;

const raceList: [number, Races][] = reactive([]);
character.books.forEach((book) => {
    const racesFromBook = races.get(book);
    if (racesFromBook) {
        raceList.push(...racesFromBook.entries());
    };
});

if (raceList.length > 0) {
    Promise.all(character.books.map((book) => fetchRaceInfo(book)));
    raceList.sort((a, b) => a[1].localeCompare(b[1], 'pt-br'));
};

const raceInfoMap = reactive(new Map<number, CharacterRace>());
async function fetchRaceInfo(bookNumber: number) {
    try {
        const response = await fetch(`/ringo/api/races/book${bookNumber.toString(10)}.json`);
        if (response.status === 404) return;

        const raceInfo = await response.json() as CharacterRace[];
        if (Array.isArray(raceInfo)) {
            raceInfo.forEach((item) => raceInfoMap.set(item.codigo, item));
        };

    } catch (err) {
        if (err instanceof Error) console.error(err);
    };
};

function randomRace() {
    const randomIndex = Math.floor(Math.random() * raceList.length);
    character.race = raceList[randomIndex][0];
};

function saveAndContinue() {
    if (character.race === null) randomRace();
    // router.push({ name: 'create-char-step-3' });
};

watchEffect(() => {
    if (!raceList.some((race) => character.race === race[0])) {
        character.race = null;
    };
});
</script>

<template>
    <section>
        <p class="text-line">Escolha uma raça para seu personagem. Ela definirá sua aparência geral e seus talentos naturais.</p>
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">continuar</span>.</p>
        <p class="text-line small">Uma raça aleatória será escolhida para você!</p>
        
        <div class="races-area">
            <select v-model.number="character.race">
                <option v-for="race of raceList" :key="race[0]" :value="race[0]">{{ race[1] }}</option>
            </select>
        </div>

        <div class="button-area">
            <StandardButton
                text="Continuar"
                :disabled="(raceList.length < 1)"
                @click.prevent="saveAndContinue"
            />
            <StandardButton
                text="Aleatório"
                :disabled="(raceList.length < 1)"
                @click.prevent="randomRace"
            />
            <StandardButton
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-1' })"
            />
        </div>

        <Transition name="fade" mode="out-in">
            <RaceBonuses
                v-if="((typeof character.race === 'number') && raceInfoMap.has(character.race))"
                :raceInfo="(raceInfoMap.get(character.race) as CharacterRace)"
            />
        </Transition>
    </section>
</template>

<style scoped>
.races-area {
    margin-top: 0.5em;
    text-align: center;
}
</style>