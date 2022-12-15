<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    content: StandardListContent
    type?: 'ol' | 'ul'
}>();

const listType = ref(props.type ?? 'ul');
</script>

<template>
    <div>
        <component :is="listType">
            <li v-for="(item, index) of content" :key="index">
                {{ item }}
            </li>
        </component>
    </div>
</template>

<style scoped>

</style>