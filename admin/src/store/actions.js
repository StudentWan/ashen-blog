/**
 * @author {benyuwan@gmail.com}
 * @file vuex actions
 */

export async function saveArticle({commit, state}, {id, title, tags, content, isPublished}) {
    try {
        await axios.put(
                `/api/v1/articles/${id}`,
                {
                    title,
                    tags,
                    content,
                    isPublished
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
        commit('updateArticle', {id, title, tags, content, isPublished})
    }
    catch (err) {}
}
