<script setup lang='ts'>
defineProps<{
    text: string
}>();
</script>

<template>
    <button class="standard-button">{{ text }}</button>
</template>

<style scoped>
.standard-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-weight: 550;
    user-select: none;

    border-color: var(--color-green-darker);
    border-width: 2px;
    border-radius: 2px;

    margin: 0.3em;
    padding: 0.3em;
    min-width: fit-content;
    
    background-color: var(--color-green);
    color: var(--color-background);
    transition: 200ms all ease-in-out;
}
.standard-button:hover, .standard-button:active {
    background-color: var(--color-green-lighter);
}
</style>