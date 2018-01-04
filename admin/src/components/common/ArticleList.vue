<template>
    <ul class="list">
        <li class="article" :class="{active: activeIndex === index, published: isPublished === 1}" v-for="{title, createTime, isPublished, isChosen},index in articleList" @click="select(index)" v-if="isChosen">
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
            articleList: [],
            activeIndex: -1
        }
    },
    created() {
        axios.get('/api/v1/articles')
            .then(res => {
                for (let article of res.data) {
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    article.isChosen = true
                }
                this.articleList.push(...res.data)
                // 如果有查询到文章，则将第一篇更新为正在编辑的文章
                if (this.articleList.length !== 0) {
                    this.updateArticle(this.articleList[0])
                    this.activeIndex = 0
                    const tags = []
                    for (let article of this.articleList) {
                        if (article.tags) {
                            for (let tag of article.tags.split(',')) {
                                if (tags.indexOf(tag) === -1) {
                                    tags.push(tag)
                                }
                            }
                        }
                    }
                    this.$emit('tags', tags)
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
                    article.isChosen = true
                    this.articleList.unshift(article)
                    this.activeIndex++
                    this.updateArticle(this.articleList[this.activeIndex])
                })
                .catch(err => alert(err))
        },
        updateListByTags(chosenTags) {
            if (chosenTags.length === 0) {
                for (let article of this.articleList) {
                    article.isChosen = true
                }
            }
            else {
                for (let article of this.articleList) {
                    let flag = false
                    for (let tag of chosenTags) {
                        if (article.tags.indexOf(tag) !== -1) {
                            flag = true
                        }
                    }
                    if (flag) {
                        article.isChosen = true
                    }
                    else {
                        article.isChosen = false
                    }
                }

                for (let [index, article] of this.articleList.entries()) {
                    if (article.isChosen) {
                        this.activeIndex = index
                        this.updateArticle(this.articleList[this.activeIndex])
                        break
                    }
                }
            }
        },
        updateArticleTag(oldVal, newVal, chosenTags) {
            for (let [i, article] of this.articleList.entries()) {
                if (article.tags.length) {
                    const tags = article.tags.split(',')
                    const index = tags.indexOf(oldVal)
                    if (index !== -1) {
                        const newIndex = tags.indexOf(newVal)
                        // 如果新值在该文章中已经有了，则直接删除旧值，否则将旧值修改为新值
                        if (newIndex === -1) {
                            tags[index] = newVal
                            article.tags = tags.join(',')
                            axios.put(
                                `/api/v1/tags/${article.id}`,
                                {
                                    tags: article.tags
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.ashenToken}`
                                    }
                                })
                                .catch(err => alert(err))
                        }
                        else {
                            this.deleteSpecArticleTag(oldVal, i)
                        }
                        this.updateListByTags(chosenTags)
                    }
                }
            }
            // 防止更改了activeIndex的article，所以提交一个mutation
            this.updateArticle(this.articleList[this.activeIndex])
        },
        deleteSpecArticleTag(tag, i) {
            const article = this.articleList[i]
            article.tags = article.tags.split(',')
            const index = article.tags.indexOf(tag)
            article.tags.splice(index, 1)
            article.tags = article.tags.join(',')
            axios.put(
                `/api/v1/tags/${article.id}`,
                {
                    tags: article.tags
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
                .catch(err => alert(err))
        },
        deleteArticleTag(tag) {
            for (let article of this.articleList) {
                if (article.tags.length) {
                    const tags = article.tags.split(',')
                    const index = tags.indexOf(tag)
                    if (index !== -1) {
                        if (tags.length === 1 && article.isPublished === 1) {
                            console.error('已发布文章请至少保持一个tag!')
                        }
                        else {
                            tags.splice(index, 1)
                            article.tags = tags.join(',')
                            axios.put(
                                `/api/v1/tags/${article.id}`,
                                {
                                    tags: article.tags
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.ashenToken}`
                                    }
                                })
                                .catch(err => alert(err))
                        }
                    }
                }
            }
            // 防止更改了activeIndex的article，所以提交一个mutation
            this.updateArticle(this.articleList[this.activeIndex])
        },
        select(index) {
            // 选择需要编辑的文章
            this.activeIndex = index
            this.updateArticle(this.articleList[index])
        },
        ...mapMutations([
            'updateArticle'
        ])
    },
    computed: {
        ...mapState(['title', 'tags', 'content', 'isPublished', 'toggleDelete'])
    },
    watch: {
        title(val) {
            if (this.articleList.length !== 0) {
                this.articleList[this.activeIndex].title = val
            }
        },
        tags(val) {
            if (this.articleList.length !== 0) {
                this.articleList[this.activeIndex].tags = val
            }
        },
        content(val) {
            if (this.articleList.length !== 0) {
                this.articleList[this.activeIndex].content = val
            }
        },
        isPublished(val) {
            if (this.articleList.length !== 0) {
                this.articleList[this.activeIndex].isPublished = val
            }
        },
        toggleDelete(val) {
            this.articleList.splice(this.activeIndex, 1)
            if (this.activeIndex === this.articleList.length) {
                this.activeIndex--
            }
            if (this.articleList.length !== 0) {
                this.updateArticle(this.articleList[this.activeIndex])
            }
            else {
                this.updateArticle({
                    id: '',
                    title: '',
                    tags: '',
                    content: ''
                })
            }
        }
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
