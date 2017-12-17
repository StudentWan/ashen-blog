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

}

export default new ArticleControllers()
