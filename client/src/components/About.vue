<template>
        <div class="about-container">
            <h1>关于我</h1>
            <p v-html="parseMarkdown(about)"></p>
        </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file About me组件
 */

import parseMarkdown from '@/utils/parseMarkdown'

export default {
    data() {
        return {
            about: ''
        }
    },
    created() {
        axios.get('/api/v1/briefs')
            .then(res => this.about = res.data[0].content)
            .catch(err => alert(err))
    },
    methods: {
        parseMarkdown
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
    padding-bottom: 1em;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}

ul {
    padding-left: 1.2em;
    li {
        margin: 1em auto;
    }
}
</style>
