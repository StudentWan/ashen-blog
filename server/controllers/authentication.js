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
                    exp: Date.now() + 24 * 60 * 60 * 1000
                }, secret)
                ctx.body = {
                    status: true,
                    token: token
                }
            }
            else {
                ctx.body = {
                    status: false
                }
            }
        }
        else {
            ctx.body = {
                status: false
            }
        }
    }

    isLogin(ctx) {
        if (ctx.request.body.token) {
            const expireTime = jwt.verify(ctx.request.body.token, secret).exp

            if (expireTime > Date.now()) {
                ctx.body = true
            }
            else {
                ctx.body = false
            }
        }
        else {
            ctx.body = false
        }
    }
}

export default new AuthControllers()
