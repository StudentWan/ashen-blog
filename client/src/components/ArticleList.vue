<template>
    <div class="articlelist-container">
        <div class="article-list">
            <article v-for="{id, title, publishTime, content} in articles" :key="id">
                <header>
                    <h2>
                        <router-link class="title" :to="'/articles/' + id">{{ title }}</router-link>
                    </h2>
                    <h4 class="time">{{ publishTime }}</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" :to="'/articles/' + id">... continue reading</router-link>
                </footer>
            </article>
        </div>
        <div class="pagination">
            <span class="prev">←
                <a @click="prevPage">上一页</a>
            </span>
            <span class="next">
                <a @click="nextPage">下一页</a>→</span>
        </div>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 文章列表组件
 */

import parseMarkdown from '@/utils/parseMarkdown'
import moment from 'moment'

moment.locale('zh-CN')
export default {
    data() {
        return {
            offset: '',
            articles: '',
            maxPage: ''
        }
    },
    created() {
        this.offset = this.$route.query.page * 5
        axios.get(`/api/v1/articles?isPublished=1&offset=${this.offset}&limit=5`)
            .then(res => {
                const pattern = /<!-- more -->/i
                for (let article of res.data.articles) {
                    article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    pattern.test(article.content)
                    article.content = RegExp['$`']
                }
                this.articles = res.data.articles
                this.maxPage = res.data.maxPage
            })
            .catch(err => alert(err))
    },
    methods: {
        parseMarkdown,
        prevPage() {
            if (this.$route.query.page > 0) {
                this.$router.push({path: '/articles', query: {page: this.$route.query.page - 1}})
            }
        },
        nextPage() {
            if (this.$route.query.page < this.maxPage - 1) {
                this.$router.push({path: '/articles', query: {page: parseInt(this.$route.query.page, 10) + 1}})
            }
        }
    },
    beforeRouteUpdate(to, from, next) {
        if (to.path === '/articles') {
            this.offset = to.query.page * 5
            axios.get(`/api/v1/articles?isPublished=1&offset=${this.offset}&limit=5`)
                .then(res => {
                    const pattern = /<!-- more -->/i
                    for (let article of res.data.articles) {
                        article.publishTime = moment(article.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
                        pattern.test(article.content)
                        article.content = RegExp['$`']
                    }
                    this.articles = res.data.articles
                })
                .catch(err => alert(err))
        }
        next()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 覆盖article全局样式
h2 {
    border-bottom: none;
    padding: 0;
}

.title {
    color: $title;
    padding-bottom: 0.3em;
}

.title:hover {
    border-bottom: 2px solid $base;
}

.read-more {
    color: $base;
}

.pagination {
    @include flex($justify: space-between);
    font-size: 1.5rem;
    margin-top: 1.5em;
}

.prev,
.next {
    a {
        cursor: pointer;
        color: $base;
    }
}
</style>

