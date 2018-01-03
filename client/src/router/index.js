/**
 * @author {benyuwan@gmail.com}
 * @file client端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'

import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
import Archive from '@/components/Archive'
import Tag from '@/components/Tag'
import ReadingList from '@/components/ReadingList'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/articles',
            component: ArticleList
        },
        {
            path: '/articles/:id',
            component: Article
        },
        {
            path: '/archives',
            component: Archive
        },
        {
            path: '/tags',
            component: Tag
        },
        {
            path: '/lists',
            component: ReadingList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            redirect: {
                path: 'articles',
                query: {
                    page: 0
                }
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    next()
})

export default router
