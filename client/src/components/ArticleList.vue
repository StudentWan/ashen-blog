<template>
    <div class="articlelist-container">
        <div class="article-list">
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
            <article>
                <header>
                    <h2>
                        <router-link class="title" to="/articles/test">DOM中外部资源的解析和优化</router-link>
                    </h2>
                    <h4 class="time">2017-10-26 16:49:00</h4>
                </header>
                <p class="abstract" v-html="parseMarkdown(content)"></p>
                <footer>
                    <router-link class="read-more" to="/articles/test">... continue reading</router-link>
                </footer>
            </article>
        </div>
        <div class="pagination">
            <span class="prev">←<router-link to="/">上一页</router-link></span>
            <span class="next"><router-link to="/">下一页</router-link>→</span>
        </div>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 文章列表组件
     */

    import parseMarkdown from '@/utils/parseMarkdown'
    import zhaiyao from '../Zhaiyao'


    export default {
        data() {
            return {
                content: zhaiyao.text
            }
        },
        methods: {
            parseMarkdown
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
        padding-bottom: .3em;
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

    .prev, .next {
        a {
            color: $base;
        }
    }
</style>

