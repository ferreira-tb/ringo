<script setup lang="ts">

</script>

<template>
    <main>
        <div>
            <h1>Criação de Personagem</h1>
        </div>
        <div>
            <router-view v-slot="{ Component, route }">
                <Transition name="fade" mode="out-in">
                    <Suspense>
                        <component :is="Component" :key="route.path" />

                        <template #fallback>
                            <span class="suspense-text">Carregando...</span>
                        </template>
                    </Suspense>
                </Transition>
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