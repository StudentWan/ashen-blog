/**
 * @file 检查文章格式的中间件
 * @author {benyuwan@gmail.com}
 */

export default async function (ctx, next) {
    const {title, tags, content, isPublished} = ctx.request.body
    if (isPublished) {
        if (tags === '' || title === '') {
            ctx.throw(400, '标题或者标签未设置！')
        }
        else {
            const pattern = /<!-- more -->/i
            if (!pattern.test(content)) {
                ctx.throw(400, '文章没有设置摘要分界！')
            }
        }
        await next()
    }
    else {
        await next()
    }
}
