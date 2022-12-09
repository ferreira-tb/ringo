<script setup lang="ts">
const props = defineProps<{
    content: StandardDescriptionListContent
}>();
</script>

<template>
    <dl class="standard-desc-list">
        <template v-for="item of props.content" :key="item[0]">
            <dt class="green-text desc-list-title">{{ item[0] }}</dt>
            <dd>{{ item[1] }}</dd>
        </template>
    </dl>
</template>

<style scoped>
.standard-desc-list {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
}

.desc-list-title {
    text-align: center;
    margin-top: 0.3em;
}
</style>