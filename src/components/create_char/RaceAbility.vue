<script setup lang="ts">
import StandardTable from '@/components/StandardTable.vue';

const props = defineProps<{
    bonus: RaceBonus
}>();
</script>

<template>
    <section>
        <div class="race-ability">
            <span class="bold green-text">{{ `${props.bonus.nome}. ` }}</span>
            {{ props.bonus.efeito }}
        </div>
        <template v-if="props.bonus.extra">
            <div v-for="extra of props.bonus.extra" class="race-ability">{{ extra }}</div>
        </template>
        <div v-if="props.bonus.detalhes && props.bonus.detalhes.tipo === 'table'">
            <StandardTable :content="(props.bonus.detalhes.conteudo as StandardTableContent)" />
        </div>
    </section>
</template>

<style scoped>
.race-ability {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}
</style>