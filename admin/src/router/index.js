/**
 * @author {benyuwan@gmail.com}
 * @file admin端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '@/components/List'
import Tag from '@/components/Tag'
import ReadingList from '@/components/ReadingList'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/lists',
            component: List
        },
        {
            path: '/tags',
            component: Tag
        },
        {
            path: '/readinglists',
            component: ReadingList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
