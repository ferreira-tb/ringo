<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { router } from '@/router/router.js';
import { useDiceStore } from '@/stores/dice.js';
import { emitJSONFile, openFilePicker } from '@/helpers.js'
import { diceModelKeys, type DiceModel } from '@/objects.js';
import Button from '@/components/Button.vue';
import FileInput from '@/components/FileInput.vue';
import { RingoError } from '@/error';

const diceStore = useDiceStore();
const { diceCollection } = diceStore;
const { chosenDice, diceAmount, modifier, rollType } = storeToRefs(diceStore);

const buttonStyle = reactive({
    width: '85%',
    height: '2em'
});

const sortedCollection = computed(() => {
    const rawCollection: [string, DiceModel][] = [...diceCollection.entries()];
    return rawCollection.sort((a, b) => a[0].localeCompare(b[0], 'pt-br'));
});

/** Arquivo importado pelo jogador. */
const importedFile = ref<FileList | null>(null);
watch(importedFile, async () => {
    if (!(importedFile.value instanceof FileList)) return;
    if (importedFile.value.length === 0) return;

    try {
        const reader = new FileReader();
        await Promise.all(Array.from(importedFile.value).map((file) => {
            return new Promise<void>((resolve, reject) => {
                const controller = new AbortController();

                reader.addEventListener('load', (e) => {
                    parseImportedFile(e);
                    controller.abort();
                    resolve();
                }, { signal: controller.signal });

                reader.addEventListener('error', () => {
                    controller.abort();
                    reject();
                }, { signal: controller.signal });

                reader.readAsText(file);
            });
        }));

    } catch (err) {
        if (err instanceof Error) console.error(err);
    };
});

/** Configura o rolador de dados de acordo com o item da coleção. */
function applyRollConfig(diceModel: DiceModel) {
    chosenDice.value = diceModel.dice;
    diceAmount.value = diceModel.amount;
    modifier.value = diceModel.modToSum;
    rollType.value = diceModel.type;

    // Volta para a página do rolador de dados.
    router.push({ name: 'home' });
};

/** Verifica se o arquivo importado é válido. Em caso positivo, adiciona os itens à coleção. */
function parseImportedFile(e: ProgressEvent<FileReader>) {
    if (typeof e.target?.result !== 'string') return;

    const error = new RingoError('O arquivo importado é inválido.');
    const parsed = JSON.parse(e.target.result) as unknown;
    if (!Array.isArray(parsed)) throw error;

    for (const item of parsed as unknown[]) {
        if (!Array.isArray(item) || typeof item[0] !== 'string') throw error;

        const itemKeys = Object.entries(item[1]) as [keyof DiceModel, unknown][];
        for (const [key, value] of itemKeys) {
            if (!diceModelKeys.includes(key)) {
                throw error;
            } else if ((key === 'text' || key === 'type') && typeof value !== 'string') {
                throw error;
            } else if (key !== 'text' && key !== 'type' && typeof value !== 'number') {
                throw error;
            };
        };

        diceCollection.set(item[0], item[1]);
    };
};
</script>

<template>
    <main>
        <div class="menu-area">
            <FileInput id="dice-collection" @file-upload="(file) => importedFile = file" />
            <Button
                text="Importar"
                :style="buttonStyle"
                @click="openFilePicker('dice-collection')"
            />
            
            <Button
                text="Exportar"
                :style="buttonStyle"
                :disabled="diceCollection.size === 0"
                @click="emitJSONFile(sortedCollection)"
            />

            <Button
                text="Voltar"
                :style="buttonStyle"
                @click="router.push({ name: 'dice' })"
            />
        </div>
        <h2>Coleção</h2>
        <div class="no-collection" v-if="diceCollection.size === 0">
            <p>Não há rolagens salvas.</p>
        </div>
        <div class="collection" v-else>
            <TransitionGroup name="list">
                <div
                    v-for="item of sortedCollection"
                    class="collection-item"
                    @click="applyRollConfig(item[1])"
                >
                    <div class="bold">{{ item[0] }}</div>
                    <div>{{ item[1].text }}</div>
                </div>
            </TransitionGroup>
        </div>
    </main>
</template>

<style scoped>
main {
    user-select: none;
}

.menu-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin-bottom: 0.5em;
}

.no-collection {
    text-align: center;
}

.collection {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 1em;
}

h2 {
    margin-top: 0.3em;
    margin-bottom: 0.5em;
    text-align: center;
}

.collection-item {
    display: grid;
    grid-template-columns: 3fr 2fr;
    cursor: pointer;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--color-border);
}

.collection-item:last-of-type {
    border: none;
}

.collection-item div {
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    text-align: center;
    align-self: center;
}
</style>