/**
 * @author {benyuwan@gmail.com}
 * @file articles的model
 */

import query from '../utils/query'

class Articles {
    async addArticle() {
        return await query(`INSERT INTO ARTICLE SET title='新文章',createTime=NOW(),lastEditTime=NOW()`)
    }

    async getAllArticles() {
        return await query(`SELECT * FROM ARTICLE ORDER BY createTime DESC`)
    }

    async getOneArticle(id) {
        return await query(`SELECT * FROM ARTICLE WHERE id='${id}'`)
    }
}

export default new Articles()
