/**
 * @author {benyuwan@gmail.com}
 * @file vuex actions
 */

// export const testActions = ({commit, state}) => {
//     commit('testMutations')
// }

export async function saveArticle({commit, state}, {id, title, tags, content}) {
    const res = await axios.put(
            '/api/v1/articles',
            {
                id,
                title,
                tags,
                content
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.ashenToken}`
                }
            })
}
