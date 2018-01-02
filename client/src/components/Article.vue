<template>
    <article>
        <header>
            <h1>{{ title }}</h1>
            <h4 class="time">{{ publishTime }}</h4>
            <h4>
                <span class="tag" v-for="tag in tags">{{ tag }}</span>
            </h4>
        </header>
        <p v-html="parseMarkdown(content)"></p>
    </article>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 特定文章组件
 */

import parseMarkdown from '@/utils/parseMarkdown'
import moment from 'moment'


moment.locale('zh-CN')
export default {
    data() {
        return {
            title: '',
            publishTime: '',
            tags: '',
            content: ''
        }
    },
    created() {
        const id = this.$route.params.id
        axios.get(`/api/v1/articles/${id}`)
            .then(res => {
                const data = res.data[0]
                this.title = data.title
                this.publishTime = moment(data.publishTime).format('YYYY年 MMM DD日 HH:mm:ss')
                this.content = data.content
                this.tags = data.tags ? data.tags.split(',') : []
            })
            .catch(err => alert(err))
    },
    methods: {
        parseMarkdown
    }
}
</script>

<style lang="scss" scoped>
.tag {
    color: $quote;
    margin-right: 1em;
}
</style>
