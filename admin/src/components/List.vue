<template>
    <div class="list-container main">
        <h2>文章列表 / <span>ARTICLE LIST</span></h2>
        <hr>
        <main>
            <article-list></article-list>
            <editor></editor>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 列表管理文章
     * */
    import ArticleList from '@/components/common/ArticleList'
    import Editor from '@/components/common/Editor'

    export default {
        components: {
            Editor,
            ArticleList
        }
    }
</script>

<style lang="scss" scoped>
    main {
        @include flex($justify: space-between);
        height: calc(100% - 48px);
        padding: .5em 0;
    }

    .list {
        width: 40%;
        height: 100%;
        margin: 0;
        list-style: none;
        overflow: auto;
        padding: 0 .8em .5em 0;
    }

    .editor {
        width: 58%;
        height: 100%;
        padding: 0 .8em .5em 0;
        overflow: auto;
    }
</style>
