<script setup lang="ts">
import { router } from '@/router/index.js';
import Button from '@/components/Button.vue';

</script>

<template>
    <section>
        <p class="text-line">A classe descreve a vocação de um personagem e suas aptidões especiais. Hora de escolher a sua.</p>
        <p class="text-line small">Se ficar em dúvida, apenas clique em <span class="bold">continuar</span>.</p>
        <p class="text-line small">A Ringo escolherá uma classe de acordo com sua raça.</p>
        
        <div class="classes-area">
            
        </div>

        <div class="button-area">
            <Button
                text="Continuar"
            />
            <Button
                text="Escolha pra mim"
            />
            <Button
                text="Voltar"
                @click.prevent="router.push({ name: 'create-char-step-2' })"
            />
        </div>
    </section>
</template>

<style scoped>

</style>