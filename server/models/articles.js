/**
 * @author {benyuwan@gmail.com}
 * @file articles的model
 */

import query from '../utils/query'

class Articles {
    async addArticle() {
        return await query(`INSERT INTO ARTICLE SET title='新文章',createTime=NOW(),lastEditTime=NOW()`)
    }

    async getAllArticleInfo() {
        return await query(`SELECT id,title,createTime FROM ARTICLE`)
    }
}

export default new Articles()
