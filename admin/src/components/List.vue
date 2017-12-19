<template>
    <div class="list-container main">
        <h2>文章列表 /
            <span>ARTICLE LIST</span>
        </h2>
        <hr>
        <main>
            <div class="article-list">
                <section class="btn-container">
                    <button id="add" class="not-del" @click="postArticle">新文章</button>
                </section>
                <article-list ref="articleList"></article-list>
            </div>
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
    },
    methods: {
        postArticle() {
            axios.post(
                '/api/v1/articles',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
                .then(res => {
                    const updateId = res.data.insertId
                    this.$refs.articleList.updateList(updateId)
                })
                .catch(err => {
                    alert(err.message)
                })
        }
    },
    computed: {
        title() {
            return this.$store.state.title
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
}

.article-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .list {
        // margin: 0;
        padding: 0;
        list-style: none;
    }
}

.editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
}
</style>
