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
                })
                .catch(err => alert(err))
        }
    }
</script>

<style lang="scss" scoped>
    .article {
        background: $white;
        @include flex($flow: column wrap, $align: flex-start);
        padding: .2em .5em;
        border: .1em solid $special;
        height: 5em;
        max-width: 100%;
        margin-bottom: 1.5em;
        header {
            max-width: 100%;
            font-size: 1.3rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: .2em;
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
