<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue';
import { router } from '@/router/index.js';
import { RingoError } from '@/error.js';
import { useCharacterStore } from '@/stores/character.js';
import { useClassStore } from '@/stores/game.js';
import Button from '@/components/Button.vue';
import ClassBonuses from '@/components/create_char/ClassBonuses.vue';

const { character } = useCharacterStore();
const { classes } = useClassStore();

/** Lista de classes, com o código da classe, o nome e o código do livro, respectivamente. */
const classList: [number, Classes, number][] = reactive([]);
character.books.forEach((book) => {
    const thisBookClassMap = classes.get(book);
    if (thisBookClassMap) {
        for (const [key, value] of thisBookClassMap.entries()) {
            classList.push([key, value, book]);
        };
    };
});

/** Classe selecionada (mas não necessariamente confirmada). */
const currentClass = ref<number | null>(null);
/** Mapa com as informações sobre cada classe. */
const classInfoMap = reactive(new Map<number, APICharacterClass>());
/** Determina se o botão para adicionar classes estará ativo ou não. */
const addClassButtonStatus = computed(() => (classList.length < 1) || (typeof currentClass.value !== "number"));

// Solicita à API os dados sobre a raça e ordena a lista de raças de acordo com o nome.
if (classList.length > 0) {
    Promise.all(character.books.map(async (book) => {
        try {
            const response = await fetch(`/ringo/api/classes/book${book.toString(10)}.json`);
            if (response.status === 404) return;

            const classInfo = await response.json() as APICharacterClass[];
            if (Array.isArray(classInfo)) {
                classInfo.forEach((item) => classInfoMap.set(item.codigo, item));
            } else {
                throw new RingoError('Não foi possível obter informações sobre as classes.');
            };

        } catch (err) {
            if (err instanceof Error) console.error(err);
        };
    }));

    classList.sort((a, b) => a[1].localeCompare(b[1], 'pt-br'));
};

/** Adiciona a classe ao mapa que contém as classes escolhidas pelo jogador. */
function addClass(classId?: number, className?: Classes, bookId?: number, level: number = 1) {
    if (typeof classId !== 'number' || typeof className !== 'string' || typeof bookId !== 'number') {
        if (currentClass.value === null) return;
        classId = currentClass.value;

        const thisClass = classList.find((item) => item[0] === classId);
        if (!thisClass) throw new RingoError('Não foi possível encontrar a classe na lista.');
        className = thisClass[1];
        bookId = thisClass[2];
    };

    character.class.set(classId, {
        book: bookId,
        level: level,
        name: className
    });
};

function saveAndContinue() {
    if (character.class.size === 0) {
        // Se houver alguma classe selecionada, usa-a.
        // Do contrário, escolhe aleatoriamente entre as disponíveis.
        const randomIndex = Math.floor(Math.random() * classList.length);
        const classIndex = typeof currentClass.value === 'number' ? currentClass.value : randomIndex;

        addClass(...classList[classIndex]);
    };

    // router.push({ name: 'create-char-step-4' });
};

// Remove do mapa classes que não estejam na lista.
// Isso geralmente acontece quando o usuário seleciona uma classe, volta à janela anterior e então altera os livros.
watchEffect(() => {
    const verifyList = (thisClass: [number, Classes, number], classKey: number) => {
        if (classKey === thisClass[0]) return true;
        return false;
    };

    const keysToDelete = new Set<number>();
    for (const classKey of character.class.keys()) {
        if (!classList.some((thisClass) => verifyList(thisClass, classKey))) {
            keysToDelete.add(classKey);
        };
    };

    keysToDelete.forEach((key) => character.class.delete(key));
});
</script>

<template>
    <section>
        <p class="text-line">Classes descrevem a vocação de um personagem e suas aptidões especiais. Hora de escolher a sua.</p>
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">continuar</span>.</p>
        <p class="text-line small">A Ringo escolherá uma classe aleatória para você.</p>
        
        <div class="class-select-area">      
            <select v-model.number="currentClass">
                <template v-for="thisClass of classList" :key="thisClass[0]">
                    <option :disabled="character.class.has(thisClass[0])" :value="thisClass[0]">
                        {{ thisClass[1] }}
                    </option>
                </template>      
            </select>
        </div>

        <div class="button-area">
            <Button
                :disabled="(classList.length < 1)"
                text="Continuar"
                @click.prevent="saveAndContinue"
            />
            <Button
                :disabled="addClassButtonStatus"
                text="Adicionar classe"
                @click.prevent="addClass()"
            />
            <Button
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-2' })"
            />
        </div>

        <Transition name="fade" mode="out-in">
            <div v-if="character.class.size > 0" class="class-info-area">
                <h2>Detalhes</h2>
                <div class="class-name-wrapper">
                    <template v-for="thisClass in character.class" :key="thisClass[0]">
                        <span v-if="classInfoMap.has(thisClass[0])" class="bold green span-wrapper">
                            {{ thisClass[1].name }}
                        </span>
                    </template>
                </div>
            </div>
        </Transition>
    </section>
</template>

<style scoped>
.class-select-area {
    margin: 0.5em;
    text-align: center;
}

.class-info-area h2 {
    user-select: none;
    text-align: center;
    font-size: 1.3em;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
}

.class-name-wrapper {
    user-select: none;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

.span-wrapper {
    margin-left: 0.5em;
    margin-right: 0.5em;
}
</style>