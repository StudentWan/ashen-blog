/**
 * @author {benyuwan@gmail.com}
 * @file users的model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Users {
    async findUser(username) {
        return await query(escape`SELECT user,password FROM USER WHERE user=${username}`)
    }
}

export default new Users()
