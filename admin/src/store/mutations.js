/**
 * @author {benyuwan@gmail.com}
 * @file vuex mutations
 */

export function updateArticle(state, {id, title, tags, content, isPublished}) {
    state.id = id
    state.title = title
    state.tags = tags
    state.content = content
    state.isPublished = isPublished
}

export function deleteArticle(state) {
    state.toggleDelete = !state.toggleDelete
}

export function updatePublishState(state) {
    state.isPublished = 1
}
