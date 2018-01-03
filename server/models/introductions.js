/**
 * @author {benyuwan@gmail.com}
 * @file introductions的model
 */

import query from '../utils/query'

class Introductions {
    async getIntroductions() {
        return await query(`SELECT id,title,tags,publishTime FROM ARTICLE where isPublished=1 ORDER BY publishTime DESC`)
    }
}

export default new Introductions()
