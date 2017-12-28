<template>
    <div class="reading-list-container main">
        <transition name="slide-fade">
            <div class="dialog-container" v-show="isDiaShow" @click="hideDialog($event)">
                <section class="dialog">
                    <h5>输入书籍</h5>
                    <star :score="score" id="score" @choose-star="chooseScore"></star>
                    <input type="text" id="name" placeholder="输入书籍名称...">
                    <input type="text" id="author" placeholder="输入作者...">
                    <section class="btn-container">
                        <button id="confirm" class="not-del" @click="confirmChange">确认</button>
                        <button id="cancel" class="delete">取消</button>
                    </section>
                </section>
            </div>
        </transition>
        <h2>阅读列表 /
            <span>READING LIST</span>
        </h2>
        <hr>
        <main>
            <section class="btn-container">
                <button id="add" class="not-del" @click="addBook">添加书籍</button>
            </section>
            <table class="rd-list">
                <tr>
                    <th>书名</th>
                    <th>作者</th>
                    <th>评分</th>
                    <th>编辑/删除</th>
                </tr>
                <tr v-for="{ name, author, score },index in books">
                    <td class="col-1">{{ name }}</td>
                    <td class="col-2">{{ author }}</td>
                    <td class="col-3">
                        <star :score="score"></star>
                    </td>
                    <td class="col-4">
                        <section class="btn-container">
                            <button id="edit" class="not-del" @click="editBook(index)">编辑</button>
                            <button id="delete" class="delete" @click="deleteBook(index)">删除</button>
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
 * @file 阅读列表的后台管理组件
 * */
import Star from '@/components/common/Star'

export default {
    data() {
        return {
            books: [],
            isDiaShow: false,
            isEditing: false,
            editingId: '',
            editingIndex: '',
            score: 0
        }
    },
    components: {
        Star
    },
    created() {
        axios.get('/api/v1/books')
            .then(res => {
                this.books = res.data
            })
            .catch(err => alert(err))
    },
    methods: {
        addBook() {
            this.isDiaShow = true
            this.isEditing = false
            this.score = 0
            document.getElementById('name').value = ''
            document.getElementById('author').value = ''
        },
        editBook(index) {
            this.isDiaShow = true
            this.isEditing = true
            this.score = this.books[index].score
            document.getElementById('name').value = this.books[index].name
            document.getElementById('author').value = this.books[index].author
            this.editingId = this.books[index].id
            this.editingIndex = index
        },
        deleteBook(index) {
            axios.delete(
                `/api/v1/books/${this.books[index].id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
                .then(res => {
                    this.books.splice(index, 1)
                })
                .catch(err => alert(err))
        },
        hideDialog(evt) {
            if (evt.target.className === 'dialog-container' || evt.target.id === 'cancel') {
                this.isDiaShow = false
            }
        },
        chooseScore({evt, width}) {
            const offsetX = evt.offsetX
            // toFixed返回的是字符串...
            let score = (parseInt(evt.target.dataset.index, 10) + parseFloat(offsetX / width)).toFixed(2)
            if (score > 4.9) {
                score = 5
            }
            this.score = score
        },
        confirmChange() {
            if (!this.isEditing) {
                // 添加书籍的逻辑
                const name = document.getElementById('name').value
                const author = document.getElementById('author').value
                const score = this.score
                if (name && author) {
                    axios.post(
                        '/api/v1/books',
                        {
                            name,
                            author,
                            score
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.ashenToken}`
                            }
                        })
                        .then(res => {
                            const id = res.data.insertId
                            const book = {
                                id,
                                name,
                                author,
                                score
                            }
                            this.books.push(book)
                            this.isDiaShow = false
                        })
                        .catch(err => alert(err))
                }
                else {
                    alert('输入信息不完整！')
                }
            }
            else {
                // 编辑书籍的逻辑
                const name = document.getElementById('name').value
                const author = document.getElementById('author').value
                const score = this.score
                const id = this.editingId
                if (name && author) {
                    axios.put(
                        `/api/v1/books/${id}`,
                        {
                            name,
                            author,
                            score
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.ashenToken}`
                            }
                        })
                        .then(res => {
                            this.books.splice(this.editingIndex, 1, {id, name, author, score})
                            this.isDiaShow = false
                        })
                        .catch(err => alert(err))
                }
                else {
                    alert('输入信息不完整！')
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    height: calc(100% - 48px);
    padding: 0.5em 0;
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
    .col-1,
    .col-2,
    .col-4 {
        width: 20%;
    }

    .col-2,
    .col-3 {
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
    background: rgba(0, 0, 0, 0.3);
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
        .star {
            margin-top: 0;
            /deep/ .star-item {
                width: 1.5em;
                height: 1.5em;
            }
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

.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-900px);
    opacity: 0;
}
</style>
