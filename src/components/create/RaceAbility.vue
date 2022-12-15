<script setup lang="ts">
import Table from '@/components/Table.vue';
import DescriptionList from '@/components/DescriptionList.vue';

defineProps<{
    bonus: APIRaceBonus
}>();
</script>

<template>
    <section>
        <div class="race-ability">
            <span class="bold green-text">{{ `${bonus.nome}. ` }}</span>
            {{ bonus.efeito }}
        </div>
        <template v-if="bonus.extra">
            <div v-for="extra of bonus.extra" class="race-ability">{{ extra }}</div>
        </template>
        <div v-if="bonus.detalhes" class="race-ability-details">
            <Table
                v-if="bonus.detalhes.tipo === 'table'"
                :content="(bonus.detalhes.conteudo as StandardTableContent)"
            />
            <DescriptionList
                v-if="bonus.detalhes.tipo === 'description_list'"
                :content="(bonus.detalhes.conteudo as StandardDescriptionListContent)"
            />
        </div>
    </section>
</template>

<style scoped>
.race-ability {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}

.race-ability-details {
    padding-bottom: 0.5em;
}
</style>