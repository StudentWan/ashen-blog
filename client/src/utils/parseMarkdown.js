/**
 * @author {benyuwan@gmail.com}
 * @file 解析markdown编写的文章内容
 */

import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight(code) {
        return highlight.highlightAuto(code).value
    }
})

export default function (content) {
    return marked(content)
}
