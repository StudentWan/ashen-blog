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
        ctx.body = await Article.getAllArticleInfo()
    }

}

export default new ArticleControllers()
