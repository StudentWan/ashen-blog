<template>
    <ul class="list">
        <li class="article" :class="{active: activeIndex === index, published: isPublished === 1}" v-for="{title, createTime, isPublished},index in articleList" @click="select(index)">
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
import {mapMutations} from 'vuex'

moment.locale('zh-CN')
export default {
    data() {
        return {
            articleList: [],
            activeIndex: ''
        }
    },
    created() {
        axios.get('/api/v1/articles')
            .then(res => {
                for (let article of res.data) {
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                }
                this.articleList.push(...res.data)
                // 如果有查询到文章，则将第一篇更新为正在编辑的文章
                if (this.articleList.length !== 0) {
                    this.updateArticle(this.articleList[0])
                    this.activeIndex = 0
                }
            })
            .catch(err => {
                alert(err)
            })
    },
    methods: {
        updateList(updateId) {
            axios.get(`/api/v1/articles/${updateId}`)
                .then(res => {
                    const article = res.data[0]
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    this.articleList.unshift(article)
                    this.activeIndex++
                })
                .catch(err => alert(err))
        },
        select(index) {
            // 选择需要编辑的文章
            this.activeIndex = index
            this.updateArticle(this.articleList[index])
        },
        ...mapMutations([
            'updateArticle'
        ])
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

.active {
    border: 1px solid $base;
}

.published {
    border-right: 4px solid $base;
}
</style>
