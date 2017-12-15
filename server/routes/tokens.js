/**
 * @author {benyuwan@gmail.com}
 * @file 操作token的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import TokenController from '../controllers/tokens'
import verify from '../middlewares/verify'

const api = 'tokens'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', TokenController.createToken)
router.get('/check', verify, TokenController.checkToken)

module.exports = router

