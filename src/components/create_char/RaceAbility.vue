<script setup lang="ts">
const props = defineProps<{
    bonus: RaceBonus
}>();
</script>

<template>
    <div class="race-ability">
        <span class="bold green-text">{{ `${props.bonus.nome}. ` }}</span>
        {{ props.bonus.efeito }}
    </div>
</template>

<style scoped>
.race-ability {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}
</style>