/**
 * @author {benyuwan@gmail.com}
 * @file users的model
 */

import query from '../utils/query'

class Users {
    async findUser(username) {
        return await query(`SELECT user,password FROM USER WHERE user='${username}'`)
    }
}

export default new Users()
