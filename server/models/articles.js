/**
 * @author {benyuwan@gmail.com}
 * @file articles的model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Articles {
    async addArticle() {
        return await query(`INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''`)
    }

    async getAllArticles() {
        return await query(`SELECT * FROM ARTICLE ORDER BY createTime DESC`)
    }

    async getLimitArticles(offset, limit) {
        return await query(escape`SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ${parseInt(offset, 10)},${parseInt(limit, 10)}`)
    }

    async getPagination() {
        return await query(`SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1`)
    }

    async getOneArticle(id) {
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }

    async updateArticle(id, {title, tags, content, isPublished}) {
        return await query(escape`UPDATE ARTICLE SET title=${title}, tags=${tags}, content=${content} WHERE id=${id}`)
    }

    async publishArticle(id, {title, tags, content}) {
        return await query(escape`UPDATE ARTICLE SET title=${title}, tags=${tags}, content=${content}, publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    }

    async deleteArticle(id) {
        return await query(escape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
}

export default new Articles()
