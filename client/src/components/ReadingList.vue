<template>
    <div class="readinglist-container">
        <h1>阅读列表</h1>
        <table>
            <tr>
                <th>书名</th>
                <th>作者</th>
                <th>ashenの评分</th>
            </tr>
            <tr v-for="{name, author, score} in books">
                <td class="col-1">{{ name }}</td>
                <td class="col-2">{{ author }}</td>
                <td class="col-3">
                    <star :score="score"></star>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file 阅读列表组件
 */

import Star from '@/components/common/Star'

export default {
    components: {
        Star
    },
    data() {
        return {
            books: ''
        }
    },
    created() {
        axios.get('/api/v1/books')
            .then(res => {
                this.books = res.data
            })
            .catch(err => alert(err))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
    th {
        padding: 0.5em 0;
        color: $title;
        border-bottom: 1px solid $word;
    }
    td {
        text-align: center;
        /*font-size: 1.3rem;*/
        padding: 1em 0;
        border-bottom: 1px dotted $word;
    }

    .col-1,
    .col-2 {
        width: 25%;
    }

    .col-2 {
        border-left: 1px dotted $word;
        border-right: 1px dotted $word;
    }

    .col-3 {
        color: $base;
    }
}
</style>
