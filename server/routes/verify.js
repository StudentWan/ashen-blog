/**
 * @author {benyuwan@gmail.com}
 * @file 验证token的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import AuthController from '../controllers/authentication'

const api = 'verify'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', AuthController.isLogin)

module.exports = router
