/**
 * @author {benyuwan@gmail.com}
 * @file 遍历加载路由文件
 */

import glob from 'glob'

// TODO 这里是动态加载的模块，其实可以考虑静态加载，舍弃commonJS,优化时看
export default function (dirname) {
    return new Promise((resolve, reject) => {
        const routes = []
        glob(
            `${dirname}/*`,
            {ignore: '**/index.js'},
            (err, files) => {
                if (err) {
                    reject(err)
                }
                files.forEach(file => {
                    const route = require(file)
                    routes.push(route)
                })
                resolve(routes)
            }
        )
    })
}

