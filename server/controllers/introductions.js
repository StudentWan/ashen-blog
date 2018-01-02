/**
 * @author {benyuwan@gmail.com}
 * @file 关于文章介绍信息的controller
 */

import Introduction from '../models/introductions'

class IntroControllers {

    async getIntroductions(ctx) {
        ctx.body =  await Introduction.getIntroductions()
    }
}

export default new IntroControllers()
