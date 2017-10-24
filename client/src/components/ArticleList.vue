<template>
    <div>
        <p v-html="parseMarkdown(content)">
        </p>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 文章列表组件
 */

import parseMarkdown from '@/utils/parseMarkdown'

export default {
    data() {
        return {
            content: '### 你好'
        }
    },
    methods: {
        parseMarkdown
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

