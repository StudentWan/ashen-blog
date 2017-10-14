/**
 * @author {benyuwan@gmail.com}
 * @file city的controller，用作测试
 */

import City from '../models/cities'

class CitiesControllers {

    async find(ctx) {
        ctx.body = await City.find()
    }

}

export default new CitiesControllers()
