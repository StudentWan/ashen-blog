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

export function updateTitle(state, title) {
    state.title = title
}

export function updateTags(state, tags) {
    state.tags = tags
}

export function updateContent(state, content) {
    state.content = content
}
