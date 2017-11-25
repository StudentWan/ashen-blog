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
                <input type="text" class="title" id="title">
                <div class="operate-bar">
                    <section class="tag-container">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-huiyuanbiaoqian"></use>
                        </svg>
                        <ul class="tags">
                            <li v-for="tag in tags">{{ tag }}</li>
                        </ul>
                        <input type="text" class="tag-input" id="tag-input" v-if="inputNow" @keyup.enter="toggleInput">
                        <span class="tag-add" @click="toggleInput" v-else>+</span>
                    </section>
                    <section class="btn-container">
                        <button id="delete" class="delete">删除文章</button>
                        <button id="submit" class="submit">发布文章</button>
                    </section>
                </div>
                <editor></editor>
            </div>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 列表管理文章
     * */
    import Editor from '@/components/common/SimpleMDE'

    export default {
        data() {
            return {
                tags: ['JavaScript', '前端页面'],
                inputNow: false,
                autosave: {
                    enable: true,
                    uniqueId: 'ashen',
                    delay: 1000
                }
            }
        },
        components: {
            Editor
        },
        methods: {
            toggleInput() {
                if (this.inputNow) {
                    const tagVal = document.getElementById('tag-input').value
                    if (tagVal) {
                        this.tags.push(tagVal)
                    }
                }
                this.inputNow = !this.inputNow
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container {
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
            list-style: none;
            overflow: auto;
            padding: 0 .8em .5em 0;
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
        }
        .editor {
            width: 58%;
            height: 100%;
            padding: 0 .8em .5em 0;
            overflow: auto;
        }
        .title {
            margin-bottom: .3em;
            width: 100%;
            height: 2em;
            border: none;
            font-size: 2.4rem;
            color: $title;
            outline: none;
            border-bottom: 1px solid $special;
            background: none;
            text-align: center;
        }
        .operate-bar {
            @include flex($justify: space-between);
            height: 4em;
            font-size: 1.3rem;
            margin-bottom: 1em;
            .tag-container {
                @include flex($justify: flex-start);
                .icon {
                    width: 1.5em;
                    height: 1.5em;
                    margin-right: 10px;
                }
                .tags {
                    @include flex;
                    list-style: none;
                    margin-right: 10px;
                    padding: 0;
                    li {
                        margin-right: 5px;
                        /*text-decoration: underline;*/
                        color: $base;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
                .tag-input {
                    margin-right: 10px;
                    width: 80px;
                    background: none;
                    border: none;
                    border-bottom: 1px solid $special;
                    outline: none;
                    color: $word;
                }
                .tag-add {
                    font: {
                        weight: 600;
                        size: 1.6rem;
                    }
                    color: $special;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }

            .btn-container {
                button {
                    border-radius: 2px;
                    outline: none;
                }
                .delete {
                    color: $word;
                    border: 1px solid $word;
                    margin-right: 10px;
                    &:hover {
                        color: $base;
                        border: 1px solid $base;
                    }
                }
                .submit {
                    color: $white;
                    background: $base;
                    border: 1px solid $base;
                    &:hover {
                        background: $white;
                        color: $word;
                        border: 1px solid $word;
                    }
                }
            }
        }

        .content {
            font-size: 1.6rem;
        }
    }
</style>
