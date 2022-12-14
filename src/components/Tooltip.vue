<script setup lang="ts">
defineProps<{
    text: string
}>();
</script>

<template>
    <div class="tooltip-wrapper">
        <div class="tooltip-box">{{ text }}</div>
    </div>
</template>

<style scoped>
.tooltip-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.tooltip-box {
    background-color: var(--color-background-soft);
    color: var(--color-text);

    margin-top: 0.5em;
    padding: 0.5em;
    max-width: 90%;

    border-radius: 0.5em;
    text-align: center;
}
</style>