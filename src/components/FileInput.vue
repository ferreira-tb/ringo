<script setup lang="ts">
defineProps<{
    id: string
}>();

defineEmits<{
    (e: 'fileUpload', files: InstanceType<typeof HTMLInputElement>['files']): void
}>();
</script>

<template>
    <div class="file-input-wrapper">
        <input
            type="file"
            accept=".json, application/json, text/json"
            :id="id"
            @change="$emit('fileUpload', ($event.target as HTMLInputElement).files)"
        >
    </div>
</template>

<style scoped>
.file-input-wrapper {
    display: none;
}
</style>