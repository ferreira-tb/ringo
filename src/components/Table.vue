<script setup lang="ts">
defineProps<{
    content: StandardTableContent
}>();
</script>

<template>
    <table class="standard-table">
        <tr>
            <th class="bold green-text" v-for="header of content.th">{{ header }}</th>
        </tr>
        <template v-for="row of content.tr">
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