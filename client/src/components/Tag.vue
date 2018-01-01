<template>
    <transition name="fade">
        <div class="tag-container">
            <h1>标签</h1>
            <nav>
                <ul class="tags">
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('JavaScript')">JavaScript</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('CSS')">CSS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('HTML')">HTML</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('前端工程化')">前端工程化</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('你不知道的JS')">你不知道的JS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('JavaScript')">JavaScript</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('CSS')">CSS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('HTML')">HTML</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('前端工程化')">前端工程化</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('你不知道的JS')">你不知道的JS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('JavaScript')">JavaScript</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('CSS')">CSS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('HTML')">HTML</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('前端工程化')">前端工程化</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="goAnchor('你不知道的JS')">你不知道的JS</a>
                    </li>
                </ul>
            </nav>
            <ul class="tag-list">
                <li>
                    <span id="JavaScript" name="JavaScript">JavaScript</span>
                    <ul>
                        <li>
                            <router-link to="/articles/test">DOM中外部资源的解析和优化</router-link>
                            <span class="time"> 10-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link>
                            <span class="time"> 09-28</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！
                            </router-link>
                            <span class="time"> 09-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">
                                用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄
                            </router-link>
                            <span class="time"> 09-19</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link>
                            <span class="time"> 08-12</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link>
                            <span class="time"> 08-03</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span id="CSS" name="CSS">CSS</span>
                    <ul>
                        <li>
                            <router-link to="/articles/test">DOM中外部资源的解析和优化</router-link>
                            <span class="time"> 10-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link>
                            <span class="time"> 09-28</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！
                            </router-link>
                            <span class="time"> 09-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">
                                用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄
                            </router-link>
                            <span class="time"> 09-19</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link>
                            <span class="time"> 08-12</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link>
                            <span class="time"> 08-03</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span id="HTML" name="HTML">HTML</span>
                    <ul>
                        <li>
                            <router-link to="/articles/test">DOM中外部资源的解析和优化</router-link>
                            <span class="time"> 10-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link>
                            <span class="time"> 09-28</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！
                            </router-link>
                            <span class="time"> 09-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">
                                用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄
                            </router-link>
                            <span class="time"> 09-19</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link>
                            <span class="time"> 08-12</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link>
                            <span class="time"> 08-03</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span id="前端工程化" name="前端工程化">前端工程化</span>
                    <ul>
                        <li>
                            <router-link to="/articles/test">DOM中外部资源的解析和优化</router-link>
                            <span class="time"> 10-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link>
                            <span class="time"> 09-28</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！
                            </router-link>
                            <span class="time"> 09-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">
                                用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄
                            </router-link>
                            <span class="time"> 09-19</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link>
                            <span class="time"> 08-12</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link>
                            <span class="time"> 08-03</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span id="你不知道的JS" name="你不知道的JS">你不知道的JS</span>
                    <ul>
                        <li>
                            <router-link to="/articles/test">DOM中外部资源的解析和优化</router-link>
                            <span class="time"> 10-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link>
                            <span class="time"> 09-28</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！
                            </router-link>
                            <span class="time"> 09-22</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">
                                用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄
                            </router-link>
                            <span class="time"> 09-19</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link>
                            <span class="time"> 08-12</span>
                        </li>
                        <li>
                            <router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link>
                            <span class="time"> 08-03</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
/**
 * @author {benyuwan@gmail.com}
 * @file Hello World
 */

export default {
    data() {
        return {}
    },
    methods: {
        goAnchor(id) {
            const anchor = document.getElementById(id)
            if (window.innerWidth > 480) {
                document.documentElement.scrollTop = anchor.offsetTop
                document.body.scrollTop = anchor.offsetTop
            }
            else {
                document.documentElement.scrollTop = anchor.offsetTop - 64
                document.body.scrollTop = anchor.offsetTop - 64
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tag-container {
    .tags {
        padding: 0;
        list-style: none;
        li {
            display: inline;
            margin-right: 0.3em;
        }
    }

    .tag-list {
        padding: 0;
        list-style: none;
        li {
            margin: 0.8em 0;
        }
    }

    a {
        color: $base;
    }
}
</style>
