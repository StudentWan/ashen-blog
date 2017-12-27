/**
 * @author {benyuwan@gmail.com}
 * @file 操作标签的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import TagController from '../controllers/tags'
import verify from '../middlewares/verify'

const api = 'tags'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.put('/:id', verify, TagController.updateTag)

module.exports = router
