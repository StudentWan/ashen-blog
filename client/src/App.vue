<template>
    <div id="app">
        <header-nav></header-nav>
        <router-view/>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file client根组件
 */

import HeaderNav from '@/components/common/HeaderNav'

export default {
    name: 'App',
    components: {
        HeaderNav
    }
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
    height: 100%;
    min-width: 300px;
}

html {
    font: {
        size: 62.5%;
        family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
    color: $word;
}

body * {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: $word;
}

#app {
    height: 100%;
}
</style>
