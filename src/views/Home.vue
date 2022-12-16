<script setup lang="ts">
import { reactive } from 'vue';
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';

const buttonStyle = reactive({
    width: '60%'
});
</script>

<template>
    <main>
        <div class="home-button-area">
            <Button
                text="Personagens"
                :style="buttonStyle" 
                @click="router.push({ name: 'characters' })"
            />

            <Button
                text="Dados"
                :style="buttonStyle"
                @click="router.push({ name: 'dice' })"
            />
        </div>
    </main>
</template>

<style scoped>
.home-button-area {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}
</style>