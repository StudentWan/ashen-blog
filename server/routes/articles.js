/**
 * @author {benyuwan@gmail.com}
 * @file 操作文章的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import ArticleController from '../controllers/articles'
import verify from '../middlewares/verify'

const api = 'articles'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', verify, ArticleController.addArticle)


module.exports = router
