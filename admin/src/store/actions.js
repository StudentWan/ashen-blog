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
    catch (err) {
        console.log('自动保存未成功，可能是文章格式问题，例如，没有摘要分界： <!-- more -->')
    }
}
