<template>
    <div class="tag-container main">
        <h2>标签筛选 / <span>CHOOSE BY TAG</span></h2>
        <hr>
        <main>
            <div class="tag-list">
                <section class="tag">
                    <h5>标签</h5>
                    <ul class="tags" @click="chooseTag($event)">
                        <li class="tag" v-for="tag in tags">{{ tag }}</li>
                    </ul>
                </section>
                <article-list v-on:tags="getTags" ref="articleList"></article-list>
            </div>
            <editor></editor>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file
     * */
    import ArticleList from '@/components/common/ArticleList'
    import Editor from '@/components/common/Editor'

    export default {
        components: {
            Editor,
            ArticleList
        },
        data() {
            return {
                tags: [],
                chosenTags: []
            }
        },
        methods: {
            chooseTag(evt) {
                if (evt.target.tagName === 'LI') {
                    const value = evt.target.innerHTML
                    if (!evt.target.classList.contains('chosen')) {
                        this.chosenTags.push(value)
                    }
                    else {
                        this.chosenTags = this.chosenTags.filter(val => val !== value)
                    }
                    this.$refs.articleList.updateListByTags(this.chosenTags)
                    evt.target.classList.toggle('chosen')
                }
            },
            getTags(tags) {
                this.tags.push(...tags)
            }
        }
    }
</script>

<style lang="scss" scoped>
    main {
        @include flex($justify: space-between);
        height: calc(100% - 48px);
        padding: .5em 0;
    }

    .tag-list {
        width: 40%;
        height: 100%;
        overflow: auto;
        padding: 0 .8em .5em 0;
        .tags {
            @include flex($justify: flex-start);
            list-style: none;
            margin-bottom: 2em;
            padding: 0;
            .tag {
                margin: 0 1em 1em 0;
                padding: .3em;
                color: $base;
                border-radius: 2px;
                border: 1px solid $base;
                cursor: pointer;
            }
            .chosen {
                color: $white;
                background: $base;
            }
        }
        .list {
            margin: 0;
            list-style: none;
            padding: 0;
        }
    }

    .editor {
        width: 58%;
        height: 100%;
        padding: 0 .8em .5em 0;
        overflow: auto;
    }
</style>
