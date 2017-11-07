/**
 * @author {benyuwan@gmail.com}
 * @file admin端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Login
        }
    ]
})
