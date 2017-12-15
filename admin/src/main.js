/**
 * @author {benyuwan@gmail.com}
 * @file client端入口文件
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/index.scss'
import '@/assets/img/icon/iconfont'
import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

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
                } else {
                    next()
                }
            })
            .catch(err => {
                // token验证不通过
                if (to.path !== '/login') {
                    next('login')
                } else {
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
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
