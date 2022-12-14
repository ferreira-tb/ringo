<script setup lang="ts">
const props = defineProps<{
    classInfo: APICharacterClass
}>();
</script>

<template>
    <section class="class-bonuses">
        <span>{{ classInfo.nome }}</span>
    </section>
</template>

<style scoped>
.class-bonuses {
    text-align: center;
}
</style>