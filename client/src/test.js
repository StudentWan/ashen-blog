export default {
    text: `
这是作为一个测试的摘要存在

这是作为一个测试的摘要存在

这是作为一个测试的摘要存在

这是作为一个测试的摘要存在

这是作为一个测试的摘要存在

这是作为一个测试的摘要存在

### 正文

#### 后面不再测试标题

#### 无序列表

* 1
* 2
* 3

#### 有序列表

1. 1
2. 2
3. 3

> 这里是引用

[测试谷歌链接](http://www.google.com)

![Alt text](https://caffeinatedrage.files.wordpress.com/2017/06/111.jpg)

**粗体测试**

*斜体测试*

| Tables |      Are      |  Cool |
| ------ | :-----------: | ----: |
| 1      | 1111111111111 | 22222 |
| 2      |   11111111    |   222 |
| 3      |     11111     |    22 |



\`\`\`javascript
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Blog from './Blog'
import {markdown} from './filters/index'
import './stylus/index.styl'

Vue.use(Router)
Vue.filter('markdown', markdown);

const router = new Router()
routes(router)
router.start(Blog, 'blog')
\`\`\`
    `
}

