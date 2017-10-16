/**
 * @author {benyuwan@gmail.com}
 * @file client端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Article',
            component: Article
        }
    ]
})
