/**
 * @author {benyuwan@gmail.com}
 * @file briefs的model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Briefs {
    async getBrief() {
        return await query(`SELECT * FROM ABOUT`)
    }

    async updateBrief(id, content) {
        return await query(escape`UPDATE ABOUT SET content=${content} WHERE id=${id}`)
    }
}

export default new Briefs()
