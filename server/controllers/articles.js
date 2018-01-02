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
        const {isPublished = 0, offset = 0, limit = 0} = ctx.query
        if (isPublished) {
            const res = {
                maxPage: '',
                articles: ''
            }
            const promises = []
            promises.push(Article.getPagination())
            promises.push(Article.getLimitArticles(offset, limit))
            const results = await Promise.all(promises)
            res.maxPage = Math.ceil(results[0][0]['COUNT(*)'] / limit)
            res.articles = results[1]
            ctx.body = res
        }
        else {
            ctx.body = await Article.getAllArticles()
        }
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
        const {title, tags, content} = ctx.request.body
        ctx.body = await Article.updateArticle(id, {title, tags, content})
    }

    async publishArticle(ctx) {
        const id = ctx.params.id
        const {title, tags, content} = ctx.request.body
        ctx.body = await Article.publishArticle(id, {title, tags, content})
    }

    async deleteArticle(ctx) {
        ctx.body = await Article.deleteArticle(ctx.params.id)
    }
}

export default new ArticleControllers()
