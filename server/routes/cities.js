/**
 * @author {benyuwan@gmail.com}
 * @file 城市的路由文件，用作测试
 */

import Router from 'koa-router'
import {baseApi} from '../config/'
import CitiesController from '../controllers/cities'

const api = 'cities'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', CitiesController.find)

module.exports = router
