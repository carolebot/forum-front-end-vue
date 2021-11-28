import { apiHelper } from './../utils/helpers'

export default {
  addComment({ restaurantId, commentText }) {
    return apiHelper.post('/comments', {
      restaurantId,
      commentText
    })
  },
  removeComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}