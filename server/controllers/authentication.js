/**
 * @author {benyuwan@gmail.com}
 * @file 关于认证的controller
 */

import jwt from 'jsonwebtoken'
import User from '../models/users'
import {
    secret
} from '../config'

class AuthControllers {

    async createToken(ctx) {
        const {
            username,
            password
        } = ctx.request.body
        const res = (await User.findUser(username))[0]
        if (res) {
            if (password === res.password) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 一小时
                }, secret)
                ctx.body = token
            } else {
                ctx.throw(401, '密码错误')
            }
        } else {
            ctx.throw(401, '用户名错误')
        }
    }

    isLogin(ctx, next) {
        jwt.verify(ctx.request.body.token, secret, (err, decoded) => {
            if (err) {
                ctx.throw(401, err.message)
            } else {
                ctx.body = '验证通过'
            }
        })
        next()
    }
}

export default new AuthControllers()
