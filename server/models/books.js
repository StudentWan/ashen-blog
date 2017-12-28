/**
 * @author {benyuwan@gmail.com}
 * @file books的model
 */

import query from '../utils/query'
import escape from '../utils/escape'

class Books {
    async getAllBooks() {
        return await query(`SELECT * FROM RD_LIST`)
    }

    async addBook({name, author, score}) {
        return await query(escape`INSERT INTO RD_LIST SET name=${name},author=${author},score=${score}`)
    }

    async updateBook(id, {name, author, score}) {
        return await query(escape`UPDATE RD_LIST SET name=${name},author=${author},score=${score} WHERE id=${id}`)
    }

    async deleteBook(id) {
        return await query(escape`DELETE FROM RD_LIST WHERE id=${id}`)
    }
}

export default new Books()
