<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
    <NavBar class="nav-bar"/>
    <div class="main-container">
        <router-view class="main-view"/>
    </div>
</template>

<style scoped>
.nav-bar {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
}
.main-container {
    position: absolute;
    top: 30px;
    bottom: 0;
    width: 100%;
    padding-left: 0.3em;
    padding-right: 0.3em;
    margin-top: 0.5em;
    overflow: hidden;
}
.main-view {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
