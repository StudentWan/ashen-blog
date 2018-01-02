<template>
    <div id="app">
        <header-nav :maskFlag="maskFlag"></header-nav>
        <div id="main" @click="sweepMask">
            <router-view/>
        </div>
        <footer>本博客由<a class="github" href="https://github.com/StudentWan/ashen-blog" target="_blank">Ashen Blog系统</a>提供支持.</footer>
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
        },
        data() {
            return {
                maskFlag: false
            }
        },
        methods: {
            sweepMask() {
                this.maskFlag = !this.maskFlag
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        font-weight: 200;
        width: 95%;
        max-width: 850px;
        text-align: center;
        font-size: 1.4rem;
        margin: 0 auto;
        padding: 2em 0;
        color: $special;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
        .github {
            color: $base;
        }
    }
</style>
