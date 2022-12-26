<script setup lang='ts'>

</script>

<template>
    <nav class="nav-bar">
        <div>
            <router-link :to="{ name: 'home' }" class="home-page-link">
                Ringo
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav-bar {
    user-select: none;
}

.home-page-link {
    font-size: 1.2em;
    font-weight: bolder;
    padding-left: 10px;
}
</style>