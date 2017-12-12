/**
 * @author {benyuwan@gmail.com}
 * @file 操作token的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import AuthController from '../controllers/authentication'

const api = 'token'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', AuthController.createToken)

module.exports = router

