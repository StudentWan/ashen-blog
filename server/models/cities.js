/**
 * @author {benyuwan@gmail.com}
 * @file city的model层，测试用
 */

import query from '../utils/query'

class Cities {
    async find() {
        return await query('SELECT * FROM USER')
    }
}

export default new Cities()
