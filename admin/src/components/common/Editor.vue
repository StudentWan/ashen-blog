<template>
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
        <div class="content">
            <textarea></textarea>
        </div>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file SimpleMDE组件
     * */
    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'

    export default {
        data() {
            return {
                tags: ['JavaScript', '前端页面'],
                inputNow: false,
                simplemde: ''
            }
        },
        mounted() {
            this.simplemde = new SimpleMDE({
                autoDownloadFontAwesome: false,
                placeholder: 'Talk to me, Ashen one...',
                spellChecker: false
            })
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
</style>
