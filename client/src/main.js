/**
 * @author {benyuwan@gmail.com}
 * @file client端入口文件
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/index.scss'
import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    next()
})

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
