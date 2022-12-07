import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useKeysStore = defineStore('keys', () => {
    const createCharKey = ref(Symbol());
    const createChar = readonly(createCharKey);

    return { createChar };
});