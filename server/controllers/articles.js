/**
 * @author {benyuwan@gmail.com}
 * @file 关于文章的controller
 */

import Article from '../models/articles'

class ArticleControllers {

    async addArticle(ctx) {
        const res = await Article.addArticle()
        ctx.body = res
    }

    async getArticleList(ctx) {
        ctx.body = await Article.getAllArticles()
    }

    async getOneArticle(ctx) {
        const res = await Article.getOneArticle(ctx.params.id)
        if (res.length === 0) {
            ctx.throw(404, '没有找到到该文章！')
        }
        ctx.body = res
    }

    async updateArticle(ctx) {
        const id = ctx.params.id
        const {title, tags, content, isPublished} = ctx.request.body
        if (isPublished) {
            const pattern = /<!-- more -->/i
            if (pattern.test(content)) {
                ctx.body = await Article.updateArticle(id, {title, tags, content, isPublished})
            }
            else {
                ctx.throw(400, '发布的文章格式存在问题')
            }
        }
        else {
            ctx.body = await Article.updateArticle(id, {title, tags, content, isPublished})
        }
    }

    async deleteArticle(ctx) {
        ctx.body = await Article.deleteArticle(ctx.params.id)
    }
}

export default new ArticleControllers()
