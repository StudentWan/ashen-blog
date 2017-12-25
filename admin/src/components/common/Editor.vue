<template>
    <div class="editor" @input="monitorChange($event)">
        <input type="text" class="title" id="title" v-model="title">
        <div class="operate-bar" v-show="id">
            <section class="tag-container">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-huiyuanbiaoqian"></use>
                </svg>
                <ul class="tags">
                    <li v-for="tag, index in tags" class="tag" :key="index">{{ tag }}
                        <sup @click="deleteTag(index)">x</sup>
                    </li>
                </ul>
                <input type="text" class="tag-input" id="tag-input" v-if="inputNow" @keyup.enter="toggleInput" @change="autoSave">
                <span class="tag-add" @click="toggleInput" v-else>+</span>
            </section>
            <section class="btn-container">
                <button id="delete" class="delete" @click="deleteArticle">删除文章</button>
                <button id="submit" class="not-del" @click="publishArticle">发布文章</button>
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
import {mapState} from 'vuex'
import debounce from 'lodash.debounce'

export default {
    data() {
        return {
            inputNow: false,
            title: '',
            tags: [],
            simplemde: '',
            isPublished: ''
        }
    },
    mounted() {
        this.simplemde = new SimpleMDE({
            autoDownloadFontAwesome: false,
            placeholder: 'Talk to me, Ashen one...',
            spellChecker: false
        })
        // 切换路由时可能出现id没有改变的情况，此时将store中保存的值赋给data的属性
        this.title = this.$store.state.title
        this.tags = this.$store.getters.getTags
        this.simplemde.value(this.$store.state.content)
        this.isPublished = this.$store.state.isPublished
    },
    methods: {
        toggleInput() {
            if (this.inputNow) {
                const tagVal = document.getElementById('tag-input').value
                if (tagVal && this.tags.indexOf(tagVal) === -1) {
                    this.tags.push(tagVal)
                }
            }
            this.inputNow = !this.inputNow
        },
        deleteTag(tagIndex) {
            this.tags.splice(tagIndex, 1)
            this.autoSave()
        },
        autoSave: debounce(function () {
            if (this.id) {
                this.$store.dispatch('saveArticle', {
                    id: this.id,
                    title: this.title,
                    tags: this.tags.join(','),
                    content: this.simplemde.value(),
                    isPublished: this.isPublished
                })
            }
        }, 1000),
        monitorChange(evt) {
            if (evt.target.id === 'title' || evt.target.tagName === 'TEXTAREA') {
                this.autoSave()
            }
        },
        deleteArticle() {
            axios.delete(
                `/api/v1/articles/${this.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
                .then(res => {
                    this.$store.commit('deleteArticle')
                })
                .catch(err => console.log(err))
        },
        publishArticle() {
            if (!this.isPublished) {
                axios.put(
                    `/api/v1/articles/${this.id}`,
                    {
                        title: this.title,
                        tags: this.tags.join(','),
                        content: this.simplemde.value(),
                        isPublished: 1
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.ashenToken}`
                        }
                    })
                    .then(res => {
                        this.$store.commit('updatePublishState')
                    })
                    .catch(err => alert('发布出错，可能是格式存在问题，如没有添加摘要分界：<!-- more -->'))
            }
        }
    },
    computed: {
        // 利用computed，获取正在编辑的文章的id
        ...mapState(['id'])
    },
    watch: {
        // 切换正在编辑的文章后，设置simplemde的内容
        id(val) {
            this.title = this.$store.state.title
            this.tags = this.$store.getters.getTags
            this.simplemde.value(this.$store.state.content)
            this.isPublished = this.$store.state.isPublished
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
