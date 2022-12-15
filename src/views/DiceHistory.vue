<script setup lang="ts">
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';

</script>

<template>
    <main>
        <Button text="Voltar" @click="router.push({ name: 'dice' })" />
    </main>
</template>

<style scoped>

</style>