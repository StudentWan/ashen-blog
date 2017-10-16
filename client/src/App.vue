<template>
    <div id="app">
        <div class="nav-bar">
            <div class="site-nav">
                <router-link to="/">文章</router-link>
                <router-link to="/archive">归档</router-link>
                <router-link to="/tag">标签</router-link>
                <router-link to="/reading">阅读列表</router-link>
                <router-link to="/about">关于我</router-link>
            </div>
            <div class="site-title"></div>
        </div>
        <router-view/>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file client根组件
 */
export default {
    name: 'app'
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
    height: 100%;
}

html {
    font-size: 62.5%
}

body * {
    box-sizing: border-box;
}

#app {
    height: 100%;
}

.nav-bar {
    @include flex($justify: space-between);
    @include fix;
    padding: .5em;
    height: 4em;
    width: 100%;
    @include nav-font;
    border-bottom: 1px solid #e6e6e6;
    .site-nav {
        a {
            color: $word;
            padding-bottom: .2em;
            margin: auto .3em;
        }
        a:hover {
            border-bottom: 3px solid $base;
        }
        .router-link-exact-active {
            border-bottom: 3px solid $base;
        }
    }
}
</style>
