/**
 * @author {benyuwan@gmail.com}
 * @file articles的model
 */

import query from '../utils/query'

class Articles {
    async addArticle() {
        return await query(`INSERT INTO ARTICLE SET title='新文章',create_time=NOW(),lastedit_time=NOW()`)
    }
}

export default new Articles()
