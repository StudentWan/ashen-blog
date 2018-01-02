/**
 * @author {benyuwan@gmail.com}
 * @file introductions的model
 */

import query from '../utils/query'

class Introductions {
    async getIntroductions() {
        return await query(`SELECT id,title,tags,lastEditTime FROM Article where isPublished=1 ORDER BY lastEditTime DESC`)
    }
}

export default new Introductions()
