/**
 * @author {benyuwan@gmail.com}
 * @file vuex mutations
 */

export function updateArticle(state, {id, title, tags, content}) {
    state.id = id
    state.title = title
    state.tags = tags
    state.content = content
}
