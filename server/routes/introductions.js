/**
 * @author {benyuwan@gmail.com}
 * @file 操作文章介绍信息的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import IntroController from '../controllers/introductions'

const api = 'introductions'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', IntroController.getIntroductions)

module.exports = router
