/**
 * @author {benyuwan@gmail.com}
 * @file 遍历加载路由文件
 */

import glob from 'glob'

export default function (dirname) {
    return new Promise((resolve, reject) => {
        const routers = []
        glob(
            `${dirname}/*`,
            {ignore: '**/index.js'},
            (err, files) => {
                if (err) {
                    reject(err)
                }
                files.forEach(file => {
                    const router = require(file)
                    routers.push(router)
                })
                resolve(routers)
            }
        )
    })
}

