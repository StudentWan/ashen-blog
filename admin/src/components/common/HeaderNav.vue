<template>
    <nav class="head-nav">
        <div class="logo-container">
            <img src="../../assets/img/logo.png" alt="" class="logo">
        </div>
        <div class="content-container">
            <section>
                <h4 class="title">无火的余灰<img src="../../assets/img/subhead.png" alt="" class="subhead"></h4>
            </section>
            <router-link class="log-out" to="/">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tuichu"></use>
                </svg>
                <span>&nbsp;登出</span>
            </router-link>
        </div>

    </nav>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 顶部公用导航栏组件
     * */
    export default {}
</script>

<style lang="scss" scoped>
    .head-nav {
        font-family: KaiShu, Arial, sans-serif;
        @include flex($justify: flex-start);
        font-size: 1.6rem;
        height: 3em;
        .logo-container {
            @include flex;
            width: 50px;
            height: inherit;
            //box-shadow: 4px 4px 5px -3px $base;
        }
        .content-container {
            @include flex($justify: space-between);
            padding: .5em;
            height: 100%;
            width: calc(100% - 50px);
            border-bottom: 2px solid $base;
            .log-out {
                @include flex;
            }
        }

        h4 {
            @include flex;
            margin: 0;
        }
        .subhead {
            width: 130px;
        }
    }
</style>
