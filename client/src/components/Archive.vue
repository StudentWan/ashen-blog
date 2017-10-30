<template>
    <div class="archive-container">
        <div>
            <h1>文章归档</h1>
            <section>
                <h4>2017</h4>
                <ul class="list">
                    <li><router-link to="/articles/test">DOM中外部资源的解析和优化</router-link><span class="time">  10-22</span></li>
                    <li><router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link><span class="time">  09-28</span></li>
                    <li><router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！</router-link><span class="time">  09-22</span></li>
                    <li><router-link to="/articles/test">用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄</router-link><span class="time">  09-19</span></li>
                    <li><router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link><span class="time">  08-12</span></li>
                    <li><router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link><span class="time">  08-03</span></li>
                </ul>
            </section>
            <section>
                <h4>2017</h4>
                <ul class="list">
                    <li><router-link to="/articles/test">DOM中外部资源的解析和优化</router-link><span class="time">  10-22</span></li>
                    <li><router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link><span class="time">  09-28</span></li>
                    <li><router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！</router-link><span class="time">  09-22</span></li>
                    <li><router-link to="/articles/test">用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄</router-link><span class="time">  09-19</span></li>
                    <li><router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link><span class="time">  08-12</span></li>
                    <li><router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link><span class="time">  08-03</span></li>
                </ul>
            </section>
            <section>
                <h4>2017</h4>
                <ul class="list">
                    <li><router-link to="/articles/test">DOM中外部资源的解析和优化</router-link><span class="time">  10-22</span></li>
                    <li><router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link><span class="time">  09-28</span></li>
                    <li><router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！</router-link><span class="time">  09-22</span></li>
                    <li><router-link to="/articles/test">用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄</router-link><span class="time">  09-19</span></li>
                    <li><router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link><span class="time">  08-12</span></li>
                    <li><router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link><span class="time">  08-03</span></li>
                </ul>
            </section>
            <section>
                <h4>2017</h4>
                <ul class="list">
                    <li><router-link to="/articles/test">DOM中外部资源的解析和优化</router-link><span class="time">  10-22</span></li>
                    <li><router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link><span class="time">  09-28</span></li>
                    <li><router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！</router-link><span class="time">  09-22</span></li>
                    <li><router-link to="/articles/test">用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄</router-link><span class="time">  09-19</span></li>
                    <li><router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link><span class="time">  08-12</span></li>
                    <li><router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link><span class="time">  08-03</span></li>
                </ul>
            </section>
            <section>
                <h4>2017</h4>
                <ul class="list">
                    <li><router-link to="/articles/test">DOM中外部资源的解析和优化</router-link><span class="time">  10-22</span></li>
                    <li><router-link to="/articles/test">浏览器渲染详细过程：重绘、重排和composite只是冰山一角</router-link><span class="time">  09-28</span></li>
                    <li><router-link to="/articles/test">Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！</router-link><span class="time">  09-22</span></li>
                    <li><router-link to="/articles/test">用JS探索函数式编程!——把《Mostly Adequate Guide to Functional Programming》读薄</router-link><span class="time">  09-19</span></li>
                    <li><router-link to="/articles/test">彻底理解各种内置对象的__proto__</router-link><span class="time">  08-12</span></li>
                    <li><router-link to="/articles/test">如何优雅的关闭一个node 的http server</router-link><span class="time">  08-03</span></li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file 归档组件
     */

    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .archive-container {
        ul {
            /*padding-left: .2em;*/
            list-style-type: circle;
            li {
                margin: .8em 0;
            }
        }

        .date {
            color: $special;
        }

        a {
            color: $base;
        }
    }
</style>
