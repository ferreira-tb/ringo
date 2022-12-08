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
    raceList.sort((a, b) => a[1].localeCompare(b[1], 'pt-br'));
};

function randomRace() {
    const randomIndex = Math.floor(Math.random() * raceList.length);
    character.race = raceList[randomIndex][0];
};

function saveAndContinue() {
    if (character.race === null) randomRace();
    router.push({ name: 'create-char-step-3' });
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
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">Continuar</span>.</p>
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

        <RaceBonuses v-if="(typeof character.race === 'number')" />
    </section>
</template>

<style scoped>
.races-area {
    margin-top: 0.5em;
    text-align: center;
}
</style>