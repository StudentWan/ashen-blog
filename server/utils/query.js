/**
 * @author {benyuwan@gmail.com}
 * @file 用Promise封装数据库操作
 */

import mysql from 'mysql'
import {db} from '../config/'

const pool = mysql.createPool(db)

export default function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            }
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
