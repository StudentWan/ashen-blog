/**
 * @author {benyuwan@gmail.com}
 * @file server端的入口文件
 */

import 'source-map-support/register'
import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import routing from './routes/'
import {port} from './config'

const app = new Koa()

app
    .use(logger())
    .use(bodyParser())
    .use(helmet())

routing(app)

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

