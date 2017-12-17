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

const router = new Router({
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

router.beforeEach((to, from, next) => {
    // redirect会重新进行路由守卫，next()不会
    if (localStorage.ashenToken) {
        axios.get(
                '/api/v1/tokens/check', {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
            .then(res => {
                // token验证通过
                const pathArr = ['/lists', '/tags', '/readinglists', '/about']
                if (pathArr.indexOf(to.path) === -1) {
                    next('lists')
                }
                else {
                    next()
                }
            })
            .catch(err => {
                // token验证不通过
                if (to.path !== '/login') {
                    next('login')
                }
                else {
                    next()
                }
            })
    }
    else {
        if (to.path !== '/login') {
            next('login')
        }
        else {
            next()
        }
    }
})

export default router
