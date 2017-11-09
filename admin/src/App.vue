<template>
    <div id="app">
        <header-nav></header-nav>
        <side-nav></side-nav>
        <router-view/>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file admin端根组件
     */

    import HeaderNav from '@/components/common/HeaderNav'
    import SideNav from '@/components/common/SideNav'

    export default {
        name: 'app',
        components: {
            HeaderNav,
            SideNav
        }
    }
</script>

<style>
</style>
