/**
 * @author {benyuwan@gmail.com}
 * @file server端的入口文件
 */

import 'source-map-support/register'
import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'koa-cors'
import onerror from 'koa-onerror'
import routing from './routes/'
import {port} from './config'

const app = new Koa()

onerror(app)

app
    .use(cors({
        maxAge: 7 * 24 * 60 * 60,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
        headers: 'Content-Type, Accept, Authorization'
    }))
    .use(logger())
    .use(bodyParser())
    .use(helmet())

routing(app)

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))
