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
    .list-container {
        h2 {
            font-weight: 400;
            span {
                color: $special;
            }
        }
    }

    main {
        @include flex($justify: space-between);
        height: calc(100% - 48px);
        padding: .5em 0;
    }
</style>
