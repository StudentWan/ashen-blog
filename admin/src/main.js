/**
 * @author {benyuwan@gmail.com}
 * @file client端入口文件
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
