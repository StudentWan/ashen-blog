/**
 * @author {benyuwan@gmail.com}
 * @file 关于标签的controller
 */

import Tag from '../models/tags'

class TagsController {
    async updateTag(ctx) {
        ctx.body = await Tag.updateTag(ctx.params.id, ctx.request.body.tags)
    }
}

export default new TagsController()
