/**
 * @author {benyuwan@gmail.com}
 * @file client端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Archive from '@/components/Archive'
import Tag from '@/components/Tag'
import ReadingList from '@/components/ReadingList'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Article',
            component: Article
        },
        {
            path: '/archive',
            name: 'Archive',
            component: Archive
        },
        {
            path: '/tag',
            name: 'Tag',
            component: Tag
        },
        {
            path: '/reading',
            name: 'ReadingList',
            component: ReadingList
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})
