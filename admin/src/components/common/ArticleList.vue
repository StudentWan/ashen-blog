<template>
    <ul class="list">
        <li class="article" v-for="{title, createTime} in articleList">
            <header>{{ title }}</header>
            <p>{{ createTime }}</p>
        </li>
    </ul>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 文章列表组件
 * */

import moment from 'moment'
import {mapMutations, mapState} from 'vuex'

moment.locale('zh-CN')
export default {
    data() {
        return {
            articleList: []
        }
    },
    created() {
        axios.get('/api/v1/articles')
            .then(res => {
                for (let article of res.data) {
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                }
                this.articleList.push(...res.data)
                this.updateStore(this.articleList[0])
            })
            .catch(err => alert(err))
    },
    methods: {
        updateList(updateId) {
            axios.get(`/api/v1/articles/${updateId}`)
                .then(res => {
                    const article = res.data[0]
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    this.articleList.unshift(article)
                })
                .catch(err => alert(err))
        },
        ...mapMutations({
            updateStore: 'updateArticle'
        })
    },
    computed: {
        ...mapState(['id', 'title', 'tags', 'content'])
    }
}
</script>

<style lang="scss" scoped>
.article {
    @include flex($flow: column wrap, $align: flex-start);
    padding: 0.2em 0.5em;
    margin-bottom: 1.5em;
    height: 5em;
    max-width: 100%;
    background: $white;
    border: 0.1em solid $special;
    cursor: pointer;
    header {
        max-width: 100%;
        font-size: 1.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.2em;
    }
    p {
        margin: 0;
        color: $special;
    }
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
