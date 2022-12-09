<script setup lang="ts">
const props = defineProps<{
    content: StandardTableContent
}>();
</script>

<template>
    <table class="standard-table">
        <tr>
            <th class="bold green-text" v-for="header of props.content.th">{{ header }}</th>
        </tr>
        <template v-for="row of props.content.tr">
            <tr>
                <td v-for="cell of row">{{ cell }}</td>
            </tr>
        </template>
    </table>
</template>

<style scoped>
.standard-table {
    text-align: center;
    width: 100%;
}
</style>