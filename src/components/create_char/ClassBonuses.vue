<script setup lang="ts">
import { useCharacterStore } from '@/stores/character.js';

const props = defineProps<{
    classInfoMap: ReadonlyMap<number, APICharacterClass>
}>();


const { character } = useCharacterStore();
</script>

<template>
    <section class="class-bonuses">
        <h2>Detalhes</h2>
        <div class="class-name-wrapper">
            <TransitionGroup>
                <template v-for="thisClass in character.class" :key="thisClass[0]">
                    <span v-if="classInfoMap.has(thisClass[0])" class="bold green span-wrapper">
                        {{ thisClass[1].name }}
                    </span>
                </template>
            </TransitionGroup>

        </div>
    </section>
</template>

<style scoped>
.class-bonuses h2 {
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