<template>
    <article>
        <header>
            <h1>DOM中外部资源的解析和优化</h1>
            <h4 class="time">2017-10-26 16:49:00</h4>
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
    import zhengwen from '../Zhengwen'

    export default {
        data() {
            return {
                content: zhengwen.text
            }
        },
        methods: {
            parseMarkdown
        }
    }
</script>

<style lang="scss" scoped>
</style>
