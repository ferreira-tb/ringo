<script setup lang="ts">
import Table from '@/components/Table.vue';
import DescriptionList from '@/components/DescriptionList.vue';

const props = defineProps<{
    bonus: APIRaceBonus
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
        <div v-if="props.bonus.detalhes" class="race-ability-details">
            <Table
                v-if="props.bonus.detalhes.tipo === 'table'"
                :content="(props.bonus.detalhes.conteudo as StandardTableContent)"
            />
            <DescriptionList
                v-if="props.bonus.detalhes.tipo === 'description_list'"
                :content="(props.bonus.detalhes.conteudo as StandardDescriptionListContent)"
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