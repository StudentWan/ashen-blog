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
    data() {
        return {
            // 必须为其设置初始值，防止开始的时候渲染
            isLogin: true
        }
    },
    components: {
        HeaderNav,
        SideNav
    },
    watch: {
        $route(val) {
            this.isLogin = val.path === '/login'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
