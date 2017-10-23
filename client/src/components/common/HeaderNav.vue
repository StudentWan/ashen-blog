<template>
    <header class="nav-container">
        <nav class="site-nav">
            <ul class="site-nav-list">
                <li>
                    <router-link to="/">文章</router-link>
                </li>
                <li>
                    <router-link to="/archive">归档</router-link>
                </li>
                <li>
                    <router-link to="/tag">标签</router-link>
                </li>
                <li>
                    <router-link to="/reading">阅读列表</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我</router-link>
                </li>
            </ul>
            <router-link to="/" class="nav-title">
                <img class="logo" src="../../assets/img/logo.png" alt="营火">
                <span class="title">Ashen One</span>
            </router-link>
            <!-- nav-menu使用inline svg，作为菜单按钮，优化加载两张图片实现hover这一问题 -->
            <svg class="nav-menu" :class="{'menu-chosen': isMaskShow}" viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg" @click="toggleMask">
                <defs></defs>
                <path
                    d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z"/>
            </svg>
        </nav>
        <transition name="slide-fade">
            <nav class="mask-nav" v-if="isMaskShow" @click="toggleMask">
                <ul class="mask-nav-list">
                    <li>
                        <router-link to="/">文章</router-link>
                    </li>
                    <li>
                        <router-link to="/archive">归档</router-link>
                    </li>
                    <li>
                        <router-link to="/tag">标签</router-link>
                    </li>
                    <li>
                        <router-link to="/reading">阅读列表</router-link>
                    </li>
                    <li>
                        <router-link to="/about">关于我</router-link>
                    </li>
                </ul>
            </nav>
        </transition>
        <div class="clearfix"></div>
    </header>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 公用的header
     */

    export default {
        name: 'HeaderNav',
        props: ['maskFlag'],
        data() {
            return {
                isMaskShow: false
            }
        },
        methods: {
            toggleMask() {
                this.isMaskShow = !this.isMaskShow
            }
        },
        watch: {
            maskFlag() {
                this.isMaskShow = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .site-nav {
        position: relative;
        @include flex($justify: space-between);
        z-index: 2;
        padding: 0.5em;
        height: 4em;
        width: 100%;
        font-size: 1.6rem;
        background: $white;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        .site-nav-list {
            @include flex;
        }
        .nav-title {
            @include flex;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .logo {
                width: 2.5em;
                height: 2.5em;
                margin-right: 0.5em;
            }
            .title {
                font: {
                    size: 2rem;
                    family: Dosis, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
                }
                letter-spacing: 0.1em;
            }
        }
        .nav-menu {
            visibility: hidden;
            width: 1.5em;
            height: 1.5em;
            border: 1px solid $word;
            border-radius: 2px;
            fill: $word;
        }
    }

    .mask-nav {
        z-index: 1;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 235px;
        font-size: 1.6rem;
        padding: 4.5em 1.5em 4em 1.5em;
        background: #f9f9f9;
        box-shadow: inset 0 0 4px rgba(0, 0, 0, .25);
        .mask-nav-list {
            li {
                font-size: 1.4rem;
                margin-bottom: 0.8em;
            }
        }
    }

    [class$="nav-list"] {
        padding: 0;
        list-style: none;
        a {
            padding-bottom: 0.2em;
            margin: auto 0.3em;
            &:hover {
                @include chosen-item;
            }
        }
        .router-link-exact-active {
            @include chosen-item;
        }
    }

    .menu-chosen {
        border: 1px solid $base !important;
        fill: $base !important;
    }

    @media screen and (max-width: 715px) {
        .site-nav {
            position: fixed;
            top: 0;
            left: 0;
            .site-nav-list {
                visibility: hidden;
            }
            .nav-menu {
                visibility: visible;
            }
        }
    }

    // slide-fade动画效果
    .slide-fade-enter-active {
        transition: all 0.5s ease;
    }

    .slide-fade-leave-active {
        transition: all 0.5s ease;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(235px);
    }
</style>
