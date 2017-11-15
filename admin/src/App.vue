<template>
    <div id="app">
        <template v-if="!isLogin">
            <header-nav></header-nav>
            <side-nav></side-nav>
        </template>
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
        },
        computed: {
            isLogin() {
                return this.$router.currentRoute.path === '/login'
            }
        }
    }
</script>

<style>
</style>
