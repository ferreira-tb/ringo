<script setup lang="ts">
const props = defineProps<{
    text: string | null
}>();
</script>

<template>
    <div class="tooltip-wrapper">
        <div class="tooltip-box" :class="{ 'hide-tooltip': !props.text }">
            {{ props.text }}
        </div>
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

.hide-tooltip {
    display: none;
}
</style>