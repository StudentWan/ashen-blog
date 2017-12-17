<template>
    <div class="editor">
        <input type="text" class="title" id="title">
        <div class="operate-bar">
            <section class="tag-container">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-huiyuanbiaoqian"></use>
                </svg>
                <ul class="tags">
                    <li v-for="(tag, index) in tags" class="tag">{{ tag }}
                        <sup @click="deleteTag(index)">x</sup>
                    </li>
                </ul>
                <input type="text" class="tag-input" id="tag-input" v-if="inputNow" @keyup.enter="toggleInput">
                <span class="tag-add" @click="toggleInput" v-else>+</span>
            </section>
            <section class="btn-container">
                <button id="delete" class="delete">删除文章</button>
                <button id="submit" class="not-del">发布文章</button>
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
        },
        deleteTag(tagIndex) {
            this.tags.splice(tagIndex, 1)
        }
    },
    computed: {
        article() {
            return this.$store.state.article
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 0.3em;
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
            .tag {
                margin-right: 10px;
                /*text-decoration: underline;*/
                color: $base;
                position: relative;
                &:last-child {
                    margin-right: 0px;
                }
                sup {
                    display: inline-block;
                    visibility: hidden;
                    cursor: pointer;
                    color: $white;
                    line-height: 10px;
                    text-align: center;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: $special;
                }
                &:hover > sup {
                    visibility: visible;
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
}
.content {
    font-size: 1.6rem;
}
</style>
