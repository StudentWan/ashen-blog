/**
 * @author {benyuwan@gmail.com}
 * @file articles的model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Articles {
    async addArticle() {
        return await query(`INSERT INTO ARTICLE SET title='新文章',createTime=NOW(),lastEditTime=NOW()`)
    }

    async getAllArticles() {
        return await query(`SELECT * FROM ARTICLE ORDER BY createTime DESC`)
    }

    async getOneArticle(id) {
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }

    async updateArticle(id, {title, tags, content, isPublished}) {
        return await query(escape`UPDATE ARTICLE SET title=${title}, tags=${tags}, content=${content}, lastEditTime=NOW(), isPublished=${isPublished} WHERE id=${id}`)
    }

    async deleteArticle(id) {
        return await query(escape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
}

export default new Articles()
