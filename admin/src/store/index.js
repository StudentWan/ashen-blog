/**
 * @author {benyuwan@gmail.com}
 * @file 状态管理的入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import states from './states'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    states,
    getters,
    mutations,
    actions
})

