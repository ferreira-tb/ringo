<script setup lang='ts'>

</script>

<template>
    <nav>
        <div>
            <router-link :to="{ name: 'home' }" class="home-page-link">
                Ringo
            </router-link>
        </div>
        <div class="nav-bar-menu">
            <div>
                Temporário
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-bar-menu {
    margin-right: 20px;
    display: flex;
}
.nav-bar-menu div {
    align-self: center;
    margin-left: 10px;
}
.home-page-link {
    font-size: 1.2em;
    font-weight: bolder;
    padding-left: 10px;
}
</style>