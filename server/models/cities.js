/**
 * @author {benyuwan@gmail.com}
 * @file city的model层，测试用
 */

import query from '../utils/query'

class Cities {
    async find() {
        return query('SELECT * FROM test_table')
    }
}

export default new Cities()
