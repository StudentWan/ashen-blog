/**
 * @author {benyuwan@gmail.com}
 * @file 路由根文件，遍历并处理每个路由文件
 */

import routesLoader from '../utils/routesLoader'

export default function (app) {
    routesLoader(`${__dirname}`).then(routers => {
        routers.forEach(router => {
            app
                .use(router.routes())
                .use(router.allowedMethods({
                    throw: true
                }))
        })
    })
}
