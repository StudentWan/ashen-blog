<template>
    <header class="nav-container">
        <nav class="site-nav">
            <ul class="nav-list">
                <li><router-link to="/">文章</router-link></li>
                <li><router-link to="/archive">归档</router-link></li>
                <li><router-link to="/tag">标签</router-link></li>
                <li><router-link to="/reading">阅读列表</router-link></li>
                <li><router-link to="/about">关于我</router-link></li>
            </ul>
            <div class="nav-title">
                <img src="../../assets/logo.png" alt="" width="30px" height="30px">
            </div>
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
    name: 'HeaderNav'
}
</script>

<style lang="scss" scoped>
.site-nav {
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
            color: $word;
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
}
</style>
