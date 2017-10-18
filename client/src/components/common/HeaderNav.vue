<template>
    <header class="nav-container">
        <nav class="site-nav">
            <ul class="nav-list">
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
                <img class="logo" src="../../assets/img/logo.png" alt="營火">
                <span class="title">Ashen One</span>
            </router-link>
            <!-- nav-menu使用inline svg，作为菜单按钮，优化加载两张图片实现hover这一问题 -->
            <svg class="nav-menu" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z"/></svg>
        </nav>
        <nav class="mask-nav"></nav>
    </header>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 公用的header
 */

export default {
    name: 'HeaderNav',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.site-nav {
    position: relative;
    @include flex($justify: space-between);
    padding: .5em;
    height: 4em;
    width: 100%;
    font-size: 1.6rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);
    .nav-list {
        @include flex;
        padding: 0;
        list-style: none;
        a {
            padding-bottom: .2em;
            margin: auto .3em;
            &:hover {
                @include chosen-item;
            }
        }
        .router-link-exact-active {
            @include chosen-item;
        }
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
            margin-right: .5em;
        }
        .title {
            font: {
                size: 2rem;
                family: Dosis, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
            }
            ;
            letter-spacing: .1em;
        }
    }
    .nav-menu {
        visibility: hidden;
        width: 1.5em;
        height: 1.5em;
        border: 1px solid $word;
        border-radius: 2px;
        fill: $word;
        &:hover {
            border: 1px solid $base;
            fill: $base;
        }
    }

    @media screen and (max-width: 715px) {
        & {
            position: fixed;
        }
        .nav-list {
            visibility: hidden;
        }
        .nav-menu {
            visibility: visible;
        }
    }
}

.mask-nav {
    
}
</style>
