<script setup lang='ts'>
import { useCharacterStore } from '@/stores/character';

const { character } = useCharacterStore();
</script>

<template>
    <nav>
        <div>
            <router-link :to="{ name: 'home' }" class="home-page-link">
                🍎 Ringo
            </router-link>
        </div>
        <div class="nav-bar-menu">
            <span v-if="character.name">{{ character.name }}</span>
        </div>
    </nav>
</template>

<style scoped>
.nav-bar-menu {
    display: flex;
    margin-right: 20px;
    font-size: 1.2em;
}

.home-page-link {
    font-size: 1.2em;
    font-weight: bolder;
    padding-left: 10px;
}
</style>