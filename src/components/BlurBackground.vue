<script setup lang="ts">
defineEmits<{
    (e: 'closeModal'): void
}>();
</script>

<template>
    <div class="blur-bg" @click.self="$emit('closeModal')"></div>
</template>

<style scoped>
.blur-bg {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: var(--blur-bg-background);
    z-index: var(--blur-bg-index);
}
</style>