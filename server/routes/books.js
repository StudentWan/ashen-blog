/**
 * @author {benyuwan@gmail.com}
 * @file 操作阅读列表的api
 */

import Router from 'koa-router'
import {baseApi} from '../config'
import BookController from '../controllers/books'
import verify from '../middlewares/verify'

const api = 'books'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.get('/', BookController.getBookList)
router.post('/', verify, BookController.addBook)
router.put('/:id', verify, BookController.editBook)
router.delete('/:id', verify, BookController.deleteBook)

module.exports = router
