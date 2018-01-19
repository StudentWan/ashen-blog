/**
 * @author {benyuwan@gmail.com}
 * @file ArticleList组件测试
 */

import Vue from 'vue'
import ArticleList from '@/components/ArticleList'

describe('ArticleList.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(ArticleList)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('a').textContent)
            .to.contain('上一页')
    })
})
