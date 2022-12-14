<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { router } from '@/router/index.js';
import { useCharacterStore } from '@/stores/character.js';
import { useRaceStore } from '@/stores/game.js';
import { fetchAbilities } from '@/helpers.js';
import Button from '@/components/Button.vue';
import RaceBonuses from '@/components/create_char/RaceBonuses.vue';

const { character } = useCharacterStore();
const { races } = useRaceStore();

/** Nome e descrição de cada habilidade. */
const abilityInfo = await fetchAbilities();

/** Lista de raças, com o código da raça, o nome e o código do livro, respectivamente. */
const raceList: [number, Races, number][] = reactive([]);
character.books.forEach((book) => {
    const thisBookRaceMap = races.get(book);
    if (thisBookRaceMap) {
        for (const [key, value] of thisBookRaceMap.entries()) {
            raceList.push([key, value, book]);
        };
    };
});

/** Mapa com as informações sobre cada raça. */
const raceInfoMap = reactive(new Map<number, APICharacterRace>());

// Solicita à API os dados sobre a raça e ordena a lista de raças de acordo com o nome.
if (raceList.length > 0) {
    Promise.all(character.books.map(async (book) => {
        try {
            const response = await fetch(`/ringo/api/races/book${book.toString(10)}.json`);
            if (response.status === 404) return;

            const raceInfo = await response.json() as APICharacterRace[];
            if (Array.isArray(raceInfo)) {
                raceInfo.forEach((item) => raceInfoMap.set(item.codigo, item));
            };

        } catch (err) {
            if (err instanceof Error) console.error(err);
        };
    }));
    
    raceList.sort((a, b) => a[1].localeCompare(b[1], 'pt-br'));
};

function getRandomRace() {
    const randomIndex = Math.floor(Math.random() * raceList.length);
    character.race.id = raceList[randomIndex][0];
    character.race.book = raceList[randomIndex][2];
};

function saveAndContinue() {
    if (character.race.id === null) getRandomRace();
    router.push({ name: 'create-char-step-3' });
};

// Remove a raça atual caso ela não esteja na lista.
// Isso geralmente acontece quando o usuário seleciona uma raça, volta à janela anterior e então altera os livros.
// Se durante a verificação ele encontrar a raça na lista, aproveita e atualiza o ID do livro onde a raça se encontra.
watchEffect(() => {
    const verifyList = (race: [number, Races, number]) => {
        if (character.race.id === race[0]) {
            character.race.book = race[2];
            return true;
        };

        return false;
    };

    if (!raceList.some(verifyList)) {
        character.race.id = null;
        character.race.book = null;
    };
});
</script>

<template>
    <section>
        <p class="text-line">Escolha uma raça para seu personagem. Ela definirá sua aparência geral e seus talentos naturais.</p>
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">continuar</span>.</p>
        <p class="text-line small">A Ringo escolherá uma raça aleatória para você.</p>
        
        <div class="races-area">
            <select v-model.number="character.race.id">
                <option v-for="race of raceList" :key="race[0]" :value="race[0]">{{ race[1] }}</option>
            </select>
        </div>

        <div class="button-area">
            <Button
                text="Continuar"
                :disabled="(raceList.length < 1)"
                @click.prevent="saveAndContinue"
            />
            <Button
                text="Escolha pra mim"
                :disabled="(raceList.length < 1)"
                @click.prevent="getRandomRace"
            />
            <Button
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-1' })"
            />
        </div>

        <Transition name="fade" mode="out-in">
            <RaceBonuses
                v-if="(typeof character.race.id === 'number' && raceInfoMap.has(character.race.id))"
                :key="character.race.id"
                :ability-info="abilityInfo"
                :race-info="(raceInfoMap.get(character.race.id) as APICharacterRace)"
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