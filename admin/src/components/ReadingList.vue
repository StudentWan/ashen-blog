<template>
    <div class="reading-list-container main">
        <div class="dialog-container" v-if="isDiaShow" @click="hideDialog($event)">
            <section class="dialog">
                <h5>输入书籍</h5>
                <star score="5" id="rating"></star>
                <input type="text" id="name" placeholder="输入书籍名称...">
                <input type="text" id="author" placeholder="输入作者...">
                <section class="btn-container">
                    <button id="confirm" class="not-del">确认</button>
                    <button id="cancel" class="delete">取消</button>
                </section>
            </section>
        </div>
        <h2>阅读列表 / <span>READING LIST</span></h2>
        <hr>
        <main>
            <section class="btn-container">
                <button id="add" class="not-del" @click="showDialog">添加书籍</button>
            </section>
            <table class="rd-list">
                <tr>
                    <th>书名</th>
                    <th>作者</th>
                    <th>评分</th>
                    <th>编辑/删除</th>
                </tr>
                <tr v-for="{ name, author, rating } in books">
                    <td class="col-1">{{ name }}</td>
                    <td class="col-2">{{ author }}</td>
                    <td class="col-3"><star :score="rating"></star></td>
                    <td class="col-4">
                        <section class="btn-container">
                            <button id="edit" class="not-del" @click="showDialog">编辑</button>
                            <button id="delete" class="delete">删除</button>
                        </section>
                    </td>
                </tr>
            </table>
        </main>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file
     * */
    import Star from '@/components/common/Star'

    export default {
        data() {
            return {
                books: [
                    {
                        name: '雾都孤儿',
                        author: '狄更斯',
                        rating: 4
                    },
                    {
                        name: '93年',
                        author: '雨果',
                        rating: 5
                    }
                ],
                isDiaShow: false
            }
        },
        components: {
            Star
        },
        methods: {
            showDialog() {
                this.isDiaShow = true
            },
            hideDialog(evt) {
                if (evt.target.className === 'dialog-container'
                    || evt.target.id === 'confirm'
                    || evt.target.id === 'cancel') {
                    this.isDiaShow = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    main {
        height: calc(100% - 48px);
        padding: .5em 0;
        overflow: auto;
    }
    .rd-list {
        width: 100%;
        border-collapse: collapse;
        th {
            height: 3em;
            font-size: 1.6rem;
            border-bottom: 1px solid $word;
        }
        td {
            text-align: center;
            height: 4em;
            border-bottom: 1px dotted $word;
        }
        .col-1, .col-2, .col-4 {
            width: 20%;
        }

        .col-2, .col-3 {
            border-left: 1px dotted $word;
            border-right: 1px dotted $word;
        }
    }

    .dialog-container {
        @include flex;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        min-width: 1024px;
        min-height: 900px;
        overflow: auto;
        background: rgba(0, 0, 0, .3);
        .dialog {
            @include flex($flow: column wrap, $justify: flex-start);
            width: 400px;
            height: 300px;
            background: $white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
            border-top: 20px solid $base;
            border-radius: 5px;
            h5 {
                margin: 20px;
            }
            input {
                margin-bottom: 15px;
                width: 200px;
                height: 2.5em;
                border-radius: 2px;
                border: 1px solid $special;
                outline-color: $base;
            }
            .btn-container {
                width: 200px;
                @include flex($justify: space-between);
            }
        }
    }
</style>
