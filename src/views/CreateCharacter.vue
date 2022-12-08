<script setup lang="ts">

</script>

<template>
    <main>
        <div>
            <h1>Criação de Personagem</h1>
        </div>
        <div>
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </div>
    </main>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 0.3em;
    user-select: none;
}
</style>