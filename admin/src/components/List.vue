<template>
    <div class="list-container main">
        <h2>文章列表 / <span>ARTICLE LIST</span></h2>
        <hr>
        <main>
            <ul class="list">
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
                <li class="article">
                    <header>浏览器渲染详细过程：重绘、重排和composite只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉只是冰山一觉</header>
                    <p>2017年9月30日17：38：42</p>
                </li>
            </ul>
            <div class="editor">

            </div>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 列表管理文章
     * */

    import SimpleMDE from 'simplemde'

    export default {
        mounted() {
            const simplemde = new SimpleMDE({element: document.querySelector('.editor')})
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
        padding: .5em 6em;
        height: calc(100% - 48px);
        background: $background;
        h2 {
            font-weight: 400;
            span {
                color: $special;
            }
        }
    }

    main {
        @include flex($justify: space-between);
        height: calc(100% - 48px);
        padding: .5em 0;
        .list {
            width: 40%;
            height: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: auto;
            padding: .5em .8em .5em 0;
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

            // TODO: Last .article
        }
        .editor {
            width: 58%;
            height: 100%;
            // background: $quote;
        }
    }
</style>
