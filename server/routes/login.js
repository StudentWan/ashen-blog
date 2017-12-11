/**
 * @author {benyuwan@gmail.com}
 * @file 登录验证的路由文件
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import LoginController from '../controllers/login'

const api = 'login'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', LoginController.login)

module.exports = router

