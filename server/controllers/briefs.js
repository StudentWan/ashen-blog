/**
 * @author {benyuwan@gmail.com}
 * @file 关于个人简介的controller
 */

import Brief from '../models/briefs'

class BriefControllers {
    async getBrief(ctx) {
        ctx.body = await Brief.getBrief()
    }

    async updateBrief(ctx) {
        const id = ctx.params.id
        const content = ctx.request.body.content
        ctx.body = await Brief.updateBrief(id, content)
    }
}

export default new BriefControllers()
