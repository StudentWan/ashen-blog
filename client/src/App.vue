<template>
    <div id="app" @click="sweepMask($event)">
        <header-nav :maskFlag="maskFlag"></header-nav>
        <router-view id="main"/>
        <foot></foot>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file client根组件
     */

    import HeaderNav from '@/components/common/HeaderNav'
    import Foot from '@/components/common/Foot'

    export default {
        name: 'App',
        components: {
            HeaderNav,
            Foot
        },
        data() {
            return {
                maskFlag: false
            }
        },
        methods: {
            sweepMask(e) {
                if (e.target.id === 'main') {
                    this.maskFlag = !this.maskFlag
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
