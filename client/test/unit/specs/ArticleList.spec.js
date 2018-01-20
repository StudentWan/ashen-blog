/**
 * @author {benyuwan@gmail.com}
 * @file ArticleList组件测试
 */

import Vue from 'vue'
// import ArticleList from '@/components/ArticleList'
import Router from 'vue-router'

const Injector = require('!!vue-loader?inject!@/components/ArticleList.vue')

const ArticleList = Injector({
    '/api/v1/articles?isPublished=1&offset=0&limit=5': 'blahblah'
})



describe('ArticleList.vue', () => {
    Vue.use(Router)
    const router = new Router({
        routes: [
            {
                path: '/articles',
                component: ArticleList
            }
        ]
    })

    const Constructor = Vue.extend({...ArticleList, router})
    const vm = new Constructor().$mount()

    it('should render correct contents', () => {
        expect(vm.$el.querySelector('a').textContent)
            .to.contain('上一页')
    })
})
